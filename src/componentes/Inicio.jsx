import React from 'react';
const image = require('../img/imageedit_5_3999388920 1.png');
const user = require('../img/image 7.png');



const Inicio = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-[#FFFFFF] h-[50px] pl-[20px] shadow-md">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-[#959595] stroke-2 h-6 w-6 hover:border-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <img src={image} className="my-auto w-[143px] h-[20px] ml-[25px]" alt=""/>
        </div>
        <div className='flex float-right'>
          <img src={user} className="my-auto w-[40px] h-[40px] mr-[20px]" alt="" />
        </div>
      </nav>
    </div>
  )
}

export default Inicio