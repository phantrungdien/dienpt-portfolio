import "../globals.css"
import { AppProvider } from "@provider/AppProvider"
import { CookiesProvider } from "next-client-cookies/server"
import React from "react"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { Viewport } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@i18n/routing"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

type Locale = (typeof routing.locales)[number]

export const dynamic = "force-dynamic"
export const revalidate = 0

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 2,
  viewportFit: "cover",
  userScalable: false,
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  if (!routing.locales.includes(locale)) {
    notFound()
  }
  const messages = await getMessages()
  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <CookiesProvider>
          <AntdRegistry>
            <NextIntlClientProvider
              locale={locale}
              messages={messages}>
              <AppProvider>{children}</AppProvider>
            </NextIntlClientProvider>
          </AntdRegistry>
        </CookiesProvider>
      </body>
    </html>
  )
}
