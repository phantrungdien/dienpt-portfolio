"use client"

import Cover from "@screen/Home/Cover"
import { Fragment } from "react"

export default function HomeContainer() {
  
  return (
    <Fragment>
      <main
        id="main-content"
        className="flex-1 px-4 lg:px-5 xl:px-6 overflow-y-auto pt-4 pb-6 overflow-x-hidden">
          <Cover />
      </main>
    </Fragment>
  )
}
