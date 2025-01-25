import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";


const HeroSection = async () => {
  const t = await getTranslations("Landing");
  return (
    <>
      <section id="hero" className="min-h-screen mb-20">
        <div className="h-[calc(100vh-24px)] -mt-12 w-[calc(100%-24px)] rtl:mr-3 ltr:ml-3">
          <Image className="w-full h-full object-cover rounded-2xl" src="/imgs/yo (4).jpg" alt="/" width={1000} height={1000} />
        </div>
        <div className="absolute bottom-14 px-14 left-0 w-full text-white">
          <h1 className="text-5xl capitalize max-w-xl">
            {t("title")}
          </h1>
          <p className="my-6 max-w-xl text-xl text-muted-foreground">{t("subtitle")}</p>
          <Link href="/" className="rounded-lg bg-primary ml-auto text-white font-semibold w-fit px-8 py-3">{t("discover")}</Link>
        </div>
        {/* <AdvancedSearch/> */}
      </section>
    </>
  );
};

export default HeroSection;
