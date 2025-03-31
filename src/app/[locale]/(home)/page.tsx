import React from "react"
import { Metadata } from "next"
import HomeContainer from "./section/HomeContainer"

export const metadata: Metadata = {
  title: "Phan Trung Điền - Portfolio",
}

export default async function Home() {

  return <HomeContainer />
}
