export type categories = {
   id:string,
   name:string,
   tasks:{
       id:string,
       task:string,
       completed:boolean,
       date:Date
   }[]
}[]

export const categoriesData:categories = [
    {
        id:"1",
        name:'Home',
        tasks:[{
            id:'1a',
            task:'learn typescript',
            completed: false,
            date:new Date()
        }]
    },
    {
        id:"2",
        name:'Work',
        tasks:[{
            id:'2a',
            task:'get to work by 8',
            completed:false,
            date:new Date()
        }]

    },
    {
        id:'3',
        name:'Others',
        tasks:[{
           id:'3a',
           task:'hit the gym',
           completed:false,
           date:new Date()
        }] 
    },
]