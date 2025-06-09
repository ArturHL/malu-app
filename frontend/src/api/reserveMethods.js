const url = '/api/booking';

// Function to get reservations by user ID
async function getReservationsByUserId(userId) {
  try {
    const response = await fetch(`${url}/user/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Function to save a new reservation
async function saveReservation(reservation) {
  try {
    const response = await fetch(`${url}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Function to update a reservation by ID
async function updateReservationById(reservationId, updatedReservation) {
  try {
    const response = await fetch(`${url}/${reservationId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedReservation)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export { getReservationsByUserId, saveReservation, updateReservationById };