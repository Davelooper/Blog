import ViewPost from '../components/ViewPost';
import { fetchPost } from '../api/post';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../api/user';
import { fetchPostComments } from '../api/postComments';
import { Container, HStack, Text, Divider, IconButton } from '@chakra-ui/react';
import ViewComment from '../components/ViewComment';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from 'react-router-dom';



function Post() {
    const [post, setPost] = useState({})
    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])
    const id = useParams().id
    const navigate = useNavigate()
    const location = useLocation()
    const imageSrc = location.state && location.state.imageSrc ? location.state.imageSrc : ""

    //Récupération du post
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

    //Récupération de l'auteur du post
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


    //Récupération des commentaires du post
    useEffect(() => {
        if (comments.length === 0) {
            async function fetchCommentsDataFromApi() {
                const result = await fetchPostComments(id)

                if (typeof result === "object" && Object.keys(result).length !== 0) {
                    setComments(result)
                } else {
                    console.error("Erreur lors de la récupération des données.")
                }
            }
            fetchCommentsDataFromApi()
        }
    })

    useEffect(() => {
        if (comments.length !== 0) {
            console.log("comments", comments);
        }
    })

    return (
        <Container
            bg="blackAlpha.200"
            // maxW="container.lg"
            p={8}
            color="white"
            mx="auto"
            minH="100vh"
        >
            <HStack spacing={2} align="center">
                <IconButton
                    aria-label="Revenir en arrière"
                    icon={<ArrowBackIcon />}
                    onClick={() => navigate(`/`)}
                    size="lg"
                    colorScheme="teal"
                    _hover={{
                        backgroundColor: "gray.500", // Changer la couleur de fond au survol
                    }}
                />
                <Text>Retour aux articles</Text>
            </HStack>

            <ViewPost imageSrc={imageSrc} />
            <Divider borderWidth="1px" mb="30px" />
            {comments.length !== 0 && (
                comments.map((comment) => (
                    <ViewComment
                        key={comment.id}
                        content={comment.body}
                        email={comment.email}
                        title={comment.name}
                    />
                ))
            )}
        </Container>
    );
}

export default Post;
