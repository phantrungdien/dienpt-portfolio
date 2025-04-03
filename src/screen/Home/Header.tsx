"use client"

import { IMenu } from "@domain/home"

export const Header = () => {
  const diendev = "<DienDev/>"

  const Items = [
    {
      id: 1,
      categoryId: 1,
      idProp: "home",
      name: "Home",
    },
    {
      id: 2,
      categoryId: 2,
      idProp: "about",
      name: "About",
    },
    {
      id: 3,
      categoryId: 3,
      idProp: "skill",
      name: "Skill",
    },
    {
      id: 4,
      categoryId: 4,
      idProp: "portfolio",
      name: "Portfolio",
    },
    {
      id: 5,
      categoryId: 5,
      idProp: "contact",
      name: "Contact",
    },
  ]

  const ItemMenu = ({ item }: { item: IMenu }) => {
    return (
      <li className="">
        <a
          href={`#` + item?.idProp}
          className="">
          <span className="">{item?.categoryId + `.`}</span>
          {item?.name}
        </a>
      </li>
    )
  }

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };
  
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
  
  

  return (
    <header>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4">Chế độ sáng & tối</div>
      <button onClick={toggleDarkMode}>Chuyển Dark Mode</button>

      <nav className="flex">
        <div
          id="home"
          className="">
          <a
            href="#home"
            className="">
            {diendev}
          </a>
        </div>
        <ul className="flex">
          {Items?.map((item: IMenu, index) => {
            return (
              <ItemMenu
                key={index}
                item={item}
              />
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
