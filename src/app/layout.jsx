/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://clubs-ui-docs.vercel.app/'),
  title: {
    template: '%s - Clubs UI'
  },
  description: 'Clubs UI: the headless UI library for React',
  applicationName: 'Clubs UI',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Clubs UI'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Clubs UI</b>{' '}
          <span style={{ opacity: '60%' }}>The headless UI library for React</span>
        </div>
      }
      // Next.js discord server
      chatLink="https://discord.gg/hEM84NMkRv"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer>MIT {new Date().getFullYear()} © Clubs UI.</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/Rooon-K/clubs-ui-docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
