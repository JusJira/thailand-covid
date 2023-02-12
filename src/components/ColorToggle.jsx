import React, { useState, useEffect } from 'react'
import { Switch, useColorMode , Flex } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

function ColorToggle(props) {
    const {isLandscape} = props
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
        <Flex gap={2} top={0} right={0} margin={0} alignItems={'center'} justifyContent={'center'} height={30}>
            <Switch size={isLandscape ? 'lg' : 'md'} colorScheme={'teal'} isChecked={isCheck} onChange={toggleColorMode} />
            {colorMode == 'light' ? <FaSun fontSize={isLandscape ? 30 : 20}/> : <FaMoon fontSize={isLandscape ? 30 : 20}/>}
        </Flex>
    )
}

export default ColorToggle