import React from 'react'
import Search from './Components/SearchDiv/Search'
import Footer from './Components/FooterDiv/Footer'
import Jobs from './Components/JobDiv/Jobs'
import Value from './Components/ValueDiv/Value'
import Nav from './Components/NavBar/Nav'

function App() {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Nav/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>

    </div>
  )
}

export default App
