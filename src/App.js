import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import FinalPage from './pages/FinalPage/FinalPage';
import Home from './pages/Home';
import Punctuate from './pages/Punctuator/Punctuate';
import Sensor from './pages/SensorPage/Sensor';
import Translate from './pages/Transcription/Translate';
import UploadPage from './pages/UploadPage/UploadPage';
import VideoInfo from './pages/VideoInfo/VideoInfo';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/upload' exact component={UploadPage} />
        <Route path='/video/:id' exact component={VideoInfo} />        
        <Route path='/translate' exact component={Translate} />      
        <Route path='/punctuate' exact component={Punctuate} />    
        <Route path='/finalPage' exact component={FinalPage} />  
        <Route path='/sensorPage' exact component={Sensor} />  
      </Switch>
    </BrowserRouter>
  )
}

export default App;
