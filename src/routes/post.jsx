import ViewPost from '../components/ViewPost';
import { fetchPost } from '../api/post';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../api/user';
import { fetchPostComments } from '../api/postComments';
import { Container, HStack, Text, Divider, IconButton, Box, Spinner, VStack } from '@chakra-ui/react';
import ViewComment from '../components/ViewComment';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { generateProfileRandomImageURL } from '../utils/imagesUtils';

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
                    console.error("Erreur lors de la récupération des données des posts.")
                }
            }
            fetchPostDataFromApi()
        } else {
            console.log("post", post);
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
                    console.error("Erreur lors de la récupération des données de l'auteur.")
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
                    console.error("Erreur lors de la récupération des données des commentaires.")
                }
            }
            fetchCommentsDataFromApi()
        }
    })

    useEffect(() => {
        const imagePlop = generateProfileRandomImageURL()
        console.log("imagePlop", imagePlop);
    })

    return (
        <>
        <NavBar />
        <Container>
            <HStack mt={30} spacing={2} mb={30} align="center">
                <IconButton
                    aria-label="Revenir en arrière"
                    icon={<ArrowBackIcon />}
                    onClick={() => navigate(`/`)}
                    size="lg"
                />
                <Text>Retour aux articles</Text>
            </HStack>
            {Object.keys(post).length !== 0 && Object.keys(user).length !== 0 ?
                <ViewPost profileImageSrc={generateProfileRandomImageURL()} imageSrc={imageSrc} title={post.title} content={post.body} author={user.name} />
                :
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <Text mb={4}  fontWeight="bold">Chargement des données de l'auteur</Text>
                    <Spinner size='xl'  mx="auto" />
                </Box>

            }
            <Divider borderWidth="1px" mb={100} mt={30} />
            {comments.length !== 0 && (
                <VStack>
                    {
                        comments.map((comment) => (
                            <ViewComment
                                key={comment.id}
                                content={comment.body}
                                email={comment.email}
                                title={comment.name}
                            />
                        ))
                    }
                </VStack>
            )}
        </Container>
        </>
    );
}

export default Post;
