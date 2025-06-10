import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

function App() {
  const [isSidebaropen,setIsSidebaropen]=useState(false);
  return (
    <div>
      <Navbar isSidebaropen={isSidebaropen} setIsSidebaropen={setIsSidebaropen} />
      <Routes>
        <Route path="/" element={<Home isSidebaropen={isSidebaropen} setIsSidebaropen={setIsSidebaropen}/>}></Route> 
         <Route path="/video/:videocategory/:videoId" element={<Video/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
