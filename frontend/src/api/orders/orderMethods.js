const url = '/api/order';

async function getAllOrders() {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getOrderByUserId(userId) {
  try {
    const response = await fetch(`${url}/user/${userId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function saveOrder(order) {
  try {
    const response = await fetch(`${url}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function updateStatusById(orderId, status) {
  try {
    const response = await fetch(`${url}/${orderId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getAllOrders, getOrderByUserId, saveOrder, updateStatusById };