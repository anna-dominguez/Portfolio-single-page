import { Space_Grotesk } from 'next/font/google'
import { LanguageProvider } from '@/lib/LanguageContext'
import '@/styles/globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Anna Dominguez — FullStack Developer',
  description: 'Portfolio d\'Anna Dominguez, développeuse FullStack TypeScript spécialisée en React, Next.js et Node.js.',
  keywords: ['FullStack Developer', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Anna Dominguez' }],
  openGraph: {
    title: 'Anna Dominguez — FullStack Developer',
    description: 'Portfolio d\'Anna Dominguez, développeuse FullStack TypeScript spécialisée en React, Next.js et Node.js.',
    type: 'website',
    url: 'https://anna-dominguez.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={spaceGrotesk.variable}>
      <body className="bg-bg text-white font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
