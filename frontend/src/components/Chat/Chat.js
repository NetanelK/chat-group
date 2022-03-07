import ChatMessage from '../ChatMessage/ChatMessage';

const Chat = (props) => {
  const messagesRender = props.messages.map((message, index) => (
    <ChatMessage {...message} key={index} />
  ));

  return (
    <>
      <header>{props.title.toUpperCase()}</header>
      <div>{messagesRender}</div>
    </>
  );
};

export default Chat;
