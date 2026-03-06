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
    <header className="sticky top-0 z-50 bg-forest-dark text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link to="/">
          <img src={logo} alt="Lone Wolf Septic and Drains" className="h-14 -my-1 md:h-32 md:-my-4" />
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

        {/* Mobile menu button */}
        <button
          className="text-white md:hidden"
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

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-white/10 bg-forest-dark px-4 py-3 md:hidden">
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
