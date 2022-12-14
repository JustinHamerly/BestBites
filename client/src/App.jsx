import { BrowserRouter } from 'react-router-dom';
import LoginProvider from './auth/LoginProvider';
import RestProvider from './components/restContext/RestProvider';
import Auth from './auth/Auth';
import Header from './components/Header/Header'
import Main from './components/Main';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <LoginProvider>
        <RestProvider>
          <div className="App">
            <Header />
            <Auth>
              <Main />
            </Auth>
            <footer>
              <a target="_blank" href="https://icons8.com/icon/8439/meal" rel="noreferrer">Meal</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
            </footer>
          </div>
        </RestProvider>
      </LoginProvider>
    </BrowserRouter>
  )
}

export default App
