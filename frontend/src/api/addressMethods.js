const url = '/api/address';

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

async function getAllAddressesByUser(userId) {
  try {
    const response = await fetch(`${url}/${userId}`, {
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Error al obtener direcciones");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getAddressById(addressId) {
  try {
    const response = await fetch(`${url}/search/${addressId}`, {
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Error al obtener dirección");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function createAddress(address) {
  try {
    const response = await fetch(`${url}/save`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(address),
    });
    if (!response.ok) throw new Error("Error al crear dirección");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateAddress(addressId, address) {
  try {
    const response = await fetch(`${url}/${addressId}`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify(address),
    });
    if (!response.ok) throw new Error("Error al actualizar dirección");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function deleteAddress(addressId) {
  try {
    const response = await fetch(`${url}/${addressId}`, {
      method: 'DELETE',
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Error al eliminar dirección");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export {
  getAllAddressesByUser,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress
};
