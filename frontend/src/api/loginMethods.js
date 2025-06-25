const url = '/api/login';

async function login(email, password) {
    const user = {
        email: email,
        password: password
    }
    try {
        const response = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        });

        if (!response.ok) throw new Error("Error");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export { login };