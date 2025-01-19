import React from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <h1 className='text-3xl'>Hello World</h1>
    <div className='pt-[3.75rem] lg:pt-[5rem] overflow-hidden'>
      <Button className="mt-10">
        Login
      </Button>
      <Header />
    </div>
    <ButtonGradient />
    </>
  )
}

export default App;