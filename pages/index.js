import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import Meta from '../components/meta';
import MyPhoto from '../public/images/david.png'

export default function Home() {
  return (
    <div className='font-poppins bg-3'>
      <Meta />
      <div className="relative font-bai-jamjuree min-h-screen flex flex-col justify-between">
        <Header />
        <main>
          <div className="max-w-7xl px-4 mx-auto grid lg:grid-cols-2 gap-y-8 items-center my-10 lg:my-20">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className='text-5xl font-tiempos leading-[1.15]'>
                I focus on simplifying complex products into inclusive solutions.
              </h1>
              <p className='text-xl text-1 font-light max-w-lg'>
                I love a challenge and I love to solve problems, and I seek new experiences to grow and learn more to improve myself. I work as a UX/UI designer
              </p>
              <Link href="/blog" legacyBehavior>
                <a className="inline-flex py-4 px-10 rounded-lg bg-2 text-white font-semibold hover:opacity-95">
                  Talk to me!
                </a>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className='rounded-lg overflow-hidden lg:ml-auto'>
                <img src={MyPhoto.src} alt="" className="inline-block hover:grayscale-0 w-96 h-auto select-none transition-all duration-500" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
