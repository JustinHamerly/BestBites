import LoginProvider from "./auth/LoginProvider"

function App() {

  return (
    <LoginProvider>
      <div className="App">
        <h1>Best Bites</h1>
      </div>
    </LoginProvider>
  )
}

export default App
