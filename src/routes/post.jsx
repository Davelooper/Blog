import ViewPost from '../components/ViewPost';
import { fetchPost } from '../api/post';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../api/user';


function Post() {
    const [post, setPost] = useState({})
    const [user, setUser] = useState({})
    const id = useParams().id;

    useEffect(() => {
        if (Object.keys(post).length === 0) {

            async function fetchPostDataFromApi() {
                const result = await fetchPost(id)

                if (typeof result === "object" && Object.keys(result).length !== 0) {
                    setPost(result)
                } else {
                    console.error("Erreur lors de la récupération des données.")
                }
            }
            fetchPostDataFromApi()
        }
    }, [post])

    useEffect(() => {
        if (Object.keys(post).length !== 0
            && Object.keys(user).length === 0) {

            async function fetchUserDataFromApi() {
                const result = await fetchUser(id)

                if (typeof result === "object" && Object.keys(result).length !== 0) {
                    setUser(result)
                } else {
                    console.error("Erreur lors de la récupération des données.")
                }
            }
            fetchUserDataFromApi()
        }
    }, [post, user])

    useEffect(() => {
        if (post) {
            console.log("post ", post);
        }
        if (user) {
            console.log("user", user);
        }
    })
    return (
        <ViewPost/>
    );
}

export default Post;
