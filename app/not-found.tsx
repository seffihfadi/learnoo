// import { getLanguage } from "@/actions/strapi";
// import Meteors from "@/components/ui/meteors";
// import { getDictionary } from "@/lib/dict";


export default async function NotFound({message}: {message?: string}) {
  // const lang = await getLanguage()
  // const dict = getDictionary(lang)
  return (
    <section className="h-[100vh] -mt-20 flex justify-center items-center overflow-hidden relative col-span-12">
      {/* <Meteors number={20} /> */}
      <div>
        <h1 className='text-2xl capitalize text-center mb-3'>404 | Page Not Found</h1>
        <p className="text-muted-foreground max-w-lg text-lg text-center">
          {message || "it seems like you navigated to a page that doesn't exist. Please check the URL or return to the homepage."}
        </p>
      </div>
    </section>
  )
}