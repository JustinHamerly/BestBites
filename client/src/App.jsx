import LoginProvider from "./auth/LoginProvider";
import Auth from "./auth/Auth";
import Login from './auth/Login'

function App() {

  return (
    <LoginProvider>
      <div className="App">
        <Login />
        <Auth capability="create">
        </Auth>
      </div>
    </LoginProvider>
  )
}

export default App
