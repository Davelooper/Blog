import { Box, Center, Container, Vstack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts';
import PreviewPost from '../components/PreviewPost';

function Root() {
    const [posts, setPosts] = useState([])

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
        console.log("posts", posts)
    }, [posts])

    return (
        <Container
            bg='tomato'
            w='75%' 
            maxW='container.lg' 
            p={8}
            color='white'
            centerContent 
            mx='auto' 
        >
            <PreviewPost author='THE AUTHOR' title='VOICI LE TITRE' content='Voici le contenu de mon post.'/>
        </Container>
    );
}

export default Root;
