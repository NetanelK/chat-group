import { useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import Chat from './components/Chat/Chat';
import SidePanel from './components/SidePanel/SidePanel';
import SidePanelChannel from './components/SidePanel/SidePanelChannel';

import './App.css';

function App() {
  // const [channel, setChannel] = useState();
  // const location = useLocation();
  // // const navigate = useNavigate();

  // useEffect(() => {
  //   const path = location.pathname.split('/').slice(1);
  //   path[0] === 'channels' && path.length > 0 && setChannel(path[1]);
  //   console.log(channel, path);
  // });

  useEffect(() => console.log('rerender'));

  const messages = [
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
  ];

  const channels = [
    {
      id: 'fd1',
      initials: 'FD',
      name: 'Front-End Developers',
      description:
        'Pellentesque sagittis elit enim, sit amet ultrices tellus accumsan quis. In gravida mollis purus, at interdum arcu tempor non',
      members: [
        {
          id: 'm2',
          name: 'Denzel Barrett',
          avatar: '/male_avatar.jpg',
        },
      ],
    },
    {
      id: 'rdw',
      initials: 'R',
      name: 'Random',
    },
  ];

  const currentChannel = {
    id: 'fd1',
    initials: 'FD',
    name: 'Front-End Developers',
    description:
      'Pellentesque sagittis elit enim, sit amet ultrices tellus accumsan quis. In gravida mollis purus, at interdum arcu tempor non',
    members: {},
    // TODO: Sort messages where latest message is first
    messages: [
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
      {
        name: 'Shaunna Firth',
        avatar: '/female_avatar.jpg',
        date: new Date(2022, 2, 8, 13, 29),
        content:
          'Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis neque condimentum aliquet. Phasellus consequat et justo eu accumsan 🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque eget massa 🤣',
      },
      {
        name: 'Shaunna Firth',
        avatar: '/female_avatar.jpg',
        date: new Date(2022, 2, 8, 13, 29),
        content:
          'Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis neque condimentum aliquet. Phasellus consequat et justo eu accumsan 🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque eget massa 🤣',
      },
      {
        name: 'Shaunna Firth',
        avatar: '/female_avatar.jpg',
        date: new Date(2022, 2, 8, 13, 29),
        content:
          'Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis neque condimentum aliquet. Phasellus consequat et justo eu accumsan 🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque eget massa 🤣',
      },
      {
        name: 'Shaunna Firth',
        avatar: '/female_avatar.jpg',
        date: new Date(2022, 2, 8, 13, 29),
        content:
          'Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis neque condimentum aliquet. Phasellus consequat et justo eu accumsan 🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque eget massa 🤣',
      },
      {
        name: 'Shaunna Firth',
        avatar: '/female_avatar.jpg',
        date: new Date(),
        content:
          'Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis neque condimentum aliquet. Phasellus consequat et justo eu accumsan 🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque eget massa 🤣',
      },
    ],
  };

  // let theMessages;
  // channel === 'fd1'
  //   ? (theMessages = messages)
  //   : (theMessages = currentChannel.messages);

  return (
    <div id="app" className="dark-theme">
      <Routes>
        <Route path="/channels">
          <Route
            path=""
            element={
              <>
                <SidePanel channels={channels} />
                {/* TODO: Decide what page should be rendered here  */}
                <div
                  style={{
                    display: 'flex',
                    flex: 80,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <h1
                  // style={{
                  //   position: 'absolute',
                  //   left: '50%',
                  //   top: '10%',
                  //   transform: 'translateY( -50%)',
                  //   zIndex: 5,
                  // }}
                  >
                    Welcome Home, Relax!
                  </h1>
                  <img
                    src="/homepage_hero.svg"
                    alt=""
                    style={{
                      width: '30em',
                      // position: 'absolute',
                      // left: '45%',
                      // top: '45%',
                      // transform: 'translateY( -50%)',
                    }}
                  />
                </div>
                {/* <Chat title={currentChannel.name} messages={theMessages} /> */}
              </>
            }
          />
          {channels.map((channel, index) => (
            <Route
              path={`${channel.id}`}
              element={
                <>
                  <SidePanelChannel {...channel} />
                  <Chat
                    title={currentChannel.name}
                    // messages={currentChannel.messages}
                    // messages={theMessages}
                  />
                </>
              }
              key={channel.id}
            />
          ))}
          <Route path="*" element={<Navigate to="" replace={true} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
