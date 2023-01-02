import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Link from 'next/link';
import comingSoon from '../public/images/comming-soon.png'

export default function Blog() {
  return (
    <div className="font-poppins bg-3 min-h-screen flex flex-col justify-between">
      <Meta meta={{ title: "Blog - Dawood Emran" }} />
      <Header />
      <main>
        <div className="max-w-7xl px-4 mx-auto my-12 lg:my-20 flex items-center justify-center">
          <img src={comingSoon.src} alt="coming soon" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
