import React from 'react';

import { Wrapper } from './Components/StyledComponents';
import Menu from './Components/Menu';
import SideBar from './Components/SideBar';
import Map from './Components/Map';

class App extends React.Component {

  render() {
    return (
      <Wrapper>
        <Menu />
        <Map style={{ marginRight: 500 }} />
        <SideBar />
      </Wrapper>


    );
  }
}

export default App;
