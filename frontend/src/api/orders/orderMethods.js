const url = '/api/order';

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

async function getAllOrders() {
  try {
    const response = await fetch(url, {
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Error al obtener órdenes");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getOrderByUserId(userId) {
  try {
    const response = await fetch(`${url}/user/${userId}`, {
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Error al obtener órdenes del usuario");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function saveOrder(order) {
  try {
    const response = await fetch(`${url}/save`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(order),
    });
    if (!response.ok) throw new Error("Error al guardar orden");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateStatusById(orderId, status) {
  try {
    const response = await fetch(`${url}/${orderId}`, {
      method: 'PATCH',
      headers: authHeaders(),
      body: JSON.stringify({ status }),
    });
    if (!response.ok) throw new Error("Error al actualizar estado de la orden");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { getAllOrders, getOrderByUserId, saveOrder, updateStatusById };
