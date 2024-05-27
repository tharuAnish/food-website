import Link from "next/link"
import React from "react"

export default function Meals() {
  return (
    <div>
      Meals
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </div>
  )
}
