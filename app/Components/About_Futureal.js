import React from 'react'
import { Check } from 'lucide-react';

const About_Futureal = () => {
    return (
        <div className="bg-[#060c1d] text-white pt-[10vh] h-[100vh]">
            <h1 className='text-center font-bold text-[2.6rem] tracking-wide'>About Us</h1>
            <div className='text-center grid w-full'>
                <p className='w-3xl text-xl text-center text-gray-400 mt-3 justify-self-center'>Futureal is a student-led tech club that empowers individuals to explore and build with code, design, AI, and cybersecurity. We conduct sessions, workshops, and competitions to spark innovation.</p>
                <div className='flex gap-6 w-[90%] justify-self-center mt-10'>
                    <div className='custom_border w-full h-[20rem] rounded-md from-[#060c1d]/30 via-[#19223c]/50 to-[#0d1018] bg-gradient-to-br hover:scale-[1.03] transition-all shadow-md'>
                        <p className='text-2xl font-bold text-left mx-5 mt-8 tracking-wider'>What We Do</p>
                        <div className='mx-5 mt-6 text-lg'>
                            <div className='flex gap-2 align-middle mb-3'>
                                <p className='text-green-500'><Check /></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto</p>
                            </div>
                            <div className='flex gap-2 align-middle mb-3'>
                                <p className='text-green-500'><Check /></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto</p>
                            </div>
                            <div className='flex gap-2 align-middle mb-3'>
                                <p className='text-green-500'><Check /></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto</p>
                            </div>
                            <div className='flex gap-2 align-middle mb-3'>
                                <p className='text-green-500'><Check /></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto</p>
                            </div>
                        </div>
                    </div>
                    <div className='custom_border-1 w-full h-[20rem] rounded-md from-[#060c1d]/30 via-[#0e1f4e]/30 to-[#0e1f4e]/30 bg-gradient-to-br hover:scale-[1.03] transition-all'>
                        <p className='text-2xl font-bold text-left mx-5 mt-8 tracking-wider'>Our Achievements</p>
                        <div className='mx-5 mt-6 text-lg'>
                            <div className='flex gap-2 align-middle mb-3'>
                                <p className='text-green-500'><Check /></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto</p>
                            </div>
                            <div className='flex gap-2 align-middle mb-3'>
                                <p className='text-green-500'><Check /></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto</p>
                            </div>
                            <div className='flex gap-2 align-middle mb-3'>
                                <p className='text-green-500'><Check /></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto</p>
                            </div>
                            <div className='flex gap-2 align-middle mb-3'>
                                <p className='text-green-500'><Check /></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="gradient-border" id="box">Animated Gradient Border</div> */}
        </div >
    )
}

export default About_Futureal
