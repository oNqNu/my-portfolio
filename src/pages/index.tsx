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
          <Box w='full' bg='gray.100'>
            <Box ml='100'>
              <Text mt='70' fontSize='4xl' fontWeight='extrabold'>
                About
              </Text>
              <Stack
                mb='50'
                w='full'
                spacing='5'
                fontSize='lg'
                fontFamily='Century'
              >
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
        <Box h='2xl' bg='white' pt='70'>
          <Text mx='100' fontSize='4xl' fontWeight='extrabold'>
            Skills
          </Text>
          <Center>
            <Text mx='100' mt='30px' fontSize='xl' fontFamily='Century'>
              大学院で機械学習を用いた画像処理・分類の研究，また受託でWeb制作を行っています．
            </Text>
          </Center>
          <Center mt='50'>
            <HStack spacing='20'>
              <Box
                w='500px'
                h='sm'
                bg='blue.50'
                borderRadius='50'
                border='solid'
              >
                <Center>
                  <VStack spacing='10'>
                    <Text mt='30' fontSize='xl' fontWeight='extrabold'>
                      機械学習
                    </Text>
                    <Box>
                      <Image
                        src='/ai.png'
                        width={100}
                        height={100}
                        alt='いらすと'
                      />
                    </Box>
                    <Text px='50' fontSize='lg' fontFamily='Century'>
                      機械学習モデルによる画像処理・分類，またそれらの脆弱性を解決することをテーマに研究をしています．国内・国際学会で論文の投稿，研究成果の発表をしました．
                    </Text>
                  </VStack>
                </Center>
              </Box>
              <Box
                w='500px'
                h='sm'
                bg='blue.50'
                borderRadius='50'
                border='solid'
              >
                <Center>
                  <VStack spacing='10'>
                    <Text mt='30' fontSize='xl' fontWeight='extrabold'>
                      webサイト・アプリケーション開発
                    </Text>
                    <Box>
                      <Image
                        src='/web.png'
                        width={120}
                        height={100}
                        alt='いらすと'
                      />
                    </Box>
                    <Text px='50' fontSize='lg' fontFamily='Century'>
                      LPからホームページ，またwebアプリケーションなど様々な規模の開発に携わってきました．フロントエンドからバックエンドまで幅広く開発可能です．
                    </Text>
                  </VStack>
                </Center>
              </Box>
            </HStack>
          </Center>
        </Box>
        <Box h='6xl' bg='gray.200' pt='70'>
          <Text mx='100' fontSize='4xl' fontWeight='extrabold'>
            Works
          </Text>
        </Box>
      </chakra.main>
    </>
  )
}
