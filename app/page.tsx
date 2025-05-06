"use client"

import Image from "next/image";

import './globals.css';
import logo from '../public/images/logo-main.png';

import cup from '../public/images/cup.png';
import book from '../public/images/book.png';
import mincrophone from '../public/images/microphone.png';
import money from '../public/images/money.png';

import ozod from '../public/images/ozod.jpg';
import ulugbek from '../public/images/ulugbek.jpg';
import damirbek from '../public/images/damirbek.jpg';
import asilbek from '../public/images/asilbek.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useState } from 'react';
import Intro from './intro';



export default function Home() {

  const [showIntro, setShowIntro] = useState(true);

  const items = [
    { title: "Hackathons & competitions", desc: "Test your skills & win big", img:cup },
    { title: "Learning resources", desc: "Master tech with top-notch content with ByteBridge" , img:book},
    { title: "Conferences & Workshops", desc: "Network with industry leaders", img:mincrophone },
    { title: "Internships & Jobs", desc: "Land your dream role!", img:money },
  ];

  const members = [
    { name: "Odilbekov Ozodbek", role: "Founder & CEO", img: ozod },
    { name: "Asilbek Sag'dullayev", role: "Co-founder",img: asilbek },
    { name: "Damirbek Xolnazarov", role: "Co-founder",img: damirbek },
    { name: "Ulugbek Mirzarustamov", role: "PR manager",img: ulugbek },
    { name: "Muhammadali", role: "HR manager",img: asilbek },
    
  ];
  return (
    <>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
        <header className="flex items-center justify-center fixed top-0 left-0 right-0 z-10">
          <img className="logo" src={logo.src} alt="" />
        </header>
    
        <div className="py-20 text-center  bg-grid-grey bg-grid-sm">
          <h1 className="heading-txt   ">Your Gateway to</h1>
          <h1 className="heading-txt  ">Tech Opportunities</h1>
          <div className="flex  items-center justify-center">
          <p className=" text-grey my-[5px]  italic p">Your low-key Computer Science community </p>
          <img className=" w-[0px] h-[0px] sm:w-[25px] h-[25px]" src="https://em-content.zobj.net/source/apple/419/rocket_1f680.png" alt="" />
          </div>
          
          <div className=" space-x-2 sm:space-x-4 ">
            <button
              className="bg-yellow p px-5 py-2  sm:px-6 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition"
              aria-label="Join ByteBridge" 
            >
              <a href="https://t.me/byteBridge_uz">Join Us</a>
              
            </button>
            <button
              className="border p border-grey text-black px-5 py-2  sm:px-5 sm:py-3 rounded-lg  font-semibold hover:bg-yellow hover:text-black transition"
              aria-label="Contact ByteBridge"
            >
              <a href="https://t.me/ozzoff7">Contact Us</a>
            </button>
          </div>
          
        </div>
    
        <section className="grid gap-[10px] grid-cols-2 sm:flex justify-center  text-center ">
    
      <div className=" w-[100%] max-w-[200px]  rounded-lg border border-gray-300 bg-white py-5 mx-auto">
        <h2 className="title-txt font-bold ">+100</h2>
        <p className="p">Community members</p>
      </div>
      <div className=" w-[100%] max-w-[200px] rounded-lg border border-[#ffd400] bg-[#ffd400] py-5 mx-auto">
        <h2 className="title-txt font-bold ">+10</h2>
        <p className="p">Upcoming events</p>
      </div>
      <div className=" w-[100%] max-w-[200px] rounded-lg border border-gray-300 bg-white py-5 mx-auto">
        <h2 className="title-txt font-bold ">+5</h2>
        <p className="p">Partners</p>
      </div>
    </section>
    
    
    <section className=" text-center">
          <h3 className="title-txt font-semibold mb-2">What we offer?</h3>
          <div className="grid md:grid-cols-2 gap-5 justify-center content-center"> 
            {items.map(({title,img,desc}, idx) => (
              <div key={idx} className="bg-white   flex flex-col items-center justify-center" >
                <Image className=" w-[50px] sm:w-[60px] " src={img} alt="" /> 
                <h4 className=" text-[20px] lg:text-[25px] font-bold ">{title}</h4>
                <p className="p text-[grey]">{desc}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="not-section">
      <h3 className="text-center title-txt">Our Team</h3>
    
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 5000, // 3 seconds
        disableOnInteraction: false, // keeps autoplay even after you touch it
      }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          500: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {members.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white p-3 shadow rounded-xl ">
              <Image className="rounded-lg  h-[350px] sm:h-[350px]  object-top object-cover " src={member.img} alt={member.name}  /> 
              <h4 className="text-[20px] lg:text-[25px] font-bold ">{member.name}</h4>
              <p className="text-grey p">{member.role}</p>
              <button className="mt-4 border p px-4 py-2 rounded">Contact</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
      <div className=" h-[300px] not-section rounded-lg flex flex-col justify-center items-center   bg-yellow text-center sm:h-[400px] p-[10px] ">
        <div className="flex  items-center justify-center">
        <h3 className="title-txt font-bold ">Become a part of our team</h3>
          <img className=" w-[0px] h-[0px] sm:w-[40px] h-[40px]" src="https://em-content.zobj.net/source/apple/419/cold-face_1f976.png" alt="" />
        </div>
      
      <p className=" text-[16px] leading-[16px] sm:p my-[10px]">
        Join our team—bring your energy, passion, and let&apos;s create something incredible
      </p>
      <div className=" space-x-2 ">
            <button
              className="bg-white p px-4 py-2  sm:px-6 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition "
              aria-label="Join ByteBridge"
            >
              <a href="https://t.me/byteBridge_uz">Join Us</a>
            </button>
            <button
              className="border p border-grey text-black px-4 py-2  sm:px-6 sm:py-3 rounded-lg  font-semibold hover:bg-yellow hover:text-black transition  "
              aria-label="Contact ByteBridge"
            >
              <a href="https://t.me/ozzoff7">Contact Us</a>
              
            </button>
          </div>
    </div>
    
    
    <div className="overflow-hidden whitespace-nowrap bg-black py-2">
          <div className="animate-scroll text-white  text-[16px] sm:text-lg font-semibold inline-block">
            <span className="mx-8">🚧 The website is under development 🚧</span>
            <span className="mx-8">🚧 The website is under development 🚧</span>
            <span className="mx-8">🚧 The website is under development 🚧</span>
            <span className="mx-8">🚧 The website is under development 🚧</span>
            <span className="mx-8">🚧 The website is under development 🚧</span>
            <span className="mx-8">🚧 The website is under development 🚧</span>
            <span className="mx-8">🚧 The website is under development 🚧</span>
            <span className="mx-8">🚧 The website is under development 🚧</span>
            <span className="mx-8">🚧 The website is under development 🚧</span>
          </div>
        </div>
    </>
      )}
    </>







    


  );
}