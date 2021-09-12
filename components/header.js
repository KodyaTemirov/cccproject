import Link from 'next/link'
import Logo from '../public/logo-ccc.svg'

export default function Header() {
  return (
    <header className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12 h-16 px-8">
      <Link href="/">
        <a className="hover:underline">
          <img src={Logo.src} alt="Commonwealth Chamber of Commerce" />
        </a>
      </Link>
    </header>

  )
}
