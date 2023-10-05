import { Box, Center, Container, Vstack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts';
import PreviewPost from '../components/PreviewPost';
import { Spinner, Text } from '@chakra-ui/react';

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
            bg="tertiary2"
            w="75%"
            maxW="container.lg"
            p={8}
            color="white"
            centerContent
            mx="auto"
        >
            {posts.length !== 0 ? (
                posts.map((post) => <PreviewPost key={post.id} author={post.userId} title={post.title} content={post.body} />)
            ) : (
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <Text mb={4} color={"text.100"} fontWeight="bold">Chargement des posts...</Text>
                    <Spinner size='xl' color='text.100' mx="auto" />
                </Box>
            )}
        </Container>
    );

}

export default Root;
