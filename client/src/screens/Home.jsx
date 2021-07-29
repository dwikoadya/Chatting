import React from 'react'
import { useState } from 'react'

export default function Home() {
  const [sum, setSum] = useState(0)

  return (
    <div>
      <p>Kamu sudah nge Klik {sum} kali</p>
      <button onClick={() => setSum(sum + 1)}> Klik Saya </button>
    </div>
  )
}