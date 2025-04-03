"use client"

import { Cover, Header } from "@screen/Home"
import { Fragment } from "react"

export default function HomeContainer() {
  return (
    <Fragment>
      <Header />
      <Cover />

      <div className="flex justify-center section-container mx-4 w-full">
        <section className="absolute top-0 flex md:items-center py-8  h-full justify-start  2xl:container mx-auto w-full max-w-[75rem] md:px-12 px-4 min-h-screen ">
          <div className="font-medium flex flex-col justify-center  md:pt-0 select-none">
            <div
              className="md:mb-4 mb-2">
              <h2 className="text-4xl seq text-black">Hello 👋🏻</h2>
              <h1 className="text-4xl seq  text-black">I am Trung Dien</h1>
            </div>
            <p className="mb-4 text-black">
              <span className="text-xl sm:text-2xl md:text-5xl seq">I'm a frontend developer</span>
            </p>
          </div>
        </section>
      </div>
      <Header />
    </Fragment>
  )
}
