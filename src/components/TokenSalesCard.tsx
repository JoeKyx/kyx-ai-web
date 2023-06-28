"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { checkout } from "@/lib/stripe-api";

import { useSession } from "next-auth/react";

interface TokenSalesCardProps {
  title: string;
  price: number;
  priceId: string;
  features: string[];
  onClick?: () => void;

}

export default function TokenSalesCard(
  { title, price, features, priceId }: TokenSalesCardProps
) {

  const { data: session } = useSession();


  const onClick = async () => {
    await checkout({ lineItems: [{ price: priceId, quantity: 1 }] }, session?.user.id as string);

  };


  return (
    <div className="w-full flex justify-center">
      <Card className="w-full max-w-[20rem] p-8 bg-slate-700">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            {title}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-5xl font-normal"
          >
            <span className="mt-2 text-xl">only</span>{price}{" "}
            <span className="self-end text-4xl">€</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <div className="pb-2 text-white">Enough for:</div>
          <ul className="flex flex-col gap-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon strokeWidth={2} className="h-3 w-3 text-white" />
                </span>
                <Typography className="font-normal text-white">{feature}</Typography>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          {session ? (<Button
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
            onClick={onClick}
          >
            Buy Now
          </Button>) : (<Button
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}

          >
            Login to buy
          </Button>)}

        </CardFooter>
      </Card>
    </div>
  );
}