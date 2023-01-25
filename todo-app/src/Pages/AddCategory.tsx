import { stringify } from 'querystring';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoriesData } from '../Data/data';

function AddCategory () {
    const navigate = useNavigate();
    const [category, setCategory] = useState('')

    const addCategory = () => {
       let categoryLength = categoriesData.length + 1
        let newCategory:{
            id:string,
            name:string,
            tasks:{
                id:string,
                task:string,
                completed:boolean,
                date:Date
            }[]
         } = {
            id: categoryLength.toString(),
            name:category,
            tasks:[]
        } 
        categoriesData.push(newCategory);
        navigate('/'); 
    }
   return(
      <div className='mx-auto h-[90vh] w-[90vw] md:w-[50vw] xl:w-[30vw] mt-[5vh] bg-slate-500'>
          <div className='w-full h-[40%] flex flex-col p-2'>
            <div className='flex w-full h-[15%] items-center justify-between text-[20px] text-[white]'>
             <i className="fa-solid fa-chevron-left" onClick={() => navigate(-1)}></i>
            </div>
             <h1 className='text-white text-[20px] self-center mt-[2%]'>Add Category</h1>
             <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className='w-full h-[20%] p-2 mt-[2%]' placeholder='input category' />
             <button className='mt-[5%] bg-black text-white h-[20%] w-[40%] p-1 rounded-lg shadow-2xl self-center' onClick={addCategory}>Add Category</button>
          </div> 
      </div>
   )
}

export default AddCategory;