import Image from "next/image";
import Link from "next/link";

export default function Notifications() {
  return (
    <>
      <h2 className="text-2xl">Notifications</h2>
      <div className="grid grid-cols-12 my-10">
        <div className="col-span-8">
          <div className="w-full p-3">
            <div className="flex items-start gap-3">
              <div className="rounded-full w-11 aspect-square overflow-hidden flex-shrink-0">
                <Image className="w-full h-full object-cover" src="/imgs/learn (6).jpg" alt="" width={500} height={500} />
              </div>
              <div className="">
                <Link className="flex flex-col" href="/courses/12/lecture/2">
                  <p>
                    <span className="font-semibold capitalize">mohammed ouchene</span>&nbsp;
                    reply to your question in&nbsp;
                    <span className="text-muted-foreground font-semibold">"JavaScript course"</span>&nbsp;
                    forum.
                  </p>
                  <p className="text-sm text-muted-foreground">2h ago</p>
                </Link>
                <div className="border-l-2 border-border pl-3 my-3 py-2">

                  <p className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, autem! Reiciendis unde neque velit, vel exercitationem rerum vero, obcaecati incidunt, sunt sint ad libero magni et. Deleniti neque aperiam magnam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
