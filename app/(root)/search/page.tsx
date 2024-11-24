import SearchFilters from "@/components/custom/search-filters";
import Image from "next/image";
import Link from "next/link";

export default function Search() {
  return (
    <section className='py-5'>
      <div className="container grid grid-cols-12 gap-10">

        <div className="col-span-3">
          <div className="sticky top-20">
            <h4 className='title'>filter by</h4>
            <div id="no-scroll" className="overflow-y-auto h-[calc(100vh-8rem)] filters">
              <SearchFilters />
            </div>
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-12 gap-6">
          <h4 className='title col-span-12'>resaults for "react"</h4>
          {Array.from({length: 10}).map((_, i) => 
            <div key={i} className="col-span-4 shadow-md rounded-lg overflow-hidden hover:scale-[1.02] transition-transform hover:shadow-lg">
              <div className="w-full aspect-video overflow-hidden">
                <Image className="w-full h-full object-cover" src="/imgs/learn (8).jpg" alt="" width={500} height={500} />
              </div>
              <div className="p-4">

                <Link href="/courses/145">
                  
                  <div className="flex gap-2 items-center">
                    <div className="rounded-full w-7 h-7 overflow-hidden">
                      <Image className="w-full h-full object-cover" src="/imgs/learn (5).jpg" alt="" width={100} height={100} />
                    </div>
                    <p className="font-semibold text-sm">Seffih Fadi</p>
                  </div>
                  <h5 className="font-semibold mt-2">JavaScript Programming with React, Node & MongoDB</h5>
                  <p className="line-clamp-3 my-3 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error reiciendis aliquam nobis corrupti, veniam distinctio doloribus nihil sint eos non inventore consequatur deserunt atque aspernatur eaque qui asperiores mollitia. Error.</p>
                  <div className="flex items-center">
                    <i className="uil uil-star text-yellow-500"></i>
                    <span className="mx-1 font-semibold">4.5</span>
                    <span className="text-sm">(12k reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm capitalize font-semibold text-primary bg-blue-200 rounded-sm px-2 py-.5">beginner</span>
                    <span className="text-sm font-semibold">36h</span>
                  </div>

                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

    </section>
  )
}
