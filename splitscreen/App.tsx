import React from 'react';
import SplitScreen from './components/SplitScreen';

const LeftSide: React.FC<{title: string}> = ({ title }) => {
  return <h2 className="bg-red-900">{title}</h2>
}

const RightSide: React.FC<{title: string}> = ({ title }) => {
  return <h2 className="bg-amber-100">{title}</h2>
}

const App: React.FC = () => {
  return <SplitScreen leftWidth={'75%'} rightWidth={'25%'}>
      <LeftSide title={'Left'}/>
      <RightSide title={'Right'}/>
    </SplitScreen>;
}

export default App;