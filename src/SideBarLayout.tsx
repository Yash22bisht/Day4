// import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function sideBarLayout() {
    return (

        // Create Layout component with sidebar (NavLink items: Contacts, Add Contact, About)
        //    - Active NavLink highlighted, Outlet for children

        <div className="flex bg-cyan-100 min-h-screen">
            <div className="sidebar w-44 bg-cyan-200 p-4">
                <h1 className='text-xl font-bold mb-4'>Contact Manager</h1>
                <ul className="flex flex-col gap-4">
                    <li><NavLink to={"/"} > Home </NavLink></li>
                    <li><NavLink to={"/about"} > About </NavLink></li>
                    <li><NavLink to={"/contacts/new"}> Add Contact</NavLink></li>
                </ul>
            </div>
            <div className="main flex-1">
                <Outlet />
            </div>
        </div>
    )
}
