import { Image, Box, Heading, Text, Container } from "@chakra-ui/react";

function ViewPost({ id, author = "Unknown", title = "The title", content = "soiejfpaosefijpaoeifjapeofijapeofiajzpeofiazjpefoiazejfpoaziefjpaozeifjpazoeifj opefaijepfoaiezjfpo ijefzpao fiazjep ofiaj" }) {



    return (
        <Container
            bg="primary"
            maxW="container.lg"
            p={8}
            color="white"
            centerContent
            mx="auto"
        >
            <Box>
                <Heading textAlign="center">{title}</Heading>
                <Box display="flex" alignItems="center" fontSize="xl" mb={8}>
                    <Image
                        src="/images/profile1r.jpg"
                        borderRadius="full"
                        boxSize="100px"
                
                    />
                    <Text ml="10px" >By {author}</Text>
                </Box>
                <Box>
                    <Image src="/images/article1r.jpg" />
                    <Text textAlign="center" fontSize="3xl">{content}</Text>
                </Box>
            </Box>
        </Container>
    )
}

export default ViewPost;