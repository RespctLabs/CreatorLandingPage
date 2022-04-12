import { Box, Container, Flex, FlexProps, Stack, useColorModeValue, Img, Text, Button, VisuallyHidden, IconButton, Icon, Link, useColorMode } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';


export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return(
  
  <Flex w="100vw"   bg={useColorModeValue('gray.50', 'gray.900')} justify="center" color={useColorModeValue('gray.700', 'gray.200')}>
  <Box>
  <Container
    as={Stack}
    maxW={'6xl'}
    py={4}
    direction={{ base: 'column', md: 'row' }}
    spacing={4}
    justify={{ base: 'center', md: 'space-between' }}
    align={{ base: 'center', md: 'center' }}>
<Img src={isDark?'/Respct_d.png':'/Respct.png'} height={12} my={1} mx={2}/>
<Text>© 2022 Respct. All rights reserved</Text>
    <Stack direction={'row'} spacing={6}>
    <Link href="https://twitter.com/respctclub" isExternal>
      <IconButton variant="ghost" aria-label="Twitter" icon={<FaTwitter />} />
    </Link>
    <Link href="https://discord.gg/GuYCS2Rm" isExternal>
      <IconButton variant="ghost" aria-label="Discord" icon={<FaDiscord />} />
    </Link>
    <Link href="https://www.instagram.com/respct.club/" isExternal>
      <IconButton
        variant="ghost"
        aria-label="Instagram"
        icon={<FaInstagram />}
      />
</Link>
    </Stack>
  </Container>
</Box>
</Flex>
)}
