import { Box, Center, Container, Vstack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { fetchPosts, fetchUsers } from '../api/posts';
import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Text, defineStyle, useColorModeValue } from '@chakra-ui/react';


function PreviewPost({ author = "Unknown", title = "The title", content = "soiejfpaosefijpaoeifjapeofijapeofiajzpeofiazjpefoiazejfpoaziefjpaozeifjpazoeifj opefaijepfoaiezjfpo ijefzpao fiazjep ofiaj" }) {
   
    useEffect(() => {
        console.log("author", author)
    })

    // const bgColor = useColorModeValue("tertiary1", "tertiary2");


    return (
        
        <Card 
            bg="tertiary2" 
            mb={8} 
            w={700}
            h={300}
            _hover={{
                cursor: 'pointer',
                bg: 'tertiary1',
                color: 'white',
                width: "750px",
                height: "350px",
                transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out"
            }}
            >
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
