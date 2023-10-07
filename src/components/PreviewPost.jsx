import { Box } from '@chakra-ui/layout';
import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';


const boxVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 300, opacity: 0 }
}


function PreviewPost({ id, imageSrc = "/images/article1r.jpg", author = "Unknown", title = "The title", content = "soiejfpaosefijpaoeifjapeofijapeofiajzpeofiazjpefoiazejfpoaziefjpaozeifjpazoeifj opefaijepfoaiezjfpo ijefzpao fiazjep ofiaj" }) {
    const navigate = useNavigate()
    const [ref, inView] = useInView({threshold: 0.6, triggerOnce: true})

    function handleClick() {

        if (Number.isInteger(id)) {
            return navigate(`/post/${id}`, { state: { imageSrc } })
        } else {
            console.error("L'id de ce poste manque.")
        }
    }

    return (

        <Card
            ref={ref}
            as={motion.div}
            variants={boxVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
            bg="tertiary2"
            mb={8}
            w={700}
            h={400}
            whileHover={{ scale: 1.1 }}
            cursor="pointer"
            onClick={handleClick}
        >
            <CardHeader>
                <Heading size='md'>{title}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box display="flex">
                        <Image
                            src={imageSrc}
                            boxSize="200px"

                        />
                        <Text pt='2' ml={5} fontSize='sm'>
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
