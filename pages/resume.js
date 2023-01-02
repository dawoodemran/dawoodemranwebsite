import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Link from 'next/link';
import CV from '../public/images/david-cv.svg'


export default function About() {
  return (
    <div className="font-poppins bg-3 min-h-screen flex flex-col justify-between">
      <Meta meta={{ title: "Resume - Dawood Emran" }} />
      <Header />
      <main>
        <div className="max-w-7xl px-4 mx-auto my-12 lg:my-20 flex justify-center">
          <img src={CV.src} alt="dawood emran resume" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
