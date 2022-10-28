import React from 'react'
import { Box, Text, Center } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode';
import { GridItem } from '@chakra-ui/react'


function CovidCard(props) {
    var { name, value, color, row } = props

    return (
        <GridItem
            bgColor={color}
            rounded={'lg'}
            w='100%'
            h='100%'
            rowSpan={row}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}>
            <Box
                boxShadow={'2xl'}
                w={'full'}
                h={'full'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                padding={4}
                >
                <Text color={'black'} fontWeight={600} fontSize={'2xl'}>{name}</Text>
                <Text color={'white'} fontWeight={500} fontSize={'xl'}>{value}</Text>
            </Box>
        </GridItem>

    )
}

export default CovidCard