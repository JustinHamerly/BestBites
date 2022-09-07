import { useContext, useEffect, useState } from 'react';
import { LoginContext } from './LoginProvider';

const Auth = (props) => {

  const context = useContext(LoginContext);

  const [render, setRender] = useState(false);

  const checkRender = () => {
    try {
      setRender(context.loggedIn && (props.capability ? context.canProceed(props.capability) : true));
    } catch (error) {
      console.log(context.canProceed(props.capability));
      console.warn('Not Authorized');
    }
  }

  useEffect(() => {
    checkRender();
  }, [])


  return (
    <div className='auth'>
      {render && props.children}
    </div>
  )
}

export default Auth