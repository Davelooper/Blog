import { Image, Box, Heading, Text, Center } from "@chakra-ui/react";

function ViewPost({ profileImageSrc = "/images/profile1r.jpg", author = "Unknown", title = "The title", content = "soiejfpaosefijpaoeifjapeofijapeofiajzpeofiazjpefoiazejfpoaziefjpaozeifjpazoeifj opefaijepfoaiezjfpo ijefzpao fiazjep ofiaj", imageSrc = "/images/profile1r.jpg" }) {

    return (
        <Box
            // bg="blackAlpha.200"
            maxW="Box.lg"
            p={8}
            color="white"
            mx="auto"
        >
            <Box>
                <Box display="flex" alignItems="center"  fontSize="xl" mb={8}>
                    <Image
                        src={profileImageSrc}
                        borderRadius="full"
                        boxSize="75px"

                    />
                    <Text ml="10px" >By {author}</Text>
                </Box>
                <Heading textAlign="center" mt={50} mb={8}>{title}</Heading>
                <Center mb={30}>
                    <Image src={imageSrc} mb={8} />
                </Center>
                <Text textAlign="justify" fontSize="3xl">{content}</Text>
            </Box>
        </Box>
    )
}

export default ViewPost;