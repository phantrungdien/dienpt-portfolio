"use client"

import { Switch } from "antd"
import { useEffect, useState } from "react"
import { MoonOutlined, SunOutlined } from "@ant-design/icons"

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Switch
      checkedChildren={<SunOutlined />}
      unCheckedChildren={<MoonOutlined />}
      value={theme === "light"}
      onClick={toggleTheme}
      className="w-12 cursor-pointer"
    />
  )
}
