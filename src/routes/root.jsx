import { Box, Center, Container, Vstack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts';
import { fetchUsers } from '../api/users';
import PreviewPost from '../components/PreviewPost';
import { Spinner, Text } from '@chakra-ui/react';

function Root() {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {

        if (posts.length === 0) {
            async function fetchPostsDataFromApi() {
                const results = await fetchPosts()

                if (Array.isArray(results) && results.length != 0) {
                    setPosts(results)
                } else {
                    console.error("Erreur lors de la récupération des données.")
                }
            }
            fetchPostsDataFromApi()

        }

    }, [posts])

    useEffect(() => {

        if (users.length === 0) {
            async function fetchUsersDataFromApi() {
                const results = await fetchUsers()

                if (Array.isArray(results) && results.length != 0) {
                    setUsers(results)
                } else {
                    console.error("Erreur lors de la récupération des données.")
                }
            }
            fetchUsersDataFromApi()

        }

    }, [users])

    return (
        <Container
            bg="primary"
            maxW="container.lg"
            p={8}
            color="white"
            centerContent
            mx="auto"
        >
            {posts.length !== 0 && users.length !== 0 ? (
                posts.map((post) => {
                    const author = users.find(user => user.id === post.userId)

                    return <PreviewPost
                        key={`post-${post.id}`}
                        author={author}
                        title={post.title}
                        content={post.body}
                        id={post.id}
                    />})
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
