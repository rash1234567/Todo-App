import React from 'react';
import logo from './logo.svg';
import './tailwind.output.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Pages/Index';
import TodoList from './Pages/TodoList';
import AddTodo from './Pages/AddTodo';
import AddCategory from './Pages/AddCategory';

function App() {
  return (
    <div className="App ">
       <Router>
           <Routes>
              <Route path='/' element={<Index/>} />
              <Route path='/addtodo/:id' element={<AddTodo />} />
              <Route path='/addcategory' element={<AddCategory/>} />
              <Route path='/category/:id' element={<TodoList/>} />
           </Routes>
       </Router>
    </div>
  );
}

export default App;
