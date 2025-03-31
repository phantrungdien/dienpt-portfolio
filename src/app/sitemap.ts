import { appConfig } from "@config/app"
import type { MetadataRoute } from "next"
import { routing, getPathname } from "@i18n/routing"

export const revalidate = 604800 // 1 week

export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntry("/")]
}

type Href = Parameters<typeof getPathname>[0]["href"]

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(routing.locales.map((locale) => [locale, getUrl(href, locale)])),
    },
  }
}

function getUrl(href: Href, locale: (typeof routing.locales)[number]) {
  const pathname = getPathname({ locale, href })
  return appConfig.appUrl + pathname
}
