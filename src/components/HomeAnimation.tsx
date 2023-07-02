"use client"
import { FC, useEffect, useState } from 'react'
import Paragraph from './ui/Paragraph';
import TypeWriter from 'typewriter-effect'
import { set } from 'lodash';
import Image from 'next/image';
import { ScrollDownButton } from './ui/ScrollDownButton';
import ScrollButton from './ui/ScrollButton';
import { buttonVariants } from './ui/Button';
import Button from './ui/Button';

interface HomeAnimationProps {

}

const HomeAnimation: FC<HomeAnimationProps> = ({ }) => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);


  const variants = [{
    prompt: '/generate_image dennis rodman, manga hero',
    responseImages: ["https://cdn.leonardo.ai/users/419f24e8-a4fe-4906-8b3c-6bdd40eaac2e/generations/d606a440-ed9a-401d-843e-95d4dc6f7617/Leonardo_Creative_dennis_rodman_manga_hero_black_and_white_jap_3.jpg",
      "https://cdn.leonardo.ai/users/419f24e8-a4fe-4906-8b3c-6bdd40eaac2e/generations/d606a440-ed9a-401d-843e-95d4dc6f7617/Leonardo_Creative_dennis_rodman_manga_hero_black_and_white_jap_2.jpg",
      "https://cdn.leonardo.ai/users/419f24e8-a4fe-4906-8b3c-6bdd40eaac2e/generations/d606a440-ed9a-401d-843e-95d4dc6f7617/Leonardo_Creative_dennis_rodman_manga_hero_black_and_white_jap_1.jpg",
      "https://cdn.leonardo.ai/users/419f24e8-a4fe-4906-8b3c-6bdd40eaac2e/generations/d606a440-ed9a-401d-843e-95d4dc6f7617/Leonardo_Creative_dennis_rodman_manga_hero_black_and_white_jap_0.jpg"
    ],
    username: '23n33',
    avatar: 'bulls_fan.jpeg'
  },
  {
    prompt: '/generate_image dinosaur princess, realistic',
    responseImages: ["https://cdn.leonardo.ai/users/419f24e8-a4fe-4906-8b3c-6bdd40eaac2e/generations/5bf091f8-ce5a-4022-9bea-d6b6883eb7b9/Leonardo_Creative_dinosaur_princess_realistic_3.jpg",
      "https://cdn.leonardo.ai/users/419f24e8-a4fe-4906-8b3c-6bdd40eaac2e/generations/5bf091f8-ce5a-4022-9bea-d6b6883eb7b9/Leonardo_Creative_dinosaur_princess_realistic_0.jpg",
      "https://cdn.leonardo.ai/users/419f24e8-a4fe-4906-8b3c-6bdd40eaac2e/generations/5bf091f8-ce5a-4022-9bea-d6b6883eb7b9/Leonardo_Creative_dinosaur_princess_realistic_1.jpg",
      "https://cdn.leonardo.ai/users/419f24e8-a4fe-4906-8b3c-6bdd40eaac2e/generations/5bf091f8-ce5a-4022-9bea-d6b6883eb7b9/Leonardo_Creative_dinosaur_princess_realistic_2.jpg"],
    avatar: 'dinosaur_fan.jpeg',
    username: 'PteroPwns'
  }
  ]
  const waitMessage = () => (<div className="text-lg text-gray-600 dark:text-gray-200">
    Generating images...
  </div>)

  // Choose a random number between 0 and length of variants
  const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * variants.length));

  const imageWidth = 200;
  const imageHeight = 200;

  const [partOneFinished, setPartOneFinished] = useState(false);
  const [partTwoFinished, setPartTwoFinished] = useState(false);

  const [cursorOne, setCursorOne] = useState("|");


  const imageResponse = () => (<div>
    <div className="text-lg text-gray-600 dark:text-gray-200">Here are your generated images:</div>
    <div className='flex flex-col sm:flex-row gap-4'>
      <Image src={variants[randomIndex].responseImages[0]} width={imageWidth} height={imageHeight} alt="Generated Images" />
      <Image src={variants[randomIndex].responseImages[1]} width={imageWidth} height={imageHeight} alt="Generated Images" />
      <Image src={variants[randomIndex].responseImages[2]} width={imageWidth} height={imageHeight} alt="Generated Images" />
      <Image src={variants[randomIndex].responseImages[3]} width={imageWidth} height={imageHeight} alt="Generated Images" />
    </div>
  </div>)



  const AvatarElement: FC<{ src: string, alt: string }> = ({ src, alt }) => {
    return (
      <div className='relative inline-block items-center h-12 w-12 sm:h-16 sm:w-16 rounded-full overflow-hidden me-8 border-2 dark:border-light-gold border-black hover:animate-bounce'>
        <Image quality={100}
          fill
          style={{ objectFit: "cover" }} alt={alt} src={src} />
      </div>
    )
  }



  const cursorVisibleClass = "text-gray-600 dark:text-gray-200";
  const cursorInvisibleClass = "text-transparent";

  const [cursorOneClass, setCursorOneClass] = useState(cursorVisibleClass);


  const [message, setMessage] = useState<JSX.Element>(waitMessage);
  const [showAIResponse, setShowAIResponse] = useState(false);



  const scrollToSectionTwo = () => {

    const targetElement = document.getElementById('section-2')
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const addToServer = async () => {
    window.open("https://discord.com/api/oauth2/authorize?client_id=1109484717981573131&permissions=397287746624&scope=bot", "_blank");
  }
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <div>
      <div className="flex  space-y-4 sm:space-x-4 sm:space-y-0">

        <AvatarElement src={'/avatar/' + variants[randomIndex].avatar} alt='Avatar' />

        <div>
          <div className="text-lg font-medium text-black dark:text-white">
            {variants[randomIndex].username}:
          </div>
          <div className="text-lg text-gray-600 dark:text-gray-200">
            <TypeWriter onInit={(typewriter) => {
              typewriter.typeString(variants[randomIndex].prompt)
                .callFunction(() => {
                  // wait for 2 seconds
                  const cursor = document.querySelector(".Typewriter__cursor");
                  if (cursor) {
                    cursor.remove();
                  }
                  setTimeout(() => {
                    setShowAIResponse(true);
                    setTimeout(() => {
                      setMessage(imageResponse());
                      setTimeout(() => {
                        setPartOneFinished(true);
                      }, 2000);
                    }
                      , 2000);
                  }, 2000);
                })
                .start();
            }} />
          </div>
        </div>

      </div>

      {showAIResponse && (
        <div className="flex space-y-4 sm:space-x-4 sm:space-y-0 mt-3">

          <AvatarElement src='/kyxAi.jpeg' alt='Avatar' />

          <div>
            <div className="text-lg font-medium text-black dark:text-white">
              Kyx AI:
            </div>
            {message}
          </div>

        </div>
      )}
      {partOneFinished && (
        <div className="flex  space-y-4 sm:space-x-4 sm:space-y-0 mt-3">
          <AvatarElement src={'/avatar/' + variants[randomIndex].avatar} alt='Avatar' />
          <div>
            <div className="text-lg font-medium text-black dark:text-white">
              {variants[randomIndex].username}:
            </div>
            <div className="text-lg text-gray-600 dark:text-gray-200">
              <TypeWriter
                options={{
                  delay: 50,

                }}
                onInit={(typewriter) => {
                  typewriter.typeString("Wow these are great! Here are some links for anyone interested: ").callFunction(() => {
                    const cursor = document.querySelector(".Typewriter__cursor");
                    if (cursor) {
                      cursor.remove();
                    }
                    setTimeout(() => {
                      setPartTwoFinished(true);
                    }, 1000)
                  }).stop()
                    .start();

                }} />
              {partTwoFinished && (
                <div className='flex  gap-2'>
                  <Button variant='premium' onClick={scrollToSectionTwo}>Learn More!</Button>
                  <Button variant='premium' onClick={addToServer}>Add to my server!</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>)
}

export default HomeAnimation