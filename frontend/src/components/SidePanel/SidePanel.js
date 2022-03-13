import { Link } from 'react-router-dom';

import classes from './SidePanel.module.css';
import Input from '../UI/Input';

const SidePanel = (props) => {
  return (
    <div className={classes['side-panel']}>
      <header className={classes['side-panel__header']}>
        Channels
        <span
          className={`material-icons md-18 ${classes['side-panel__button']}`}
        >
          add
        </span>
      </header>
      <main className={classes['channel']}>
        {/* TODO: Add search bar input and functionality */}
        {/* <Input
          input={{ placeholder: 'Search' }}
          icon={{ name: 'search' }}
        ></Input> */}
        {props.channels.map((channel) => (
          <div>
            <Link to={channel.id} key={channel.id}>
              <span className={classes['side-panel__initials']}>
                {channel.initials}
              </span>
              {channel.name}
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default SidePanel;
