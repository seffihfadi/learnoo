import { getDataAction } from "@/actions/getActions";
import NotFound from "@/app/not-found";
import LazyImage from "@/components/custom/lazy-image";
import SearchFilters from "@/components/custom/search-filters";
import { buildQueryString } from "@/lib/func";
import { Course } from "@/types/course";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

interface DataInterface {
  count: number,
  current_page: number, 
  max_pages: number,
  courses: Course[]
}

interface Params {
  searchParams: {
    title: string;
    level: string;
    duration: string;
    rate: string;
    categories: string;

  }
}

export default async function Search({searchParams}: {searchParams: Params}) {

  const t = await getTranslations('SearchPage')
  const search = await searchParams
  const queryString = buildQueryString(search);
  // console.log('/courses?${queryString}', `/courses?${queryString}`)
  const data = await getDataAction<DataInterface>(`/courses`, `${queryString}&append_with=image,author`)
// console.log('course.author', data?.courses[0]?.image)
  if (!data) return <NotFound />

  return (
    <section className='py-5'>
      <div className="container grid grid-cols-12 gap-10">

        <div className="col-span-3">
          <div className="sticky top-20">
            <h4 className='title'>{t('filterBy')}</h4>
            <div id="no-scroll" className="overflow-y-auto h-[calc(100vh-8rem)] filters">
              <SearchFilters />
            </div>
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-12 gap-5 h-fit">
          {/* <h4 className='title'>resaults for "react"</h4> */}
          {data.courses.map((course, i) => 
            <div key={i} className="col-span-4 shadow-md rounded-lg overflow-hidden transition-transform hover:shadow-lg">
              <div className="w-full aspect-video overflow-hidden">
                <LazyImage 
                  className="w-full h-full object-cover" 
                  src={course?.image?.url || ""} 
                  alt="" 
                  width={course.image?.width || 1000} 
                  height={course.image?.height || 1000} 
                  thumbnailSrc={course?.image?.thumbnail_url || ""}
                />
              </div>
              <div className="p-4">

                <div className="flex gap-2 items-center">
                  <div className="rounded-full w-7 h-7 overflow-hidden">
                    <Image className="w-full h-full object-cover" src="/imgs/learn (5).jpg" alt="" width={100} height={100} />
                  </div>
                  <Link href={`/account/profile/${course.author?.user?.id}`} className="font-semibold text-sm">{course.author?.user?.full_name}</Link>
                </div>
                <Link href={`/courses/${course.id}`}>
                  
                  <h5 className="font-semibold mt-2">{course.title}</h5>
                  <p className="line-clamp-3 my-3 text-sm">{course.description}</p>
                  <div className="flex items-center">
                    <i className="uil uil-star text-yellow-500"></i>
                    <span className="mx-1 font-semibold">{course.rate}</span>
                    <span className="text-sm">({course.raters_count} {t('reviews')})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm capitalize font-semibold text-primary bg-blue-200 rounded-sm px-2 py-.5">{t(course.level)}</span>
                    <span className="text-sm font-semibold">{course.duration/60}{t('h')}</span>
                  </div>

                </Link>
              </div>
            </div>
          )}
          {data.courses.length === 0 && <p className="col-span-12 text-center text-lg">{t('noCourses')}</p>}
        </div>
      </div>

    </section>
  )
}
