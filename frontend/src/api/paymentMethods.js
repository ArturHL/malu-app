const url = '/api/paymethod';

async function getAllPayMethodsByUserId(userId) {
  try {
    const response = await fetch(`${url}/userId/${userId}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function createPayMethod(payMethod) {
  try {
    const response = await fetch(`${url}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payMethod),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function deletePayMethod(payMethodId) {
  try {
    const response = await fetch(`${url}/${payMethodId}`, {
      method: 'DELETE',
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getAllPayMethodsByUserId, createPayMethod, deletePayMethod };