import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {

  const FooterRows = [
    { title: 'Quick Links', links: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Token Management', url: '/tokens' }, { title: 'Available commands', url: '/help' }] },
    { title: 'Community', links: [{ title: 'Discord', url: 'https://discord.gg/u62nyTYF3d' }] },
    {
      title: 'About Joe Kyx', links: [{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/joe-hoffmann-82a232213/' }, { title: 'Twitter', url: 'https://twitter.com/joekyx' }, { title: 'Contact me', url: '/contact' }]
    },
  ]

  return (
    <footer className="relative" >
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-center text-center pb-10">
        <div className="container px-6 mx-auto flex flex-wrap text-center lg:text-left">

          {FooterRows.map((row, index) => {
            return (
              <div className="w-full px-4 lg:w-1/3 sm:w-1/3" key={index}>
                <h5 className="text-xl font-semibold dark:text-light-gold text-gray-900">{row.title}</h5>
                <ul className="mt-4">
                  {row.links.map((link, index) => {
                    return (
                      <li key={index}><Link href={link.url} className="dark:text-light-gold-2 text-gray-800">{link.title}</Link></li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </footer >
  )
}

export default Footer;
