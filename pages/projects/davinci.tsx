import Image from "next/image";
import image1 from "../../public/davinci1.webp";
import image2 from "../../public/davinci2.webp";
import image3 from "../../public/davinci3.webp";
import image4 from "../../public/davinci4.webp";
import image5 from "../../public/davinci5.webp";
import image6 from "../../public/davinci6.webp";
import Link from "next/link";

const Davinci = () => {
  return (
    <div className="col-start-2 mt-[48px]">
      <div className="flex items-center gap-x-[28px] mb-[28px]">
        <Image src='/davinci.svg' alt="logo" width="48" height="48"/>
        <h1 className="font-medium text-2xl">Da Vinci – NDA</h1>
      </div>

      <div className="p-[24px] rounded-lg bg-[#fcf050] bg-opacity-[0.1] text-xl">
        A platform for analyzing users within cities and regions. It was created to study the mood of users. I have fully developed all the logic and appearance of the service
      </div>

      <Image src={image1} alt="davinci" className="mt-[42px]"/>

      <div className="my-[42px] pl-[76px]">
        <p className="text-xl">
          I was collecting information on a new platform. there are no competitors in this niche, it was necessary to collect a large amount of information from sources
        </p>
      </div>

      <Image src={image2} alt="davinci" className="mt-[42px]"/>

      <div className="my-[42px] pl-[76px]">
        <p className="text-xl">
          This helped to create a product in which the user intuitively understands how to read information
        </p>
      </div>

      <Image src={image3} alt="davinci" className="mt-[42px]"/>

      <div className="my-[42px] pl-[76px]">
        <p className="text-xl">
          I conducted interviews with users and compiled a CJM
        </p>
      </div>

      <Image src={image4} alt="davinci" className="mt-[42px]"/>

      <div className="my-[42px] pl-[76px]">
        <p className="text-xl">
          I have developed many hypotheses to create a clear table that can be used on multiple screens
        </p>
      </div>

      <Image src={image5} alt="davinci" className="mt-[42px]"/>
      <Image src={image6} alt="davinci" className="mt-[42px]"/>

      <div className="my-[42px] pl-[76px]">
        <p className="text-xl">
          Created several custom paths for internal and external specialist
        </p>
      </div>

      <Link href="#" className="block flex justify-center items-center uppercase h-[52px] text-lg font-semibold bg-[#FCF050] hover:rotate-[-4deg] transition">view in Figma</Link>

    </div>
  )
}

export default Davinci;