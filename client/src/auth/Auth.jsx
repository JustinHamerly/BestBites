import { useContext, useEffect, useState, useMemo } from 'react';
import { LoginContext } from './LoginProvider';

const Auth = (props) => {

  const context = useContext(LoginContext);
  console.log(context.loggedIn)

  const [render, setRender] = useState(false);
 
  useEffect(() => {
    try {
      setRender(context.loggedIn);
      // future access control
      // setRender(context.loggedIn && (props.capability ? context.canProceed(props.capability) : true));
    } catch (error) {
      // console.log(context.canProceed(props.capability));
      console.warn('Not Authorized');
    }
  }, [context.loggedIn])


  return (
    <div className='auth'>
      {render && props.children}
    </div>
  )
}

export default Auth