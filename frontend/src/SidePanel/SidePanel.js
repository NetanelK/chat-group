import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import classes from './SidePanel.module.css';
import SidePanelChannel from './SidePanelChannel';
import SidePanelMain from './SidePanelMain';

const SidePanel = (props) => {
  return (
    <BrowserRouter>
      <div className={classes['side-panel']}>
        <Routes>
          <Route path="/channels" element={<SidePanelMain />} />
          {props.channels.map((channel, index) => (
            <Route
              path={`/channel/${channel.id}`}
              element={<SidePanelChannel {...channel} />}
              key={channel.id}
            />
          ))}
          <Route path="*" element={<Navigate to="/channels" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default SidePanel;
