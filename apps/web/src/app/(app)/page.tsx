'use client'

import { ComponentExample } from '@/components/component-example'
import React, { useEffect, useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export default function HomePage() {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((res) => res.text())
      .then((data) => {
        setMessage(data)
        console.log('API Response:', data)
      })
      .catch((err) => console.error('API Error:', err))
  }, [])

  return (
    <div>
      <p className='text-center font-mono'>{message}</p>
      <ComponentExample />
    </div>
  )
}
