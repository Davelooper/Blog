import apiUrl from "./config/apiConfg";


export async function fetchPost(id) {
    if (id) {
        try {
            const response = await fetch(`${apiUrl}/posts/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
            throw error;
        }
    } else {
        console.error('Aucun id renseigné')
    }
   
}