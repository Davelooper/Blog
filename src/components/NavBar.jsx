import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate()

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            bg="primary"
            color="white"
            padding="1rem"
        >
            <Flex align="center" mr={5}>
                <Text fontSize="lg" color="gray.500" fontWeight="bold" fontFamily='Cormorant Garamond, serif'>
                    Techno Blog
                </Text>
            </Flex>

            <Box display={{ base: 'block', md: 'none' }} onClick={() => console.log('Menu clicked')}>
                <svg
                    fill="white"
                    width="12px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    cursor="pointer"
                >
                    <title>Menu</title>
                    <path
                        fillRule="evenodd"
                        d="M2 3.5A.5.5 0 012.5 3h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm0 5A.5.5 0 012.5 8h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z"
                    />
                </svg>
            </Box>

            <Box
                display={{ base: 'none', md: 'block' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                flexGrow={1}
            >
                <Flex align="center" justify={{ base: 'center', md: 'flex-end' }}>
                    <Link
                        mx={2}
                        _hover={{ transform: 'scale(1.1)' }}
                        onClick={() => navigate("/")}
                    >Accueil</Link>
                    <Link
                        mx={2}
                        _hover={{ transform: 'scale(1.1)' }}
                    >À propos</Link>
                    <Link
                        mx={2}
                        _hover={{ transform: 'scale(1.1)' }}
                    >Contact</Link>
                </Flex>
            </Box>
        </Flex>
    );
}

export default NavBar;
