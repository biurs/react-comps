import { useState } from 'react';

interface modalProps {
  children: React.ReactNode
}

const Modal: React.FC<modalProps> = ({children}) => {
  const [show, setShow] = useState(false);

  return(
  <>
    <button onClick={() => setShow(true)}>Show Modal</button>
    {show && (
      <div className='absolute overflow-auto bg-slate-500 w-full h-full inset-0' onClick={() => setShow(false)}>
        <div className='absolute m-auto p-12 bg-yellow-200 w-1/2 align-middle inset-0 h-1/2' onClick={e => e.stopPropagation()}>
          <button onClick={() => setShow(false)}>Hide Modal</button>
          {children}
        </div>
      </div>
    )}
  </>
  )
}

export default Modal;