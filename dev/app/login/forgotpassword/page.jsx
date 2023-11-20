import React from 'react'

//components
import Submitbutton from '../../components/submitbutton'

export default function Page({children}) {
  return (
    <div className="container mx-auto">
    <div className = "flex flex-col items-center justify-center">

      <form className="grid grid-flow-row bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-2 w-96">

        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Email" />

      
        <div className="flex items-center justify-center">
            <Submitbutton buttonname="Submit"/>
        </div>

      </form>
    </div>
  </div>
  )
}
