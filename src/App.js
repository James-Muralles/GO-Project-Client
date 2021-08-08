import './App.css';
import { connect, sendMsg} from "./api";
import React from "react";
import ChatHistory from './components/ChatHistory/ChatHistory';
import Header from './components/Header/Header';
import { useEffect, useRef } from 'react';
import ChatInput from './components/ChatInput';






function App() {
    
    const [chatHistory, setchatHistory] = React.useState([]);

useEffect(() => {
    
        connect((msg) => {
            console.log("New Message")
            setchatHistory([...chatHistory,msg])

            
        })
        console.log(chatHistory)
},)


   const send = (event) => {
        if(event.keyCode === 13){
          sendMsg(event.target.value);
          event.target.value = "";
        }
    
    }

    return (
      <div className="App">
          <Header></Header>
          <ChatHistory chatHistory={chatHistory}></ChatHistory>
          <ChatInput send={send}></ChatInput>

       <button onClick={send}>Hit</button>
      </div>
    );
  }
  
  export default App


