import Image from "next/image"
export default function Header() {
  return (
    <header className="w-full bg-background fixed top-0 left-0 shadow-lg py-2">
      <div className="container flex justify-between items-center">

        <div className="logo">
          <Image src="/learnoo1.svg" alt="" width={130} height={46} />
        </div>
        
        <div className="relative mr-auto mx-10">
          <input className="rounded-full w-96" type="text" placeholder="What do you want to learn?" />
          <div className="absolute rounded-full aspect-square h-[calc(100%-8px)] bg-blue-100 flex items-center justify-center right-1 top-1">
            <i className="uil uil-search text-primary text-[18px]"></i>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="secondary">login</button>
          <button className="primary">sign in</button>
        </div>
      </div>
    </header>
  )
}
