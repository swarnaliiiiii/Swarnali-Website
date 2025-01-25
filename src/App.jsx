import React from 'react'
import Header from './components/Header'
import Landing from './components/Landing';

const App = () => {
  return (
    <>
    <div className='bg-black pt-[3.75rem] lg:pt-[5rem] overflow-hidden '>
    <Header />
    <Landing />
    </div>
    </>
  )
}

export default App;