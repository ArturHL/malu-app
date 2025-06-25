const url = '/api/booking';

// 📦 Recomendación: mover estas funciones a authUtils.js para uso global
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

// Obtener reservaciones por ID de usuario
async function getReservationsByUserId(userId) {
  try {
    const response = await fetch(`${url}/user/${userId}`, {
      headers: authHeaders(),
    });
    if (!response.ok) throw new Error("Error al obtener reservas");
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

// Guardar nueva reservación
async function saveReservation(reservation) {
  try {
    const response = await fetch(`${url}/save`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(reservation),
    });
    if (!response.ok) throw new Error("Error al guardar reserva");
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

// Actualizar reservación por ID
async function updateReservationById(reservationId, updatedReservation) {
  try {
    const response = await fetch(`${url}/${reservationId}`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify(updatedReservation),
    });
    if (!response.ok) throw new Error("Error al actualizar reserva");
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export {
  getReservationsByUserId,
  saveReservation,
  updateReservationById
};
