import { Box, Center, Container, Vstack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { fetchPosts, fetchUsers } from '../api/posts';
import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Text, defineStyle } from '@chakra-ui/react';


const test = defineStyle({
    fontSize: 'lg',

})

function PreviewPost({ author = "Unknown", title = "The title", content = "soiejfpaosefijpaoeifjapeofijapeofiajzpeofiazjpefoiazejfpoaziefjpaozeifjpazoeifj opefaijepfoaiezjfpo ijefzpao fiazjep ofiaj" }) {

    useEffect(() => {
        console.log("author", author)
    })

    return (
        
        <Card bg="tertiary2" mb={8} w={700}>
            <CardHeader>
                <Heading size='md'>{title}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Contenu
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {content}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Auteur
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {author.name}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default PreviewPost;
