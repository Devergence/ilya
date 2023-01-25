import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import Navigation from "./Navigation";
import { motion, useAnimation } from "framer-motion";

export default function Navbar() {
  const {pathname} = useRouter();
  const isMainPage = pathname === '/';

  const variants2 = {
    hover: {
      display: "block",
      rotate: [0, -10],
      scale: 1.2,
      originY: 0
    },
    initial: {
      display: "none",
      rotate: 0
    }
  };
  const controls = useAnimation();
  function handleMouseEnterControls() {
    controls.start("hover");
  }

  function handleMouseLeaveControls() {
    controls.start("initial");
  }
  return (
    <div className="grid grid-cols-main_cols">
      <motion.div
        className="inline-block"
        animate={controls}
        onMouseEnter={handleMouseEnterControls}
        onMouseLeave={handleMouseLeaveControls}
      >
        <Link href="/" className="font-normal text-2xl nav-hover">Ilya Danilov</Link>
        <motion.div variants={variants2} className="hidden">
          <Image src='/auth.png' width="160" height="162" alt="author" />
        </motion.div>
      </motion.div>
      {
        !isMainPage && <Navigation/>
      }
      <Link href="https://t.me/ildanilovv" target='_blank' rel='noreferrer noopener' className="text-2xl col-start-3 inline-block ml-auto nav-hover">Telegram</Link>
    </div>
  )
}