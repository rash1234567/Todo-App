import React from "react";
import { categories } from "../Data/data";
import { useNavigate } from "react-router-dom";

type propsType = {
     name:string,
     id:string
}

function Category (props:propsType) {
   const navigate = useNavigate()
    return (
     <div className='bg-white w-[90%] h-[15%] mb-[2%] flex justify-between rounded-2xl overflow-hidden'>
        <div className='bg-[red] h-full w-[2%]'></div>
        <div className='w-[95%] flex items-center justify-between px-[2%] h-full'>
           <h1 className='text-[20px]'>{props.name}</h1>
           <i className="fa-solid fa-arrow-right text-[red] text-[20px]" onClick={() => navigate('/category/' + props.id)}></i>
        </div>
     </div>
    )
}


export default Category;