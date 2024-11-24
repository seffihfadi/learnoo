import Image from "next/image";
import Link from "next/link";

export default function Learning() {
  return (
    <>
      <h2 className="text-2xl">My Progress</h2>
      <div className="grid grid-cols-12 my-10">
        <div className="col-span-3 shadow-md rounded-lg overflow-hidden">
            <div className="w-full aspect-video overflow-hidden">
              <Image className="w-full h-full object-cover" src="/imgs/learn (8).jpg" alt="" width={500} height={500} />
            </div>
            <div className="p-4">
              <Link href="/courses/145/lecture/12">
                
                <div className="flex gap-2 items-center">
                  <div className="rounded-full w-7 h-7 overflow-hidden flex-shrink-0">
                    <Image className="w-full h-full object-cover" src="/imgs/learn (5).jpg" alt="" width={100} height={100} />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-semibold text-sm">Seffih Fadi</p>
                    <div className="flex items-center">
                      <i className="uil uil-star text-yellow-500 text-[18px]"></i>
                      <span className="mx-1 font-semibold text-sm">4.5</span>
                    </div>
                  </div>
                </div>
                <h5 className="font-semibold my-3">JavaScript Programming with React, Node & MongoDB</h5>
                {/* <p className="line-clamp-3 my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error reiciendis aliquam nobis corrupti, veniam distinctio doloribus nihil sint eos non inventore consequatur deserunt atque aspernatur eaque qui asperiores mollitia. Error.</p> */}
                <div className="flex items-center justify-between">
                  <span className="text-sm capitalize font-semibold text-green-500 bg-green-100 rounded-sm px-2 py-1">completed</span>
                  <span className="text-sm font-semibold">88%</span>
                </div>
              </Link>
            </div>
          </div>
      </div>
    </>
  )
}
