import { Image, Box, Heading, Text } from "@chakra-ui/react";

function ViewPost({ id, author = "Unknown", title = "The title", content = "soiejfpaosefijpaoeifjapeofijapeofiajzpeofiazjpefoiazejfpoaziefjpaozeifjpazoeifj opefaijepfoaiezjfpo ijefzpao fiazjep ofiaj", imageSrc = "/images/profile1r.jpg" }) {



    return (
        <Box
            // bg="blackAlpha.200"
            maxW="Box.lg"
            p={8}
            color="white"
            centerContent
            mx="auto"
        >
            <Box>
                <Box display="flex" alignItems="center" fontSize="xl" mb={8}>
                    <Image
                        src="/images/profile1r.jpg"
                        borderRadius="full"
                        boxSize="100px"

                    />
                    <Text ml="10px" >By {author}</Text>
                </Box>
                <Heading textAlign="center" mb={8}>{title}</Heading>
                <Image src={imageSrc} mb={8} />
                <Text textAlign="justify" fontSize="3xl">{content}</Text>
            </Box>
        </Box>
    )
}

export default ViewPost;