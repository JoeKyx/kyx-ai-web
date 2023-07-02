"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { FC } from "react";
import Button from "@/components/ui/Button";

interface DashboardCartProps {
  title: string;
  text: string;
  button: React.ReactNode;
  imageSrc: string;
}

const DashboardCart: FC<DashboardCartProps> = ({
  title,
  text,
  button,
  imageSrc,
}) => {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image src={imageSrc} alt="img-blur-shadow" fill sizes="w-96" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2" sizes="w-96">
          {title}
        </Typography>
        <Typography>{text}</Typography>
      </CardBody>
      <CardFooter className="pt-0">{button}</CardFooter>
    </Card>
  );
};

export default DashboardCart;
