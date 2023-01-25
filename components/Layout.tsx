import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from 'next/router';
import {ReactNode} from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }:LayoutProps) {
  const {pathname} = useRouter();
  const isMainPage = pathname === '/';
  const wrapperClasses = isMainPage ? 'p-[34px] grid grid-rows-main_rows' : 'p-[34px] grid';

  return (
    <div className="w-full max-w-[1440px] mx-auto h-screen">
      <div className={wrapperClasses}>
        <Navbar />
          <main className="grid grid-cols-main_cols mb-[84px]">{children}</main>
        <Footer />
      </div>
    </div>
  )
}