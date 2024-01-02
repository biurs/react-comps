import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userType } from '../@types/userType'

interface loaderProps {
  children: React.ReactNode
}

const CurrentUserLoader: React.FC<loaderProps> = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data)
    })();
  }, [])

  return (
    <>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, child => {
        if(React.isValidElement(child)){
          return React.cloneElement(child as React.ReactElement, { user })
        }

        return child;

      })}
    </>
  )
}



export default CurrentUserLoader;