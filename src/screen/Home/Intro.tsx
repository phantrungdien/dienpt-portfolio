"use client"

import React, { useEffect, useRef } from "react"
import Typed from "typed.js"

export const Intro = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["I'm a frontend developer"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 3000,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="flex justify-center w-full">
      <section className="absolute top-[var(--header-height)] flex items-center justify-start mx-auto w-full h-[calc(100vh-var(--header-height))]">
        <div className="font-medium flex flex-col justify-center select-none max-w-[75rem] w-full mx-auto px-4 lg:px-2">
          <div>
            <h2 className="text-4xl 2xl:text-7xl text-[var(--text-color)] my-8">Hello 👋🏻</h2>
            <h1 className="text-4xl 2xl:text-7xl text-[var(--text-color)] mt-0 mb-8">I am Trung Dien</h1>
          </div>
          <p className="mb-8 mt-0 text-[var(--text-color)]">
            <span
              ref={typedRef}
              className="text-xl sm:text-2xl md:text-5xl 2xl:text-7xl"></span>
          </p>
        </div>
      </section>
    </div>
  )
}
