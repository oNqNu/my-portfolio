import { MyLink } from '../components'
import {
  Box,
  Button,
  chakra,
  Container,
  Spacer,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

export const Header = () => {
  return (
    <>
      <chakra.header
        display='flex'
        alignItems='center'
        bg='white'
        px='60'
        h='40'
      >
        <MyLink
          href='/'
          fontWeight='bold'
          fontSize='40'
          _hover={{ textDecoration: 'none' }}
          fontFamily='Century Gothic'
        >
          Yuma Yamasaki
        </MyLink>
        <Spacer />
        <VStack spacing={5}>
          <HStack spacing='5'>
            <MyLink href='/'>
              <EmailIcon w={8} h={8} />
            </MyLink>
            <MyLink href='https://twitter.com/oNqNu'>
              <Icon w={8} h={8} as={AiOutlineInstagram} />
            </MyLink>
            <MyLink href='https://twitter.com/oNqNu'>
              <Icon w={8} h={8} as={AiOutlineTwitter} />
            </MyLink>
          </HStack>
          <HStack mt='10'>
            <Button variant='ghost' colorScheme='blackAlpha' fontSize={24}>
              About
            </Button>
            <Button variant='ghost' colorScheme='blackAlpha' fontSize={24}>
              Study
            </Button>
            <Button variant='ghost' colorScheme='blackAlpha' fontSize={24}>
              Works
            </Button>
            <Button variant='ghost' colorScheme='blackAlpha' fontSize={24}>
              Contact
            </Button>
          </HStack>
        </VStack>
      </chakra.header>
    </>
  )
}
