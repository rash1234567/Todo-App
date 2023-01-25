import React, { useState } from 'react';
import Category from './Category';
import { categoriesData } from '../Data/data';

function Categories () {
  const [show, setShow] = useState(false)
      return (
        <div className='flex items-center relative justify-center h-[100vh] w-full'>
            <div className='bg-slate-500 w-[90%] h-[90%] flex flex-col items-center justify-around md:w-4/5 lg:w-[40%] xl:w-[35%] rounded-xl flex flex-col relative'>
                    <h1 className='text-[25px]'>Categories</h1>
                    <div className='h-[85%] w-full flex flex-col items-center'>
                      {
                        categoriesData.map(category => {
                          return <Category key={category.id} {...category}/>
                        })
                      }
                    </div>
                    <div className='bg-[blue] w-[80px] h-[80px] rounded-full absolute bottom-[5%] right-[5%] text-[25px] text-white flex items-center justify-center' onClick={() => window.location.replace('/addcategory')}><i className="fa-solid fa-plus"></i></div>
            </div>
        </div>
      )
}


export default Categories;
