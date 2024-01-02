import React from 'react';
import CurrentUserLoader from './components/current-user-loader';
import { UserInfo } from './components/user-info';

const App: React.FC = () => {
  return (
    <>
      <CurrentUserLoader>
        {/*// @ts-ignore */}
        <UserInfo/>
      </CurrentUserLoader>
    </>
  )
}

export default App;