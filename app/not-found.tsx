import { getTranslations } from "next-intl/server"


export default async function NotFound({message}: {message?: string}) {

  const t = await getTranslations('NotFound')

  return (
    <section className="h-[100vh] -mt-20 flex justify-center items-center overflow-hidden relative col-span-12">
      {/* <Meteors number={20} /> */}
      <div>
        <h1 className='text-2xl capitalize text-center mb-3'>404 | {t('notFound')}</h1>
        <p className="text-muted-foreground max-w-lg text-lg text-center">
          {message || t('message')}
        </p>
      </div>
    </section>
  )
}