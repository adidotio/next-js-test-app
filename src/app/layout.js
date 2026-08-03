import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Research Flow - Global Reach',
  description: 'A premium platform for global research tracking and flow management.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://nextjs-test.research-flow.in/" hrefLang="x-default" rel="alternate" />
        <link href="https://bg.nextjs-test.research-flow.in/" hrefLang="bg" rel="alternate" />
        <link href="https://nl.nextjs-test.research-flow.in/" hrefLang="nl" rel="alternate" />
        <link href="https://ka.nextjs-test.research-flow.in/" hrefLang="ka" rel="alternate" />
        <script src="https://script-cdn.multilipi.com/static/JS/page_translations.js" multilipi-key="5d5b2453-9dab-4aba-ac34-4e100d837a5e" mode="auto" data-pos-x="50" data-pos-y="50" crossOrigin="anonymous" defer></script>
      </head>
      <body>
        <nav className="navbar">
          <Link href="/" className="nav-logo gradient-text">Research Flow</Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/features" className="nav-link">Features</Link>
            <Link href="#" className="nav-btn">Get Started</Link>
          </div>
        </nav>
        
        {children}

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Research Flow. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
