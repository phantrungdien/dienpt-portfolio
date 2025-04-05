"use client"

// import { IMenu } from "@domain/home"
import { ThemeToggle } from "@screen/Home/index"

export const Header = () => {
  const diendev = "<DienDev/>"

  // const Items = [
  //   {
  //     id: 1,
  //     categoryId: 1,
  //     idProp: "home",
  //     name: "Home",
  //   },
  //   {
  //     id: 2,
  //     categoryId: 2,
  //     idProp: "about",
  //     name: "About",
  //   },
  //   {
  //     id: 3,
  //     categoryId: 3,
  //     idProp: "skill",
  //     name: "Skill",
  //   },
  //   {
  //     id: 4,
  //     categoryId: 4,
  //     idProp: "portfolio",
  //     name: "Portfolio",
  //   },
  //   {
  //     id: 5,
  //     categoryId: 5,
  //     idProp: "contact",
  //     name: "Contact",
  //   },
  // ]

  // const ItemMenu = ({ item }: { item: IMenu }) => {
  //   return (
  //     <li className="">
  //       <a
  //         href={`#` + item?.idProp}
  //         className="">
  //         <span className="">{item?.categoryId + `.`}</span>
  //         {item?.name}
  //       </a>
  //     </li>
  //   )
  // }

  return (
    <header className="max-w-[75rem] w-full">
      <nav className="flex items-center justify-between h-[var(--header-height)] pointer-events-auto z-10 px-4 lg:px-2">
        <div
          id="home"
          className="text-center">
          <a
            href="#home"
            className="text-[var(--primary-color)] text-3xl md:text-[3.3rem] font-bold no-underline	">
            {diendev}
          </a>
        </div>
        {/* <ul className="flex">
            {Items?.map((item: IMenu, index) => {
              return (
                <ItemMenu
                  key={index}
                  item={item}
                />
              )
            })}
          </ul> */}
        <ThemeToggle />
      </nav>
    </header>
  )
}
