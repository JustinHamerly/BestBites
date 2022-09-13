import { useContext, useEffect, useState } from 'react';
import { LoginContext } from './LoginProvider';

const Auth = (props) => {

  const context = useContext(LoginContext);

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