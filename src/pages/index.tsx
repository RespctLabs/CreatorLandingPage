import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import  Hero  from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Nav } from '../components/Nav'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Nav />
    <Hero />    
    <Main/>
    <Footer/>
  </Container>
)

export default Index
