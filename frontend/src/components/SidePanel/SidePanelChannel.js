import { Link } from 'react-router-dom';

import classes from './SidePanel.module.css';

const SidePanelChannel = (props) => {
  return (
    <div className={classes['side-panel']}>
      <header className={classes['side-panel__channel-header']}>
        <Link to="/channels">
          <span className="material-icons">arrow_back_ios</span>{' '}
        </Link>{' '}
        All Channels
      </header>
      <div className={classes['channel']}>
        <div className={classes['channel-details']}>
          <h1 className={classes['channel-details__name']}>{props.name}</h1>
          <p className={classes['channel-details__description']}>
            {props.description}
          </p>
        </div>
        <main>
          <span className={classes.member__head}>Members</span>
          {props.members?.map((member) => (
            <div className={classes.member} key={member.id}>
              <img
                className={classes.member__avatar}
                src={member.avatar}
                alt={member.name}
              />
              <span>{member.name}</span>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default SidePanelChannel;
