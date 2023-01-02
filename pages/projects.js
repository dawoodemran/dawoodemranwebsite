import React from 'react'
import Meta from '../components/meta'
import Header from '../components/header'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'
import { sanityClient, urlFor } from '../sanity'
import { PortableText } from '@portabletext/react';

const imageComponent = ({ value, isInline }) => {
  return (
    <img
      src={urlFor(value).url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        display: isInline ? 'inline-block' : 'block',
      }}
      className='w-full h-auto'
    />
  )
}

const components = {
  types: {
    image: imageComponent,
  },
  block: {
    normal: ({ children }) => <p className="text-lg sm:text-xl text-1 mb-4">{children}</p>,
    h2: ({ children }) => <h2 className='text-2xl sm:text-4xl text-4 mb-4'>{children}</h2>,
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a className='text-main underline' href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
          {children}
        </a>
      )
    },
    strong: ({ children }) => <strong className='text-main'>{children}</strong>
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-[22px] mb-4 text-1 text-lg sm:text-xl">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-[22px] mb-4 text-1 text-lg sm:text-xl">{children}</ol>,
  },
}

export default function Projects({ projects }) {

  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  function handleEscapeClick(event) {
    if (event.keyCode == 27) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      document.querySelector("body").style.overflow = "hidden";
      window.addEventListener('keyup', handleEscapeClick)
    } else {
      document.querySelector("body").style.overflow = "auto";
      window.removeEventListener('keyup', handleEscapeClick)
    }
  })

  function toggleModal(project = null) {
    setOpen(!open)
    setSelectedProject(project)
  }

  return (
    <div className='font-poppins bg-3'>
      <Meta meta={{ title: "Projects - Dawood Emran" }} />
      <div className="relative font-poppins min-h-screen flex flex-col justify-between">
        <Header />
        <main>
          <div className="max-w-7xl px-4 mx-auto my-10 lg:my-20">
            <div className='text-center flex flex-col items-center space-y-4 mb-12 lg:mb-16'>
              <h1 className='text-5xl font-tiempos leading-[1.15]'>
                Projects I have been done
              </h1>
              <p className='text-1 max-w-2xl text-base sm:text-lg'>
                I focus on simplifying complex products into inclusive human-centric experiences. I always try to make the best solution for real problems. Here are some of the projects I have done it.
              </p>
            </div>
            <div>
              <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                  projects.map((project) => {
                    return (
                      <li className='relative space-y-4 w-full h-full cursor-pointer group' key={project?._id} onClick={() => toggleModal(project)}>
                        <img src={urlFor(project?.thumbnail).url()} className='w-full h-auto group-hover:transition-transform duration-300 group-hover:scale-105 rounded-xl' />
                        <div className='space-y-2'>
                          <h4 className='text-xl font-semibold'>{project?.title}</h4>
                          <p className='text-1 text-base sm:text-lg'>{project?.summary}</p>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      {open && <Modal close={toggleModal} project={selectedProject} />}
    </div>
  )
}

function Modal({ close, project }) {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Show/Hide */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="min-h-full p-4 sm:p-0">
          {/* Show/Hide */}
          <div className='flex justify-end'>
            <button onClick={() => close()} className='sm:my-4 mr-4'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="none"
                viewBox="0 0 17 17"
              >
                <path
                  stroke="#F7F7F7"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M16 16L1 1m15 0L1 16"
                >
                </path>
              </svg>
            </button>
          </div>
          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-full h-full min-h-full sm:p-6">
            <div className='max-w-7xl mx-auto'>
              <article className='space-y-4'>
                <div className='max-w-3xl mx-auto'>
                  <div className='flex justify-between items-center'>
                    <div className='space-y-1 '>
                      <h4 className='text-xl font-semibold'>{project?.title}</h4>
                      <p className='text-1 text-base sm:text-lg'>{project?.subHeading}</p>
                    </div>
                    <button className="inline-flex py-4 px-10 rounded-lg bg-2 text-white font-semibold hover:opacity-95">
                      Request demo
                    </button>
                  </div>
                </div>
                <img src={urlFor(project?.mainImage).url()} alt="proejct image" className='w-full h-auto' />
                <div className='max-w-3xl mx-auto text-base sm:text-lg text-1'>
                  <PortableText value={project?.body} components={components} />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}


export const getServerSideProps = async () => {
  const query = `*[_type == "project"]{
    _id,
    title,
    subHeading,
    summary,
    slug,
    publishedAt,
    thumbnail,
    mainImage,
    author -> {
      name,
      image
    },
    body,
  }`;

  const projects = await sanityClient.fetch(query);

  return {
    props: {
      projects
    }
  }

}