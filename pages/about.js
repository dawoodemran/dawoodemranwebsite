import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Link from 'next/link';
import David from '../public/images/david.png'


export default function About() {
  return (
    <div className="font-poppins bg-3 min-h-screen flex flex-col justify-between">
      <Meta meta={{ title: "About - Dawood Emran" }} />
      <Header />
      <main>
        <div className="max-w-7xl grid grid-cols-2 gap-x-20 px-4 mx-auto my-12 lg:my-20">
          <div className='space-y-4'>
            <h1 className='text-5xl font-tiempos leading-[1.15] max-w-lg'>
              Hi, I’m Dawood Emran
              & I’m a designer
            </h1>
            <p className='text-xl text-1 font-light max-w-lg'>
              From the day I was born, I remember the war, I lived the war and grow up, the war of my homeland Afghanistan, but I've always been passionate to learn the science & technonolgy and to help those who need help.
            </p>
            <p className='text-xl text-1 font-light max-w-lg'>
              I am always exploring challenges to continuously develop myself, such as participating in competitions, collaborating on projects, reading blogs, and involving myself in the design community where I learn from others and share my experiences and skills.
            </p>
            <p className='text-xl text-1 font-light max-w-lg'>
              But life’s not all about work, is it? In my downtime you’ll find me planning my next trip, watching moves, attempting to be healthy I go to Gym or lost in my thoughts on a walk.
            </p>
            <p className='text-xl text-1 font-light max-w-lg'>
              Empathy and kindness go a long way. Share our knowledge and take the time to understand different perspectives. Build a culture of inclusion and respect, and stay true to yourself and others.
            </p>
          </div>
          <div>
            <div className='grid grid-cols-2'>
              <div className='flex items-center translate-x-12'>
                <div className='h-[450px] w-[300px] shadow bg-1 rounded-lg bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${David.src})` }}>

                </div>
              </div>
              <div className='space-y-4'>
                <div className='h-[340px] w-[260px] shadow bg-1 rounded-lg bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${David.src})` }}>

                </div>
                <div className='h-[340px] w-[260px] shadow bg-1 rounded-lg bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${David.src})` }}></div>
              </div>
            </div>
          </div>
        </div>
      </main >
      <Footer />
    </div >
  )
}
