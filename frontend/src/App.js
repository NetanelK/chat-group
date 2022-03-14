import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Chat from './components/Chat/Chat';
import SidePanel from './components/SidePanel/SidePanel';
import SidePanelChannel from './components/SidePanel/SidePanelChannel';

import './App.css';

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

function App() {
  const [channel, setChannel] = useState();

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
    ],
  };

  return (
    <div id="app" className="dark-theme">
      <Routes>
        <Route path="/channels">
          <Route
            path=""
            element={
              <>
                <SidePanel channels={channels} />
                <Chat
                  title={currentChannel.name}
                  messages={currentChannel.messages}
                />
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
                    messages={currentChannel.messages}
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
