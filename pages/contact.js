import Header from '../components/header';
import Footer from '../components/footer';
import Meta from '../components/meta';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const isSuccess = router.query?.success && router.query.success === "true"

  return (
    <div className="relative font-poppins bg-3 min-h-screen flex flex-col justify-between">
      <Meta meta={{ title: "Contact - Dawood Emran" }} />
      <Header />
      <main>
        <div className="max-w-3xl px-4 mx-auto my-12 lg:my-20">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-tiempos text-main mb-4">Looking for a designer for your next project?</h1>
            <p className="text-xl text-1 px-4">Let's discuss my solutions and services for digital business transformation. I will be happy to assess where is your project on the journey.</p>
          </div>
          {isSuccess &&
            <div class="rounded-md bg-green-50 p-4 mt-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class=" font-medium text-green-800">Thanks for your message, I will get back to you soon.</p>
                </div>
              </div>
            </div>
          }

          <form method="POST" name="contact" action="contact/?success=true" data-netlify="true" data-netlify-honeypot="bot-field">
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="space-y-4 sm:space-y-6">
                <input name='firstname' type="text" className="rounded-xl px-8 py-5 text-1 bg-white text-xl border border-1/20 focus:outline-none focus:border focus:border-[#FF385C] w-full" placeholder="Your name" required />
                <input name='email' type="email" className="rounded-xl px-8 py-5 text-1 bg-white text-xl border border-1/20 focus:outline-none focus:border focus:border-[#FF385C] w-full" placeholder="E-mail" required />
                <input name='phone' type="text" className="rounded-xl px-8 py-5 text-1 bg-white text-xl border border-1/20 focus:outline-none focus:border focus:border-[#FF385C] w-full" placeholder="Phone" />
              </div>
              <div>
                <textarea name='message' className="rounded-xl h-full w-full bg-white px-8 py-5 text-1 text-xl border border-1/20 focus:outline-none focus:border focus:border-[#FF385C]" placeholder="Message" required></textarea>
              </div>
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <button type="submit" className="inline-flex py-4 px-10 rounded-lg bg-2 text-white font-semibold hover:opacity-95 focus:outline-2">Send Message</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
