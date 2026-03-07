import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '/images/logo.svg'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#1C2833] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 md:py-0">
        <Link to="/">
          <img src={logo} alt="Lone Wolf Septic and Drains" className="h-20 md:h-32 md:-my-4" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-4 py-1.5 text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-forest text-white'
                    : 'text-gray-200 hover:bg-white/10 hover:text-earth-light'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile call + menu */}
        <div className="flex items-center gap-3 md:hidden">
          <a href="tel:+18282222222" aria-label="Call us" className="text-earth">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#1C2833] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-base font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-forest text-white'
                      : 'text-gray-200 active:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
