import Image from "next/image";

export default function CreateCourse() {
  return (
    <section className="h-[calc(100vh-4rem)] flex items-center">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8 flex flex-col justify-center">
          <input placeholder="JavaScript Programming with React" className="text-4xl bg-background outline-none w-full h-20" type="text" />
          <textarea placeholder="Lum dolor sit amet consectetur adipisicing elit. Magni, autem! Reiciendis unde neque velit, vel exercitationem rerum vero, obcaecati incidunt, sunt sint ad libero magni et. Deleniti neque aperiam magnam" className="bg-background w-full text-lg mt-5 h-[60%] outline-none" name="" id=""></textarea>
        </div>
        <div className="col-span-4">
          <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
            <Image width={1000} height={1000} src="/imgs/learn (9).jpg" alt="" className="w-full h-full object-cover" />
          </div>
          {/* <video controls className="w-full rounded-xl" src="/videos/vid.mp4"></video> */}
        </div>
        <div className="col-span-12 flex">
          <button className="primary ml-auto">Create</button>
        </div>
      </div>
    </section>
  )
}
