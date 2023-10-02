import React from 'react';
import { 
    RuxGlobalStatusBar,
    RuxMonitoringIcon,
    RuxClock,
    RuxIcon
  } from '@astrouxds/react';

function Navbar() {
  return (
    <div>
      <RuxGlobalStatusBar
        appDomain="Domain"
        appState="State"
        appVersion="7.0"
        username="User Name"
      >
        
        <RuxClock></RuxClock>
        <RuxMonitoringIcon
          slot="right-side"
          notifications="10"
          status="normal"
        ></RuxMonitoringIcon>
        <RuxMonitoringIcon
          slot="right-side"
          icon="antenna-receive"
          notifications="15"
          status="caution"
        ></RuxMonitoringIcon>
        <RuxMonitoringIcon
          slot="right-side"
          notifications="1"
          status="off"
          icon="antenna-off"
        ></RuxMonitoringIcon>
      </RuxGlobalStatusBar>
    </div>
  )
}

export default Navbar
