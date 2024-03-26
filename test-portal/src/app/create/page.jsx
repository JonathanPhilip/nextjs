
import React from 'react';

export default function CreateTest() {
    



    return <div className="flex justify-center items-center h-screen">
        <div className=" bg-gray-100 text-sky-900 p-8 rounded-lg">
            <h1 className="test-3xl mb-4 flex justify-center font-extrabold">Create Test</h1>
            <div className="flex flex-col">
                <label htmlFor="testName" className="mb-2 font-bold">Test Name:</label>
                <input type="test" id="testName" className="px-3 py-2 mb-4" />
                
                <label htmlFor="testques" className="mb-2 font-bold">Total Questions:</label>
                <input type="number" id="testques" className="px-3 py-2 mb-4" />
                
                <label htmlFor="duration" className="mb-2 font-bold">Duration:</label>
                <input type="number" id="duration" className="px-3 py-2 mb-4" />
                
                <label htmlFor="totalscore" className="mb-2 font-bold">Total Score:</label>
                <input type="number" id="totalscore" className="px-3 py-2 mb-4" />


            </div>

        </div>

    </div>
}