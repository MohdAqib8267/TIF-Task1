import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeLanding from './components/HomeLanding/HomeLanding'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Articles from './components/Articles/Articles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <HomeLanding/>
      <About/>
      <Articles/>
      <Footer/>
     
    </div>
  )
}

export default App
