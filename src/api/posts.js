import apiUrl from "./config/apiConfg";


export async function fetchPosts() {
    try {
        const response = await fetch(`${apiUrl}/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        throw error;
    }
}