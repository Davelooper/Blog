import apiUrl from "./config/apiConfg";


export async function fetchPostComments(idPost) {
    try {
        const response = await fetch(`${apiUrl}/posts/${idPost}/comments`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        throw error;
    }
}