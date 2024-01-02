import React from 'react';

interface MyProps {
  children: [React.ReactElement, React.ReactElement];
  leftWidth?: string;
  rightWidth?: string;
}

const SplitScreen: React.FC<MyProps> = ({ children, leftWidth = '50%', rightWidth = '50%'}) => {
  const [left, right] = children;

  return(
    <div className='flex'>
      <div style={{flex: leftWidth}}>
        {left}
      </div>

      <div style={{flex: rightWidth}}>
        {right}
      </div>
    </div>
  )
}

export default SplitScreen;