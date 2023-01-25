import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from 'react'

interface IProps extends LinkProps {
  children: ReactNode
}

const NavLink = ({ href, children }: IProps) => {
  const router = useRouter();
  return (
    <Link href={href} className={`text-[#475467] text-xl relative ${
      router.pathname === href && "font-medium text-[#101828] before:bg-[#FCF050] before:block before:absolute before:-inset-1 before:-left-4 before:-right-4 before:-z-10"
    }`}>
      {children}
    </Link>
  );
};

export default NavLink;