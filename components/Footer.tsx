import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between items-end">
      <Link href="mailto:design@ildanilovv.com" target='_blank' rel='noreferrer noopener' className="text-2xl nav-hover">design@ildanilovv.com</Link>
      <Link href="https://instagram.com/ildanilovv" target='_blank' rel='noreferrer noopener' className="text-2xl nav-hover">Instagram</Link>
    </div>
  )
}