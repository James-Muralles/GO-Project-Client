import React from "react";
import "./ChatHistory.scss" 
import Message from "../Message/Message";

const ChatHistory = ({chatHistory}) => {

    const messages = chatHistory.map((msg,index) => {
        return(
        <Message key={index} message={msg.data}/>
    )});

    return(
        <div className="ChatHistory">
            <h2>Chat History</h2>
            {messages}
        </div>

    )

}


export default ChatHistory;