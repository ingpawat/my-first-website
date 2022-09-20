import * as React from 'react'
import { Button, Spinner, Input } from '@chakra-ui/react'
import DisplayJohn,{JohnProfile} from './components/DisplayJohn'
// import {JohnProfile} from './components/DisplayJohn'

function App() {
    return (
        <div className='app'>
            <Button colorScheme='blue'>Button</Button>
            <Button colorScheme='red'>Button</Button>
            <Button colorScheme='yellow'>Button</Button>
            <br/>
            <Spinner color='red.500' />
            <Spinner color='blue.500' />
            <Spinner color='red.500' />
            <br/>
            <Input placeholder='Input 01' />
            <Input placeholder='Input 02' />
            <Input placeholder='Input 03' />
            <br/>
            <DisplayJohn></DisplayJohn>
            <JohnProfile></JohnProfile>
        </div>
    );
}

export default App;