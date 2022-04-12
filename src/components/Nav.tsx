import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, Switch, useDisclosure, MenuButton, Center, MenuList, Avatar, Box, Button, Flex, Menu, MenuDivider, MenuItem, Stack, useColorModeValue, Link, Image, Img } from '@chakra-ui/react'
import { ReactNode } from 'react';

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    // <Switch
    //   position="fixed"
    //   top="1rem"
    //   right="1rem"
    //   color="green"
    //   isChecked={isDark}
    //   onChange={toggleColorMode}
    // />
    <>
      <Box  px={4} width="100vw">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><Img src={isDark?'/Respct_d.png':'/Respct.png'} height={12} my={1} mx={2}/></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}



