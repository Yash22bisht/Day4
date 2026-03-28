// import React from 'react'
import { useEffect } from "react";

export default function AddedContact() {
   useEffect(()=>{
    document.title = "Add Contact";
  },[])
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 mt-24">Contact Added Successfully</h1>
    </div>
  )
}
