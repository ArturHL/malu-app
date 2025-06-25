const url = '/api/user';

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

async function getUserByEmail(email) {
  try {
    const response = await fetch(`${url}/email/${email}`, {
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Usuario no encontrado");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function saveNewUser(user) {
  try {
    const response = await fetch(`${url}/save`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error("Error al guardar usuario");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateUserById(userId, user) {
  try {
    const response = await fetch(`${url}/${userId}`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function deleteUserById(userId) {
  try {
    const response = await fetch(`${url}/${userId}`, {
      method: 'DELETE',
      headers: authHeaders(),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { getUserByEmail, saveNewUser, updateUserById, deleteUserById };
