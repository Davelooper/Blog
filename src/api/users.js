import apiUrl from "./config/apiConfg";


export async function fetchUsers() {
    try {
        const response = await fetch(`${apiUrl}/users`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        throw error;
    }
}