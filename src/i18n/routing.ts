import { defineRouting } from "next-intl/routing"
import { createNavigation } from "next-intl/navigation"

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "vn"],

  // Used when no locale matches
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "as-needed",
  // pathnames: {
  //   "/home": {
  //     en: "/home",
  //     vi: "/trang-chu",
  //   },
  //   // '/categories/[...slug]': {
  //   //   en: '/categories/[...slug]',
  //   //   vi: '/kategorien/[...slug]'
  //   // }
  // },
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
