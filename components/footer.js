import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl p-4 mx-auto flex flex-col lg:flex-row justify-center lg:justify-between text-center gap-y-4">
        <div>
          <span className="text-1 text-sm">© 2022 Dawood Emran. All rights reserved.</span>
        </div>
        <div>
          <span className="text-1 text-sm">Privacy policy </span>
        </div>
      </div>
    </footer>
  )
}
