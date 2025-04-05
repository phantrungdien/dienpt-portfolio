"use client"

import { Cover, Header, Intro } from "@screen/Home"

export default function HomeContainer() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Cover />
      <Intro />
    </div>
  )
}
