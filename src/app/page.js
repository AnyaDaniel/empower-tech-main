import ChooseUs from "@/components/home/ChooseUs";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Story from "@/components/home/Story";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Story/>
    <ChooseUs/>
    <Services/>
   </>
   
  );
}
