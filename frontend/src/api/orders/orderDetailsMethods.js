const url = '/api/orderProduct';

// Puedes mover esto a un archivo global como 'authUtils.js'
function getAuthToken() {
  return localStorage.getItem("auth");
}

function authHeaders(extraHeaders = {}) {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...extraHeaders,
  };
}

async function getAllOrderProducts() {
  try {
    const response = await fetch(url, {
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Error al obtener orderProducts");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getOrderProductById(orderProductId) {
  try {
    const response = await fetch(`${url}/${orderProductId}`, {
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Error al obtener orderProduct por ID");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getOrderProductByOrderId(orderId) {
  try {
    const response = await fetch(`${url}/order/${orderId}`, {
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Error al obtener orderProducts por orden");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function saveOrderProduct(orderProduct) {
  try {
    const response = await fetch(`${url}/save`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(orderProduct),
    });
    if (!response.ok) throw new Error("Error al guardar orderProduct");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateOrderProduct(orderProduct) {
  try {
    const response = await fetch(`${url}/${orderProduct.id}`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify(orderProduct),
    });
    if (!response.ok) throw new Error("Error al actualizar orderProduct");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function deleteOrderProduct(orderProductId) {
  try {
    const response = await fetch(`${url}/${orderProductId}`, {
      method: 'DELETE',
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Error al eliminar orderProduct");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export {
  getAllOrderProducts,
  getOrderProductById,
  getOrderProductByOrderId,
  saveOrderProduct,
  updateOrderProduct,
  deleteOrderProduct
};
