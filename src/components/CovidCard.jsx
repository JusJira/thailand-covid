import React from 'react'
import { Box, Text, useMediaQuery } from '@chakra-ui/react'
import { GridItem } from '@chakra-ui/react'


function CovidCard(props) {
    const [isLandscape] = useMediaQuery("(orientation: landscape)")
    var { name, value, color, row  } = props

    return (
        <GridItem
            bgColor={color}
            rounded={'lg'}
            w='100%'
            h={isLandscape ? '100%' : '30vmin'}
            rowSpan={row}
            colSpan={1}
            >
            <Box
                boxShadow={'2xl'}
                w={'100%'}
                h={'100%'}
                rounded={'lg'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                padding={4}
                >
                <Text color={'black'} textAlign={'center'} fontWeight={600} fontSize={'1.5rem'}>{name}</Text>
                <Text color={'white'} textAlign={'center'}  fontWeight={500} fontSize={'1rem'}>{value}</Text>
            </Box>
        </GridItem>

    )
}

export default CovidCard