import {
  Box,
  chakra,
  Flex,
  HStack,
  VStack,
  Stack,
  Text,
  Center,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import next from 'next'
import { Header } from '../layout'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <chakra.main>
        <Flex>
          <Box h='500' w='full' bg='gray.200' px='50'>
            <Text mx='30' mt='70' fontSize='4xl' fontWeight='extrabold'>
              About
            </Text>
            <Stack w='full' spacing={'5'} fontSize='lg'>
              <Text mt='30'>こんにちは，山﨑 裕真です．</Text>
              <Text>岡山大学自然科学研究科に所属し，</Text>
              <Text>機械学習を用いた画像分類の研究をしています．</Text>
              <Text>また，webアプリケーションの開発をしています．</Text>
              <Text>たくさん食べて，たくさん体を動かすことが大好きです．</Text>
            </Stack>
          </Box>
          <Box h='xl' w='full' bg='white'>
            <Center h='full'>
              <Image src='/my1.png' width={500} height={500} alt='いらすと' />
            </Center>
          </Box>
        </Flex>
      </chakra.main>
    </>
  )
}
