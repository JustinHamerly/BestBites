import LoginProvider from './auth/LoginProvider';
import Auth from './auth/Auth';
import Header from './components/Header'
import Interface from './components/Interface';
import './App.css'

function App() {

  return (
    <LoginProvider>
      <div className="App">
        <Header />
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
