import './App.css';
import { ChakraProvider } from '@chakra-ui/provider';
import { Box } from '@chakra-ui/layout';

function App() {
    return (
        <ChakraProvider>
            <Box bg='tomato' w='100%' p={4} color='white'>
                This is the Box
            </Box>
        </ChakraProvider>
    );
}

export default App;
