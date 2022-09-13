import LoginProvider from "./auth/LoginProvider";
import Auth from "./auth/Auth";
import Login from './auth/Login'
import Interface from "./components/Interface";

function App() {

  return (
    <LoginProvider>
      <div className="App">
        <Login />
        <Auth>
          <Interface />
        </Auth>
      </div>
    </LoginProvider>
  )
}

export default App
