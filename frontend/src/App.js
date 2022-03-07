import Chat from './components/Chat/Chat';

import './App.css';

function App() {
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
  return (
    <div id="app" className="dark-theme">
      <Chat title="Front-end developers" messages={messages} />
    </div>
  );
}

export default App;
