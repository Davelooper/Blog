import React from "react";
import { Flex, Input, Select, Text } from "@chakra-ui/react";

function Search({ searchText, searchCategory, setSearchText, setSearchCategory }) {



    return (
        <Flex align="center">
            <Input
                placeholder="Rechercher..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            <Text mx={2}>Rechercher dans :</Text>
            <Select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                placeholder="Sélectionnez une catégorie"
            >
                <option value="title">Titre</option>
                <option value="content">Contenu</option>
                <option value="author">Auteur</option>
            </Select>
        </Flex>
    );
}

export default Search;
