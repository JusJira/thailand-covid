import React, { useState, useEffect } from 'react'
import { Switch, IconButton, useColorMode , Flex, color } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

function ColorToggle(props) {
    const {isNotSmallerScreen} = props
    const { colorMode, toggleColorMode } = useColorMode();
    const [isCheck, setCheck] = useState()

    useEffect(() => {
        if (colorMode == 'light') {
            setCheck(false)
        }
        else {
            setCheck(true)
        }
    })

    return (
        <Flex gap={2} position={'fixed'} top={0} right={0} margin={8} alignItems={'center'} justifyContent={'center'}>
            <Switch size={isNotSmallerScreen ? 'lg' : 'md'} colorScheme={'teal'} isChecked={isCheck} onChange={toggleColorMode} />
            {colorMode == 'light' ? <FaSun fontSize={isNotSmallerScreen ? 30 : 20}/> : <FaMoon fontSize={isNotSmallerScreen ? 30 : 20}/>}
        </Flex>
    )
}

export default ColorToggle