import { useState } from 'react';
import { io } from 'socket.io-client';

import Input from '../UI/Input';
import ChatMessage from '../ChatMessage/ChatMessage';

import classes from './Chat.module.css';

const socket = io('http://localhost:8080/');
const Chat = (props) => {
  const [messages, setMessages] = useState(props.messages);

  socket.on('message', (msg) => {
    // console.log(msg);
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        name: 'Denzel Barret',
        avatar: '/male_avatar.jpg',
        date: new Date(2022, 2, 8, 14, 39),
        content: msg,
      },
    ]);
  });

  const messagesRender = messages.map((message, index) => (
    <ChatMessage {...message} key={index} />
  ));

  const submitHandler = (target) => {
    socket.emit('message', target.value);
  };

  return (
    <div>
      <header>{props.title.toUpperCase()}</header>
      <div className={classes.chat}>{messagesRender}</div>
      <Input
        onSubmit={submitHandler}
        input={{
          type: 'text',
          placeholder: 'Type a message here',
          // style:{{ width: '70%' }}
        }}
        icon={{
          name: 'send',
          className: 'md-18',
        }}
      />
    </div>
  );
};

export default Chat;
