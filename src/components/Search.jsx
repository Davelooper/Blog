import React from "react";
import { Box, Flex, Heading, Input, Select } from "@chakra-ui/react";


function Search({ searchText, searchCategory, setSearchText, setSearchCategory }) {



    return (
        <Box mt={100} mb={200} w="100%">
            <Heading fontWeight="light">Rechercher dans les articles :</Heading>
            <Flex mt={10} justifyContent="space-evenly" wrap="wrap" w="100%">
                <Input
                    placeholder="Mots clés"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    color="tertiary"
                    w="30%"
                    borderWidth="2px"
                    borderColor="tertiary"
                    _focus={{
                        borderColor: "quaternary", 
                        borderWidth: "2px", 
                      }}
                />

                <Select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    color="tertiary"
                    placeholder="Sélectionnez une catégorie"
                    cursor="pointer"
                    w="30%"
                    borderWidth="2px"
                    borderColor="tertiary"
                >
                    <option value="title">Titre</option>
                    <option value="content">Contenu</option>
                    <option value="author">Auteur</option>
                </Select>
            </Flex>
        </Box>
    );
}

export default Search;
