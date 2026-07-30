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
        <link href="https://nextjs-test.research-flow.in/" hreflang="x-default" rel="alternate">
        <link href="https://gu.nextjs-test.research-flow.in/" hreflang="gu" rel="alternate">
        <link href="https://cs.nextjs-test.research-flow.in/" hreflang="cs" rel="alternate">
        <link href="https://kn.nextjs-test.research-flow.in/" hreflang="kn" rel="alternate">
        <script src="https://script-cdn.multilipi.com/static/JS/page_translations.js" multilipi-key="337f8db8-19f4-44e3-a6a3-ab3c76dcd060" mode="auto" data-pos-x="50" data-pos-y="50" crossorigin="anonymous" defer></script>
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
