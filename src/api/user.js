import apiUrl from "./config/apiConfg";


export async function fetchUser(id) {
    id = parseInt(id)
    
    if (id) {
        try {
            const response = await fetch(`${apiUrl}/users/${id}`);
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