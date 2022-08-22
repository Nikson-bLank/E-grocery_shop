import { Box, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { banner_1, banner_2 } from '../../../images/IMAGE_IMPORTS'


const Banner = () => {
  return (
    <HStack>

    <Image src={banner_1}></Image>
    <Image src={banner_2}></Image>

    </HStack>
  )
}

export default Banner