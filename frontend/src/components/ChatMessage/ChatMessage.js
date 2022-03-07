import PropType from 'prop-types';
import classes from './ChatMessage.module.css';

const ChatMessage = (props) => {
  const todayDate = new Date().getDate();
  const todayMonth = new Date().getMonth();
  const dateTime = props.date.toTimeString().slice(0, 5);

  return (
    <div className={classes['chat-message']}>
      <img
        className={classes['chat-message__avatar']}
        src={props.avatar}
        alt={props.name}
      />
      <div className={classes['chat-message__content-wrap']}>
        <span className={classes['chat-message__name']}>{props.name}</span>
        <span className={classes['chat-message__date']}>
          {props.date.getDate() === todayDate &&
            props.date.getMonth() === todayMonth &&
            `Today at ${dateTime} `}
          {props.date.getDate() === todayDate - 1 &&
            props.date.getMonth() === todayMonth &&
            `Yesterday at ${dateTime}`}
          {(props.date.getDate() <= todayDate - 2 ||
            props.date.getMonth() !== todayMonth) &&
            props.date.toLocaleDateString(navigator.language, {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
        </span>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  avatar: PropType.string,
  name: PropType.string,
  date: PropType.instanceOf(Date),
  content: PropType.string,
};

export default ChatMessage;
