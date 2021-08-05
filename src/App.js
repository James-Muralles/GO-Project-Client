import './App.css';
import { connect, sendMsg} from "./api";
import React from "react";
import ChatHistory from './components/ChatHistory/ChatHistory';
import Header from './components/Header/Header';
import { useEffect, useRef } from 'react';






function App() {
    
    const [chatHistory, setchatHistory] = React.useState([]);

useEffect(() => {
    
        connect((msg) => {
            console.log("New Message")
            setchatHistory([...chatHistory,msg])

            
        })
        console.log(chatHistory)
},)


   const send = () => {
        console.log("hello")
        sendMsg("hello")
    
    }

    return (
      <div className="App">
          <Header></Header>
          <ChatHistory chatHistory={chatHistory}></ChatHistory>
       <button onClick={send}>Hit</button>
      </div>
    );
  }
  
  export default App


