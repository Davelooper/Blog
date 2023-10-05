import { Box } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts';

function Root() {
    const [posts, setPosts] = useState([])
    // console.log("plopiplop")



    useEffect(() => {

        if (posts.length === 0) {
            async function fetchDataFromApi() {
                const results = await fetchPosts()

                if (Array.isArray(results) && results.length != 0) {
                    setPosts(results)
                } else {
                    console.error("Erreur lors de la récupération des données.")
                }
            }
            fetchDataFromApi()

        }

    }, [posts])

    useEffect(() => {
        console.log("posts",posts)
    }, [posts])

    return (
        <Box bg='tomato' w='100%' p={4} color='white'>
            This is the Box
        </Box>
    );
}

export default Root;
