import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white">
              <span className="text-earth-light">Lone Wolf</span> Septic
            </h3>
            <p className="mt-2 text-sm">
              Professional septic services you can count on. Locally owned and operated.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/" className="hover:text-earth-light">Home</Link></li>
              <li><Link to="/about" className="hover:text-earth-light">About</Link></li>
              <li><Link to="/services" className="hover:text-earth-light">Services</Link></li>
              <li><Link to="/contact" className="hover:text-earth-light">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white">Contact Us</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@lonewolfseptic.com</li>
              <li>Hours: Mon–Sat 7AM–6PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-forest pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Lone Wolf Septic. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
