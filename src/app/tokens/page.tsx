import TokenText from '@/components/TokenText'
import Paragraph from '@/components/ui/Paragraph'
import { FC } from 'react'
import Icons from "@/components/Icons";
import TokenSalesCard from '@/components/TokenSalesCard';
import TokenOffers, { TokenOffer } from '../statics/TokenOffers';
import { map } from 'lodash';

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
  const tokenOffers = TokenOffers;
  return (
    <div className='flex flex-col lg:flex-row justify-between min-h-screen items-center p-5 pt-28 lg:pt-5'>
      {/* Left Section */}
      <div className="lg:w-2/6 w-full flex flex-col justify-center items-start mb-4 lg:mb-0">
        <div className="text-2xl md:text-4xl text-slate-700 dark:text-slate-300 inline-flex items-center leading-tight tracking-tighter">
          You currently have
        </div>
        <div className='text-4xl lg:text-6xl text-black dark:text-light-gold inline-flex items-center font-extrabold leading-tight tracking-tighter'>
          <TokenText />
          <Icons.Gem className='ml-2 h-6 md:h-8 w-6 md:w-8 text-light-gold' />
        </div>
        <div className="text-lg text-slate-700 dark:text-slate-300">To top up your tokens check out our awesome offers! It is as easy as that. Just choose your preferred package, pay, and within 2 minutes you are back in action!</div>
      </div>

      {/* Right Section */}
      <div className="lg:w-4/6 w-full flex flex-col items-center lg:grid lg:grid-cols-3 lg:items-stretch gap-4">
        {tokenOffers.map((offer: TokenOffer, i) => (
          <div className="w-full lg:w-auto" key={offer.title}>
            <TokenSalesCard key={i} title={offer.title} price={offer.price} features={offer.features} />
          </div>
        ))}
      </div>
    </div>)
}

export default page
