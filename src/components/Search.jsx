import React, { useState } from "react";
import { Flex, Input, Select, Text, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Search({searchText, searchCategory, setSearchText, setSearchCategory}) {

  const handleSearch = () => {
    // Utilisez les valeurs de searchText et searchCategory pour filtrer les résultats.
    console.log("Texte de recherche :", searchText);
    console.log("Catégorie de recherche :", searchCategory);
  };

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