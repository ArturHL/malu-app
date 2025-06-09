const url = '/api/user';

async function getUserByEmail(email) {
  try {
    const response = await fetch(`${url}/email/${email}`);
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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) throw new Error("Error al guardar usuario");

    const data = await response.json(); // <- obtenemos el objeto real del usuario
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}


async function updateUserById(userId, user) {
  try {
    const response = await fetch(`${url}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function deleteUserById(userId) {
  try {
    const response = await fetch(`${url}/${userId}`, {
      method: 'DELETE',
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getUserByEmail, saveNewUser, updateUserById, deleteUserById };