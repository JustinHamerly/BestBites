import LoginProvider from "./auth/LoginProvider";
import Auth from "./auth/Auth";
import Login from './auth/Login'
import Interface from "./components/Interface";
import './App.css'

function App() {

  return (
    <LoginProvider>
      <div className="App">
        <img id="background" src="./images/background.jpg" alt="background"></img>
        <header>
          <h1>BEST BITES</h1>
          <Login />
        </header>
        <main>
          <Auth>
            <Interface />
          </Auth>
        </main>
        <footer>
          <a target="_blank" href="https://icons8.com/icon/8439/meal" rel="noreferrer">Meal</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
        </footer>
      </div>
    </LoginProvider>
  )
}

export default App
