import NavLink from "./Navlink";
import { motion } from "framer-motion";

const Navigation = () => {
  const pages = [
    { name: "Ak Bars Bank", href: "/projects/akbars" },
    { name: "Da Vinci", href: "/projects/davinci" },
    { name: "Cyber.bet", href: "#" },
  ];

  return (
    <ul className="flex justify-between px-[65px] self-center">
      {pages.map((page) => (
        <motion.li key={page.name} whileHover={{
          transition: {
            duration: .3
          }
        }}
        whileTap={{ scale: 0.95 }}
        >
          <NavLink href={page.href}>{page.name}</NavLink>
        </motion.li>
      ))}
  </ul>
  )
}

export default Navigation;