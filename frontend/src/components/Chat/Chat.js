import Input from '../../UI/Input';
import ChatMessage from '../ChatMessage/ChatMessage';

const Chat = (props) => {
  const messagesRender = props.messages.map((message, index) => (
    <ChatMessage {...message} key={index} />
  ));

  const submitHandler = () => {
    console.log('helloworld');
  };

  return (
    <div>
      <header>{props.title.toUpperCase()}</header>
      <div>{messagesRender}</div>
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
