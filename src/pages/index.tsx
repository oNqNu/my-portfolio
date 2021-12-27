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
      <chakra.main fontFamily='Century Gothic'>
        <Flex>
          <Box w='full' bg='gray.200'>
            <Box ml='100'>
              <Text mt='70' fontSize='4xl' fontWeight='extrabold'>
                About
              </Text>
              <Stack mb='50' w='full' spacing='5' fontSize='lg'>
                <Text mt='30'>こんにちは，山﨑 裕真です．</Text>
                <Text>愛媛県松山市生まれです．</Text>
                <Text>岡山大学自然科学研究科に所属し，</Text>
                <Text>機械学習を用いた画像分類の研究をしています．</Text>
                <Text>また，webアプリケーションの開発をしています．</Text>
                <Text>
                  たくさん食べて，たくさん体を動かすことが大好きです．
                </Text>
              </Stack>
            </Box>
          </Box>
          <Box w='full' bg='white'>
            <Center>
              <Image src='/my1.png' width={400} height={400} alt='いらすと' />
            </Center>
          </Box>
        </Flex>
        <Box h='6xl' bg='blue.100' pt='70'>
          <Text mx='100' fontSize='4xl' fontWeight='extrabold'>
            Skills
          </Text>
          <Text mx='100' mt='30' fontSize='xl' fontWeight='extrabold'>
            大学院で機械学習を用いた画像処理・分類の研究，また受託でWebアプリケーションの開発を行っています．
          </Text>
        </Box>
      </chakra.main>
    </>
  )
}
