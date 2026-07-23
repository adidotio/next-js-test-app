import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Research Flow - Global Reach',
  description: 'A premium platform for global research tracking and flow management.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
