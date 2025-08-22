import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/appContext'

const Header = () => {
  const {setInput , input} = useAppContext();

  const inputRef = useRef();

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    setInput(inputRef.current.value)

  }

  const onClear = () =>{
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='mx-8 sm:mx-16 x1:mx-24 relative'>

        <div className='text-center mt-20 mb-8'>

            <div className='inline-flex items-center justify-center gap-4 px-6 py-2.5 mb-4 border border-primary/40 bg-primary/10 rounded-4xl text-sm'>
                <p>New: AI feature integrated</p>
                <img src={assets.star_icon} alt=""  className='w-2.5' />
            </div>

            <h1 className='sm:text-6xl sm:leading-16 text-gray-700 text-3xl font-semi-bold'>Your Own <span className='text-primary'>Blogging</span> <br/> platform.</h1>

            <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora amet voluptas porro neque quis totam hic rerum sint odio.</p>

            <form onSubmit = {onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                <input ref={inputRef} type="text" placeholder='Search for blogs' required 
                className='w-full pl-4 outline-none'/>

                <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
            </form>

        </div>

        <div className='text-center'>

        {
          input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm  shadow-custom-sm cursor-pointer'>Clear Search</button>
        }
        </div>
        <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/>
    </div>
  )
}

export default Header