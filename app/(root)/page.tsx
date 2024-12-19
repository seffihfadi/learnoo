import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-[calc(100vh-64px)] relative py-2 px-2">
        <div className="rounded-2xl w-full h-full overflow-hidden relative">
          {/* <Image className="object-cover h-full w-full" src={`/imgs/ler.jpg`} width={1000} height={1000} alt="" /> */}
          <div className="bg-gradient-to-t w-full h-full from-black to-transparent absolute top-0 left-0"></div>
        </div>
      </section>
    </>
  );
}
