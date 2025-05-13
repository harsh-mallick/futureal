import Image from "next/image";
import { ArrowRight, Code, Cpu, PencilRuler, ShieldAlert } from 'lucide-react';
import About_Futureal from "./Components/About_Futureal";

export default function Home() {
  const cards = [
    { icon: <Code />, text_colour: "text-blue-500", bg_colour: "bg-blue-500/30", head: "Coding", desc: "From web dev to algorithms" },
    { icon: <Cpu />, text_colour: "text-green-500", bg_colour: "bg-green-500/30", head: "AI", desc: "Explore ML and AI innovations" },
    { icon: <PencilRuler />, text_colour: "text-purple-500", bg_colour: "bg-purple-500/30", head: "Design", desc: "UI/UX and creative design" },
    { icon: <ShieldAlert />, text_colour: "text-orange-500", bg_colour: "bg-orange-500/30", head: "Cyber Security", desc: "Learn ethical hacking & security" },
  ]
  return (
    <div className="max-w-screen" >
      <div className="bg-[rgb(8,12,25)] text-white pt-[10vh] sm:h-[100vh] h-auto min-h-screen pb-[2vh] " style={{ boxShadow: "inset 0px 1px 60px black" }}>
        <video autoPlay loop muted playsInline className="absolute z-[0] sm:h-full h-[90rem] w-full top-0 left-0 object-cover" style={{ mixBlendMode: "color-dodge", opacity: '0.4' }}>
          <source src="./circuit.mp4" />
        </video>
        <div className="z-[1] relative">
          <h1 className="text-center font-extrabold text-[3.5rem] tracking-[0.2em] pt-10 to-75% via-20% from-blue-400 via-blue-500 to-violet-400 bg-gradient-to-r bg-clip-text text-transparent font_audiowide">Futureal</h1>

          <div className="text-wrap text-[1.2rem] text-gray-400 text-center mt-10 tracking-wide">
            <h2 className="text-gray-200 text-center font-bold text-[2.0rem] tracking-wide mb-[0.5rem]">Where Code Meets Imagination</h2>
            A student-led tech club that empowers individuals to explore and build <br /> with cutting-edge technology. Join us in shaping the future through <br /> innovation.</div>
          <div className="flex gap-4 justify-center mt-8">
            <button className="bg-blue-600 rounded-2xl h-10 w-36 text-base font-bold cursor-pointer tracking-wide flex gap-2 items-center justify-center">Explore <ArrowRight /></button>
            <button className="rounded-2xl h-10 w-36 text-base cursor-pointer font-bold border-1 border-gray-500 tracking-wide">Meet Our Team</button>
          </div>
          <div className="sm:flex gap-4 justify-center text-lg ml-auto justify-items-center">
            {Array.isArray(cards) && cards.map((data) => {
              return (
                <div key={data.head} className="border-1 border-gray-800 h-46 text-center mt-8 px-5 w-62 rounded-xl bg-[#0c12268f] hover:scale-105 transition-all ease-in">
                  <div className="w-full flex justify-center mt-4"><p className={["flex justify-center w-10 h-10 rounded-4xl items-center", data.text_colour, data.bg_colour].join(" ")}>{data.icon}</p></div>
                  <p className="font-black mt-4">{data.head}</p>
                  <p className="text-wrap mt-3 text-base">{data.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div >

      <About_Futureal />
    </div>
  );
}
