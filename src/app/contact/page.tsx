import LargeHeading from '@/components/ui/LargeHeading'
import SocialIcon from '@/components/ui/SocialIcon'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <div className='container max-w-7xl mx-auto w-full pt-10 flex'>
      <div className='md:w-2/6 m-4'>
        <LargeHeading size='default' className='three-d text-black dark:text-light-gold text-left'>
          Contact Me
        </LargeHeading>
        <div className='mt-4'>
          <p className='text-black dark:text-slate-200'>
            Joe Hoffmann <br />
            Rosental 1<br />
            38114 Braunschweig<br />
            Germany<br />
          </p>
          <p className='text-black dark:text-slate-200 mt-5'>
            If you have any questions, concerns, or other inquiries, please contact me at <a href='mailto:joe64gg@gmail.com' className='text-blue-500 dark:text-blue-400'>joe64gg@gmail.com</a>.
          </p>
        </div>

        <div className='flex flex-row gap-5 mt-4 justify-end'>

          <SocialIcon variant='github' link='https://github.com/JoeKyx' />
          <SocialIcon variant='twitter' link='https://twitter.com/JoeKyx' />
          <SocialIcon variant='discord' link='https://discord.gg/C9VAtQDBVR' />
          <SocialIcon variant='linkedIn' link='https://www.linkedin.com/in/joe-hoffmann-82a232213/' />

        </div>



      </div>
    </div>
  )
}

export default page