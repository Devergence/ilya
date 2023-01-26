import Link from "next/link";

const Main = () => {
  return (
    <div className="col-start-2 self-center">
      <h2 className="font-medium text-4xl">Hello</h2>

      <p className="max-w-[523px] font-medium text-3xl mt-6">
        I am a product designer<br/> <Link className="underline" href="https://www.linkedin.com/in/ildanilovv/" target="_blank"><span className="underline-hover link-hover">for five years↗</span></Link>. I work with mobile and web services. Based in Bali
      </p>

      <p className="max-w-[523px] font-medium text-3xl mt-6">
        I used to work at <Link href="/projects/akbars">
        <span className="underline-hover link-hover">Ak&nbsp;Bars&nbsp;Bank</span>
      </Link>,
        <Link href="/projects/davinci">
          <span className="underline-hover link-hover">Da&nbsp;Vinci</span>
        </Link>, <Link href="#"><span className="underline-hover link-hover hover:text-transparent hover:before:text-[#101828] before:content-['soon'] hover:before:skew-y-0 before:text-center before:text-transparent">Cyber.bet</span></Link> and currently I work at Cryptopay
      </p>

    </div>
  )
}

export default Main;