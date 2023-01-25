import React, { useState } from 'react';
import { categoriesData } from '../Data/data';
import { useParams, useNavigate } from 'react-router-dom';



function AddTodo () {
    const {id} = useParams();
    const [todo, setTodo] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate(); 

    const addTodo = () => {
        const eachCategory = categoriesData.find(c => c.id === id)
         let newTodo : {
            id:string,
            task:string,
            completed:boolean,
            date:string
         } = {
            id:'a',
            task:todo,
            completed:false,
            date:date
         } 
         if(eachCategory) {
         eachCategory.tasks.push(newTodo);
         }
         navigate(-1)
 
    }
    return(
        <div className='bg-slate-500 w-[90vw] md:w-[60vw] flex flex-col lg:w-[30vw] h-[90vh] mx-auto mt-[5vh]'>
           <div className='w-full flex flex-col border-b-solid border-b-[white] border-b-[3px] h-[10%] items-center justify-around'>
              <h1 className='text-[20px] text-white'>Add Todo</h1>
           </div>
           <form action="" className='flex flex-col h-[80%] mt-[5%] w-[80%] self-center justify-around'>
                <div className='w-full h-[15%] flex-col flex'>
                    <h1 className='text-[20px] text-white'>Todo</h1> 
                    <input type="text" 
                        className='w-full h-[60%] p-2' 
                        value={todo} 
                        onChange={(e) => setTodo(e.target.value)}
                    />   
                </div>
                <div className='w-full h-[15%]  flex-col flex'>
                    <h1 className='text-[20px] text-white'>Date</h1> 
                    <input type="date"  
                        className='w-full h-[60%] p-2' 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        
                />
                </div>
                <div className='w-full h-[15%]  flex-col flex'>
                    <h1 className='text-[20px] text-white'>Priority</h1>
                    <input type="text"  className='w-full h-[60%] p-2'/>
                </div>
                <input type="button" value="Add todo" className='bg-black text-white p-2 w-[50%] rounded-2xl self-center' onClick={()=>addTodo()} />
           </form>
        </div>
    )
}


export default AddTodo;