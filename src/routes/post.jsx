import { Box } from '@chakra-ui/layout';
import { useParams } from 'react-router-dom';

function Post() {
    const id = useParams();
    console.log("id", id)
    return (
        <Box bg='' w='100%' p={4} color='black'>
            This is the Boxolalar
        </Box>
    );
}

export default Post;
