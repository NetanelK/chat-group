import { Link } from 'react-router-dom';

const SidePanelChannel = (props) => {
  return (
    <>
      <header>
        <Link to="/channels">
          <span className="material-icons">arrow_back_ios</span>{' '}
        </Link>{' '}
        {props.name}
      </header>
      <p>{props.description}</p>
    </>
  );
};

export default SidePanelChannel;
