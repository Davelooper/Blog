import {  Text, Card, CardHeader, Heading, CardBody, Stack, Box, StackDivider } from "@chakra-ui/react";

function ViewComment({ content = "pqsofijqpsodfijpqsdofijpsqdofij psoifj psqodifj pqsodifj", email = "Unknown@unknow.com", title = "plopli plipia qsfuhu" }) {



    return (
        <Card mb="8" w="80%">
            <CardHeader>
                <Heading size='md'>{title}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        {/* <Heading size='xs' textTransform='uppercase'>
                            Summary
                        </Heading> */}
                        <Text pt='2' fontSize='sm'>
                            {content}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            By
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {email}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default ViewComment;