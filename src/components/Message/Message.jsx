import React from "react";

const Message = (props) =>{
    let temp = JSON.parse(props.message);
    const [message, setMessage] = React.useState(temp);

    return(
        <div className="Message">{message.body}</div>

    )

}

export default Message;