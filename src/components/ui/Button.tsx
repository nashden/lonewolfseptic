import { Link } from 'react-router'

type ButtonProps = {
  children: React.ReactNode
  to?: string
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  to,
  variant = 'primary',
  type = 'button',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'inline-block rounded-lg px-6 py-2.5 font-heading text-sm font-bold uppercase tracking-wide shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110'

  const variants = {
    primary: 'bg-forest text-white',
    secondary: 'bg-earth text-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
