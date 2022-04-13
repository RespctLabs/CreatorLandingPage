import { Box, Container, Flex, Grid, GridItem, Img, Heading, Text, Stack, StackProps, Icon, SimpleGrid } from '@chakra-ui/react'
import Head from 'next/head';

export const Main = () => (

  <Flex bgColor="gray.900" w="100%" pb={10}>
    <Box maxW="7xl" mx={'auto'} pt={1} px={{ base: 2, sm: 12, md: 17 }}  >
      <Heading
        textAlign={'center'}
        fontSize={'2xl'}
        py={5}
        textColor="white"
        fontWeight={350}
      >
        Trust us, our reputation is backed by the best
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} justifyItems="center" >
        <Img src="/consensys-tachyon-logo.png" h={20}  />
        <Img src="/consensys-labs-icon-logo-white.png" h={20} />
        <Img src="/protocol-labs-logo.png" h={20} />

      </SimpleGrid>
    </Box>
  </Flex>
);
