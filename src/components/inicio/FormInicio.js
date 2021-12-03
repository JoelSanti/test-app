//import {useEffect, useState} from 'react';
import ChatBot from 'react-simple-chatbot';
//import { ThemeProvider } from 'styled-components';
//import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const FormInicio = () => {

    
////Variables y props para el chatbot  

//const theme = {
  //background: '#FAFAEE',
  //fontFamily: 'Helvetica Neue',
  //headerBgColor: 'rgb(48, 50, 49)',
  //headerFontColor: '#fff',
  //headerFontSize: '18px',
  //botBubbleColor: 'rgb(48, 50, 49)',
  //botFontColor: '#fff',
  //userBubbleColor: '#fff',
  //userFontColor: '#4a4a4a',
//};


const steps = [
  {
    id: "1",
    message: "Hola",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "¿Cual es tu nombre?",
    trigger: "4",
  },
  {
    id: "4",
    user: true,
    trigger: "5",
  },
  {
    id: "5",
    message: "Hola {previousValue}, cómo estás hoy ?!",
    end: true,
  },
];


    return (
      <div className=" p-20 ">
        <ChatBot
          recognitionEnable="true"
          recognitionLang='es'
          botAvatar="https://i.pinimg.com/736x/50/8a/59/508a59707e76feb398bb22b2b62d288a.jpg"
          headerTitle="Para iniciar el test converse con sofia"
          width="420px"
          speechSynthesis={{ enable: true, lang: "es" }}
          steps={steps}
        />
      </div>
    );
}

export default FormInicio;
