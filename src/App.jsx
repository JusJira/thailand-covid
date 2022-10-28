import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import { VStack, Grid, Flex , useMediaQuery , Box , Text , Heading } from '@chakra-ui/react'
import CovidCard from './components/CovidCard';
import ColorToggle from './components/ColorToggle';


function App() {
  const [loaded, isLoaded] = useState(false)
  const [info, setInfo] = useState(null)
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


  useEffect(() => {
    axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all').then((response) => {
      setInfo(response.data['0']);
      isLoaded(true)
    });
  }, []);
  return (
    <Flex h={'100vh'} alignItems={'center'} justifyContent={'center'}>
      <ColorToggle size={isNotSmallerScreen}/>
      <VStack bgColor='transparent'>
      <Box padding={25}><Heading fontSize={'3xl'} fontWeight={600}>Thailand Covid Cases</Heading></Box>
        {loaded ?<>
          <Grid templateColumns={isNotSmallerScreen ? 'repeat(2, 1fr)' : '1fr'} gap={6} w={isNotSmallerScreen ? '50vw' : '80vw'} padding='10px' alignItems='center'>
            <CovidCard color={'blue.200'} name='Week of The Year' value={info['weeknum']} />
            <CovidCard color={'green.300'} name='New Recovered' value={info['new_recovered']} />
            <CovidCard row={2} color={'orange.300'} name='New Case' value={info['new_case']} />
            <CovidCard color={'red.600'} name='New Death' value={info['new_death']} />
            <CovidCard color={'red.200'} name='New Case Difference' value={info['case_new_diff']} />
          </Grid>
          <Box padding={25}><Text fontSize={'lg'} fontWeight={400}>Update Date : {info['update_date']}</Text></Box>
          </>
          : null}
      </VStack>
    </Flex>
  )
}

export default App
