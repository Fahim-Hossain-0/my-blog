import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'

function App() {
  
  const [bookMarked,setBookMarked] = useState([])

  const handleBookMark = (blog,) => {
    setBookMarked([...bookMarked, blog]);
  }
  

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container container mx-auto text-center flex justify-center items-start ">
        <div className="left-container w-[70%]">

        <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="right-container w-[30%]">

      <h1>reading time</h1>
      <h2>bookmarked list :</h2>
    {
   bookMarked.map(mark=><p>{mark.id }</p>)

    }
        </div>
      </div>

      
    </>
  )
}

export default App
