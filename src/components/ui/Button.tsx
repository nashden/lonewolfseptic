import { type ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  to?: never
}

type ButtonLinkProps = Omit<LinkProps, 'className'> & {
  variant?: 'primary' | 'secondary'
  to: string
}

const base =
  'inline-block rounded-lg px-6 py-2.5 text-sm font-heading font-bold uppercase tracking-wide text-center transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5'

const variants = {
  primary: 'bg-forest text-white hover:bg-forest-dark',
  secondary: 'bg-earth text-white hover:brightness-110',
}

export default function Button({
  variant = 'primary',
  ...props
}: ButtonProps | ButtonLinkProps) {
  const classes = `${base} ${variants[variant]}`

  if ('to' in props && props.to) {
    const { to, children, ...rest } = props as ButtonLinkProps
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const { children, ...rest } = props as ButtonProps
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
