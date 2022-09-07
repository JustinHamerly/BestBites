import { useContext, useEffect, useState } from 'react';
import { LoginContext } from './LoginProvider';

const Auth = (props) => {

  const context = useContext(LoginContext);

  const [render, setRender] = useState(false);

  useEffect(() => {
    checkRender();
  }, [])

  checkRender = () => {
    try {
      setRender(context.loggedIn && (props.capability ? context.canProceed(props.capability) : true));
    } catch (error) {
      console.log(context.canProceed(props.capability));
      console.warn('Not Authorized');
    }
  }

  return (
    <div class='auth'>
      {render && props.children}
    </div>
  )
}

export default Auth