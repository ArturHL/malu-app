const url = '/api/address';

async function getAllAddressesByUser(userId) {
  try {
    const response = await fetch(`${url}/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getAddressById(addressId) {
  try {
    const response = await fetch(`${url}/search/${addressId}`);
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function createAddress(address) {
  try {
    const response = await fetch(`${url}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(address),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function updateAddress(addressId, address) {
  try {
    const response = await fetch(`${url}/${addressId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(address),
    });
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function deleteAddress(addressId) {
  try {
    const response = await fetch(`${url}/${addressId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getAllAddressesByUser, getAddressById, createAddress, updateAddress, deleteAddress };