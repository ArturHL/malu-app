const url = '/api/orderProduct';

async function getAllOrderProducts() {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getOrderProductById(orderProductId) {
  try {
    const response = await fetch(`${url}/${orderProductId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getOrderProductByOrderId(orderId) {
  try {
    const response = await fetch(`${url}/order/${orderId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function saveOrderProduct(orderProduct) {
  try {
    const response = await fetch(`${url}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderProduct),
    });
    return response
  } catch (error) {
    console.error(error);
  }
}

async function updateOrderProduct(orderProduct) {
  try {
    const response = await fetch(`${url}/${orderProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderProduct),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function deleteOrderProduct(orderProductId) {
  try {
    const response = await fetch(`${url}/${orderProductId}`, {
      method: 'DELETE',
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getAllOrderProducts, getOrderProductById, getOrderProductByOrderId, saveOrderProduct, updateOrderProduct, deleteOrderProduct };