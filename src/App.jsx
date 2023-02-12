import { useState, useEffect } from 'react'
import axios from "axios";
import { VStack, Grid, Flex, useMediaQuery, Box, Text, Heading, GridItem } from '@chakra-ui/react'
import CovidCard from './components/CovidCard';
import ColorToggle from './components/ColorToggle';

import './loading.css'


function App() {
  const [loaded, isLoaded] = useState(false)
  const [info, setInfo] = useState(null)
  const [isLandscape] = useMediaQuery("(orientation: landscape)")


  useEffect(() => {
    axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all').then((response) => {
      setInfo(response.data['0']);
      isLoaded(true)
    });
  }, []);
  return (


    <VStack minH={'100vh'} alignItems={'center'} justifyContent={'center'} bgColor='transparent' minW={'50vw'} height={'100%'}>
      <Heading display={'block'} fontSize={'3xl'} fontWeight={600} padding={6} paddingBottom={2} textAlign={'center'}>Thailand Covid Cases</Heading>
      <ColorToggle size={isLandscape} />
      {loaded ? <>

        <Grid
          templateColumns={isLandscape ? 'repeat(2, 1fr)' : '1fr'}
          h='100%'
          templateRows={isLandscape ? 'repeat(3, 1fr)' : '1fr'}
          gap={6}
          w={isLandscape ? '50vw' : '80vw'}
          padding='10px'
        >
          <CovidCard color={'blue.200'} name='Week of The Year' value={info['weeknum']} />
          <CovidCard color={'green.300'} name='New Recovered' value={info['new_recovered']} />
          <CovidCard row={2} color={'orange.300'} name='New Case' value={info['new_case']} />
          <CovidCard color={'red.600'} name='New Death' value={info['new_death']} />
          <CovidCard color={'red.200'} name='New Case Difference' value={info['case_new_diff']} />
        </Grid>
        <Box padding={25} display={'inline-block'}><Text fontSize={'1em'} fontWeight={400} textAlign={'center'}>Update Date : {info['update_date']}</Text></Box>
      </>
        : <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <div class="lds-dual-ring"></div>
          <p>If Loading takes too long, there might be a problem with the API</p>
          </Flex>}
    </VStack>
  )
}

export default App
