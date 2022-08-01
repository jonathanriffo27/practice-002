import { useState } from 'react';
import image from "./img/imageedit_5_3999388920 1.png"
import user from './img/image 7.png';
import './App.css';




function App() {
  const [open, setOpen] = useState(true)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  return (
    <div className="App">
      <nav class="flex items-center justify-between flex-wrap bg-[#FFFFFF] h-[50px] pl-[20px] shadow-md">
        <div class="flex items-center">
          <div className='flex justify-center bg-white w-[30px] h-[30px] rounded cursor-pointer hover:border-2'>
            <svg xmlns="http://www.w3.org/2000/svg" class="self-center stroke-[#959595] stroke-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={() => setOpen (!open)}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <img src={image} className="my-auto w-[143px] h-[20px] ml-[25px]" alt=""/>
        </div>
        <div className='flex float-right'>
          <img src={user} className="my-auto w-[40px] h-[40px] mr-[20px]" alt="" />
        </div>
      </nav>
      <div className={`flex h-screen align-middle`}>
          <div className={`bg-black opacity-70 w-[275px] text-[#CCCCCC] pt-[30px] ${open ? 'hidden':''}`}>
            <ul>
              <li className='flex justify-start w-[275px] h-[50px] px-[20px] py-[10px]'>
                <div className='flex justify-center bg-[#787878] w-[30px] h-[30px] rounded cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="self-center h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className='self-center ml-[10px]'>Inicio</span>
              </li>
              <li className='flex justify-start w-[275px] h-[50px] px-[20px] py-[10px]'>
                <div className='flex justify-center bg-[#787878] w-[30px] h-[30px] rounded'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="self-center h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className='flex-grow text-left self-center ml-[10px]'>Maestros</span>
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="self-center h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </li>
              <li className='flex justify-start w-[275px] h-[50px] px-[20px] py-[10px]'>
                <div className='flex justify-center bg-[#787878] w-[30px] h-[30px] rounded'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="self-center h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <span className='flex-grow text-left self-center ml-[10px]'>Procesos</span>
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="self-center h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </li>
              <li className='flex justify-start w-[275px] h-[50px] px-[20px] py-[10px]'>
                <div className='flex justify-center bg-[#787878] w-[30px] h-[30px] rounded'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="self-center h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className='flex-grow text-left self-center ml-[10px]'>Reportes</span>
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="self-center h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </div>
  
  )
}

export default App
