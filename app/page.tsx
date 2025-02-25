
import Navbar from "@/components/global/Navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { clients, products } from "@/lib/constant";
import { HeroParallax } from "@/components/global/hero-parallaz";
import { LampComponent } from "@/components/global/lamp";
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { CheckIcon } from "lucide-react";


export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <section className=" w-full bg-neutral-900 rounded-md overflow-hidden  relative flex flex-col items-center  antialiased px-4 md:px-0">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 " ></div>
        <div className="md:flex md:flex-col mt-[-100px] md:mt-[-50px]  ">
          <ContainerScroll 
          titleComponent={
            <div className="md:flex md:items-center md:justify-center md:flex-col">
              <Button size={'lg'} className="p-8 mb-6 md:mb-0 text-2xl  sm:w-fit border-t-2 rounded-full
              border-[#4d4d4d] bg-[#1f1f1f] hover:bg-white transition-all fle items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500  ">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                  Start for free today
                </span>
              </Button>

              <h1 className="text-3xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold md:mb-10">Automate Your Work with Fuzzie</h1>
              
            </div>
          }/>

      
        </div>
      </section>
      <InfiniteMovingCards
            className="md:mt-[10rem] mt-[-50px]"
            items={clients}
            direction="right"
            speed="slow"
          />

      <section className="mt-[-100px]">
        <HeroParallax products={products}/>
      </section>

      <section className="mt-[100px] mx-4">
          <LampComponent/>
          <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
                > Hobby 
                  <h2 className="text-6xl">$0</h2>
                </CardItem>
                <CardItem translateZ="60"
                className="text-neutral-500 text-sm max-w-smmt-2 dark:text-neutral-300"
                >
                  Geta a glimpse of ehat our software is capable of. Just a heads up {"you'll"} never leave us after this!
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon/> 3 Free automations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon/> 100 tasks per months
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon/> Two-step Actions
                    </li>

                  </ul>
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                  <CardItem translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  > Try now →  </CardItem>
                  <CardItem translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  > Get Started Now </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
                > pro Plan 
                  <h2 className="text-6xl">$19</h2>
                </CardItem>
                <CardItem translateZ="60"
                className="text-neutral-500 text-sm max-w-smmt-2 dark:text-neutral-300"
                >
                  Geta a glimpse of ehat our software is capable of. Just a heads up {"you'll"} never leave us after this!
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon/> 3 Free automations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon/> 100 tasks per months
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon/> Two-step Actions
                    </li>

                  </ul>
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                  <CardItem translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  > Try now →  </CardItem>
                  <CardItem translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  > Get Started Now </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
                > master Plan 
                  <h2 className="text-6xl">$69</h2>
                </CardItem>
                <CardItem translateZ="60"
                className="text-neutral-500 text-sm max-w-smmt-2 dark:text-neutral-300"
                >
                  Geta a glimpse of ehat our software is capable of. Just a heads up {"you'll"} never leave us after this!
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon/> 3 Free automations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon/> 100 tasks per months
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon/> Two-step Actions
                    </li>

                  </ul>
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                  <CardItem translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  > Try now →  </CardItem>
                  <CardItem translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  > Get Started Now </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
      </section>
          
    </main>
  );
}
