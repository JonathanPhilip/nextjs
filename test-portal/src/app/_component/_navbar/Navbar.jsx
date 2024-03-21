import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-white w-full">
   <div className="container mx-auto px-4 py-2 flex justify-between items-center">
       <div className="font-extrabold text-lg text-black">
          <span className="font-bold text-2xl font-roboto">TESTFACE</span>
         
       </div>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Create Test</button>
   </div>
   </div>
)
}
  
export default Navbar