import './App.css'

import Login from './pages/login'
import { SessionProvider } from './context/sessionContext'
import { ErrorProvider } from './context/errorContext'

function App() {
  return (
    <>
      <ErrorProvider>
        <SessionProvider>
          {/* <Navbar /> */}
          <Login/>
          {/* <Footer /> */}
        </SessionProvider>
      </ErrorProvider>
    </>
  )
}

export default App