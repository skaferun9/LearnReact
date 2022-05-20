import React from 'react'
import Link from 'next/link'

export default function NewsPage() {
  return (
    <div>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href={'/news/testtesttest'}>
            More detail
          </Link>

        </li>
      </ul>
    </div>
  )
}
