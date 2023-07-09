import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Metadata } from "next";
import { FC, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactFragment, ReactPortal } from "react";
import UserTag from "@/components/ui/UserTag";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Kyx AI | Help",
  description: "Information about the capabilities and commands of Kyx AI",
};
interface pageProps { }
const page: FC<pageProps> = ({ }) => {


  const commands = [
    {
      category: "Image Generation",
      commands: [
        {
          name: "/generate_image",
          description: "Generates a picture from a text prompt",
          usage: "/generate_image <text prompt>",
          params: [
            {
              name: "prompt",
              description: "The text prompt to generate a picture from",
              type: "text",
              required: true,
            },
            {
              name: "width",
              description: "The width the images should be generated at",
              type: "number",
              required: false,
            },
            {
              name: "height",
              description: "The height the images should be generated at",
              type: "number",
              required: false,
            },
            {
              name: "num_images",
              description: "The number of images to generate (max 5, default 4)",
              type: "number",
              required: false,
            },
            {
              name: "guidance_scale",
              description: "How close the image should be to your prompt. A higher value leads to less creative freedom of the bot (min 1, max 20, default 7)",
              type: "number",
              required: false,
            },
            {
              name: "prompt_magic",
              description: "Let the magic happen! This will make the generation be closer to your prompt. Requires more computation power, therefore it doubles the tokens cost (default false)",
              type: "boolean",
              required: false,
            },
            {
              name: "negative_prompt",
              description: "What the image should not contain. This can be used to avoid certain objects in the image (default empty)",
              type: "text",
              required: false,
            },
            {
              name: "model",
              description: "The model to use for generation. Each model has a different style.",
              type: "text",
              required: false,
            }
          ],
        },
      ],

    },
    {
      category: "Voice Generation",
      commands: [
        {
          name: "/speak",
          description: "Generates a voice message from a text prompt",
          usage: "/speak <text prompt>",
          params: [
            {
              name: "message",
              description: "The text prompt to generate a voice message from",
              type: 'text',
              required: true
            },
            {
              name: "voice",
              description: "The voice to use for generation. Each voice has a different style.",
              type: 'text',
              required: false
            }
          ]
        },
        {
          name: "/voices",
          description: "Lists all available voices",
          usage: "/voices",
          params: []

        },
        {
          name: "/upload_voice",
          description: "Uploads a voice to the server. This voice can then be used for voice generation.",
          usage: "/upload_voice ATTACH A MP3 FILE",
          params: [
            {
              name: "file",
              description: "The mp3 file to upload",
              type: 'file',
              required: true
            },
            {
              name: "speaker",
              description: "The name of the voice",
              type: 'text',
              required: true
            }
          ]
        },
        {
          name: "/delete_voice",
          description: "Deletes a voice that you have uploaded from the server.",
          usage: "/delete_voice <voice>",
          params: [
            {
              name: "voice",
              description: "The name of the voice",
              type: 'text',
              required: true
            }
          ]
        },
        {
          name: "/share_voice",
          description: "Shares a voice another user. This voice can then be used by that user.",
          usage: "/share_voice <voice> <user>",
          params: [
            {
              name: "voice",
              description: "The name of the voice",
              type: 'text',
              required: true
            },
            {
              name: "user",
              description: "The user to share the voice with",
              type: 'user',
              required: true
            }
          ]
        },
      ],
    },
    {
      category: "Chatting",
      commands: [
        {
          name: "/chat",
          description: "Starts a conversation with Kyx AI",
          usage: "/chat",
          params: [
            {
              name: "prompt",
              description: "The message to send to Kyx AI",
              type: 'text',
              required: true
            }
          ]
        },
      ]
    },
    {
      category: "Miscellaneous",
      commands: [
        {
          name: "/tokens",
          description: "Shows how many tokens you have left",
          usage: "/tokens",
          params: []
        },
        {
          name: "/help",
          description: "Shows a help message",
          usage: "/help",
          params: []
        },
      ]
    }
  ];


  return (
    <div className="container mx-auto mt-12" >
      <LargeHeading
        size="sm"
        className="text-black dark:text-light-gold lg:text-left"
      >
        Help
      </LargeHeading>
      <Paragraph className="text-left" >
        In this section you can find information about the capabilities and commands of Kyx AI.
        I designed Kyx AI to be as easy to use as possible. There are two ways to interact with Kyx AI:
        <ul>
          <li>1. You can just <UserTag>@Kyx Bot</UserTag> in your discord server and have a conversation with him. You can also ask him to generate a picture for you during these conversations. Kyx Bot will remember your conversation as long as you use the reply function within discord.</li>
          <li>2. You can also use the commands listed below to interact with Kyx AI.</li>
        </ul>
        Each interaction costs a certain amount of tokens. Every user starts with 1000 tokens and is able to purchase more tokens in the <Link href="/tokens" className="underline underline-offset-4 hover:dark:text-white hover:dark:bg-slate-400 hover:bg-gray-600 hover:text-blue-100">Token Shop</Link>.
      </Paragraph>
      {
        commands.map((category) => (
          <div key={category.category} className="pb-10">
            <LargeHeading
              size="xxs"
              className="text-black dark:text-light-gold lg:text-left pb-4"
            >
              {category.category}
            </LargeHeading>
            {category.commands.map((command: { name: string; description: string; usage: string; params: any[]; }) => (
              <details key={command.name} className="pl-4">
                <summary className="dark:text-white text-black">
                  <LargeHeading size="xxs" className="text-black dark:text-light-gold lg:text-left inline cursor-pointer">
                    {command.name}
                  </LargeHeading>
                </summary>
                <div className="flex flex-col pl-5">
                  <Paragraph className="text-left" >
                    <span className="font-bold">Description:</span> {command.description}
                  </Paragraph>
                  <Paragraph className="text-left" >
                    <span className="font-bold">Usage:</span> {command.usage}
                  </Paragraph>
                  {command.params.length > 0 &&

                    <><Paragraph className="text-left">
                      <span className="font-bold">Parameters:</span>
                    </Paragraph><ul className="dark:bg-slate-950 bg-grey-500 p-5 border border-black dark:border-white rounded-sm">
                        {command.params.map((param: { name: string; description: string; type: string; required: boolean; }) => (
                          <li key={param.name}>
                            <Paragraph className="text-left">
                              <span className="font-bold">{param.name}</span> - {param.description}
                            </Paragraph>
                          </li>
                        ))}
                      </ul></>
                  }
                </div>
              </details>
            ))}
          </div>
        ))
      }






    </div >

  )
};





export default page;