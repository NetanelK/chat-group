import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import axios from 'axios';

import Input from '../UI/Input';
import ChatMessage from '../ChatMessage/ChatMessage';

import classes from './Chat.module.css';

const socket = io('http://localhost:8080/');
const Chat = (props) => {
  const location = useLocation();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    location.pathname.includes('fd1')
      ? setMessages((prevMessages) => [
          ...prevMessages,
          {
            name: 'Denzel Barret',
            avatar: '/male_avatar.jpg',
            date: new Date(2022, 2, 8, 14, 39),
            content:
              'Aenean tempus nibh vel est lobortis euismod. Vivamus laoreet viverra nunc 🐶',
          },
          {
            name: 'Shaunna Firth',
            avatar: '/female_avatar.jpg',
            date: new Date(2022, 2, 8, 13, 29),
            content:
              'Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis neque condimentum aliquet. Phasellus consequat et justo eu accumsan 🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque eget massa 🤣',
          },
        ])
      : setMessages((prevMessages) => [...prevMessages]);
  }, []);

  // const [messages, setMessages] = useState(props.messages);

  // const messagesEndRef = useRef(null);
  // useEffect(() => {
  //   messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  // }, [messagesEndRef.current]);

  // useEffect(() => {
  //   setMessages(props.messages);
  // }, [props.messages]);

  // socket.on('message', (msg) => {
  //   // console.log(msg);
  //   setMessages((prevMessages) => [
  //     ...prevMessages,
  //     {
  //       name: 'Denzel Barret',
  //       avatar: '/male_avatar.jpg',
  //       date: new Date(2022, 2, 8, 14, 39),
  //       content: msg,
  //     },
  //   ]);
  // });

  // const submitHandler = (target) => {
  //   socket.emit('message', target.value);
  // };
  console.log(messages);

  return (
    <div className={classes.chat}>
      <header className={classes.chat__header}>
        {props.title.toUpperCase()}
      </header>
      <div className={classes.chat__messages}>
        {messages ? (
          messages.map((message, index) => (
            <ChatMessage
              {...message}
              isMine={message.name === 'Denzel Barret'}
              className={classes.chat__message}
              key={index}
            />
          ))
        ) : (
          <span>No messages for now :(</span>
        )}
        {/* <div ref={messagesEndRef}></div> */}
      </div>
      {/* <Input
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
      /> */}
    </div>
  );
};

export default Chat;
