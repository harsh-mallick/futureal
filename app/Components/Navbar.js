"use client"
import React, { useState } from 'react'
import { Link } from "next/link"
import { SignedIn, SignInButton, SignedOut, UserButton, SignUpButton } from "@clerk/nextjs"
import { Menu } from 'lucide-react';
const Navbar = () => {
    const [hidden, sethidden] = useState(true)
    return (
        <div className="bg-[rgba(8,12,22,0.76)] text-white sm:h-[10vh] min-h-[10vh] h-auto sm:mt-0 pt-5 w-screen px-4 fixed z-[3]">
            <div className='flex items-center h-full'>
                <div>
                    <h1 className='text-2xl font-extrabold tracking-wider border-r-2 border-r-white pr-3'>Futureal</h1>
                </div>
                <div className='hidden w-full sm:flex'>
                    <div className='flex justify-center w-[77%] gap-5 text-base items-center'>
                        <p className='cursor-pointer font-bold hover:text-gray-200'>Home</p>
                        <p className='cursor-pointer font-bold hover:text-gray-200'>About</p>
                        <p className='cursor-pointer font-bold hover:text-gray-200'>Core Team</p>
                        <p className='cursor-pointer font-bold hover:text-gray-200'>Upcoming Competitions</p>
                        <p className='cursor-pointer font-bold hover:text-gray-200'>Contact Us</p>
                    </div>
                    <div className='flex gap-8'>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton>
                                <button className='border-green-400 border-2 font-bold p-2 rounded-2xl cursor-pointer hover:bg-green-400/20'>
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton>
                                <button className='border-yellow-400 border-2 font-bold p-2 rounded-2xl cursor-pointer hover:bg-yellow-400/20'>
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </SignedOut>
                    </div>
                </div>
                <div className='flex sm:hidden w-full justify-end'>
                    <Menu className='text-right' onClick={() => { sethidden(!hidden) }} />
                </div>
            </div>

            {hidden ? <div></div> : (
                <div className='block w-full sm:hidden relative z-[3] justify-items-center'>
                    <div className='text-center w-[77%] gap-5 text-base items-center'>
                        <p className='cursor-pointer font-bold hover:text-gray-200'>Home</p>
                        <p className='cursor-pointer font-bold hover:text-gray-200 mt-2'>About</p>
                        <p className='cursor-pointer font-bold hover:text-gray-200 mt-2'>Core Team</p>
                        <p className='cursor-pointer font-bold hover:text-gray-200 mt-2'>Upcoming Competitions</p>
                        <p className='cursor-pointer font-bold hover:text-gray-200 mt-2'>Contact Us</p>
                    </div>
                    <div className='flex gap-8 mt-2'>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton>
                                <button className='border-green-400 border-2 font-bold p-2 rounded-2xl cursor-pointer hover:bg-green-400/20'>
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton>
                                <button className='border-yellow-400 border-2 font-bold p-2 rounded-2xl cursor-pointer hover:bg-yellow-400/20'>
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </SignedOut>
                    </div> </div>)}


        </div>
    )
}

export default Navbar
