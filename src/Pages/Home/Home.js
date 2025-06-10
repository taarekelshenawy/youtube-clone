import React, { useState } from 'react';
import "./Home.css";
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

export default function Home({isSidebaropen,setIsSidebaropen}) {
  const [category,setCategory] = useState(0);
  return (
    <div  className='home-content'>
      <Sidebar isSidebaropen={isSidebaropen} setIsSidebaropen={setIsSidebaropen} category={category} setcategory={setCategory}/>
      <Feed isSidebaropen={isSidebaropen} setIsSidebaropen={setIsSidebaropen}   category={category}/>
    </div>
   
  )
}
