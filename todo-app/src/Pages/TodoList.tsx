import React from 'react';
import { categoriesData } from '../Data/data';
import { useNavigate, useParams } from 'react-router-dom';

function TodoList () {
  const navigate = useNavigate()
   const {id} = useParams()
   const eachCategory = categoriesData.find(c => c.id === id)
      return (
        <div>
              <div className='flex items-center relative justify-center h-[100vh] w-[100vw]'>
            <div className='bg-slate-500 w-[90%] h-[90%] items-center justify-around md:w-4/5 lg:w-[40%] xl:w-[35%] rounded-xl flex flex-col relative'>
                    <h1 className='text-[25px]'>My Todo List</h1>
                    <div className='h-[85%] w-full flex flex-col items-center'>
                        {/* todo list */}
                        {
                          eachCategory?.tasks.map((task => {
                            return  <div className='bg-white w-[90%] h-[15%] mb-[2%] flex justify-between rounded-2xl overflow-hidden' {...task} key={task.id}>
                                <div className='bg-[red] h-full w-[2%]'></div>
                                <div className='w-[95%] flex items-center justify-between px-[2%] h-full'>
                                    <h1 className='text-[20px]'>{task.task}</h1>
                                    <i className="fa-solid fa-trash-can"></i>
                                    <input type="checkbox" className='w-[20%]' />
                                </div>
                            </div> 
                          }))
                        }
                    </div>
                    <div className='bg-[blue] w-[80px] h-[80px] rounded-full absolute bottom-[5%] right-[5%] text-[25px] text-white flex items-center justify-center' onClick={() => {
                     navigate('/category/' + id + '/addtodo')
                    }}><i className="fa-solid fa-plus"></i></div>
            </div>
        </div>
        </div>
      )
}


export default TodoList
