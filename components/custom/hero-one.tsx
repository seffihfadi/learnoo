// import Link from "next/link";

import Image from "next/image";

const SectionOne = ({ rtl = false, data, showButton = true }: {rtl?: boolean, data: any, showButton?: boolean}) => {
  return (
    <section className='landing grid grid-cols-12 md:gap-10'>
      <div className={`${rtl ? 'order-2' : ''} grid grid-cols-12 gap-4 col-span-12 md:col-span-6 lg:col-span-5`}>
        <div className={`${rtl ? 'order-2' : ''} h-[380px] lg:h-[450px] col-span-7`}>
          <Image width={800} height={800}className='h-full' src={data.imgUrl1} alt="img" />
        </div>
        <div className="grid grid-flow-row col-span-5 gap-6">
          <Image width={800} height={800}className='h-[80%] w-full mt-auto' src={data.imgUrl2} alt="img" />
          <Image width={800} height={800}className='h-[80%] w-full' src={data.imgUrl3} alt="img" />
        </div>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-7 flex flex-col gap-4 mb-10 md:mb-0 justify-center'>
        <div className="title">{data.span}</div>
        <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl'>{data.title}</h2>
        <p className='text-muted-foreground text-base md:text-lg'>{data.desc}</p>
        {showButton && <button className={`${rtl ? 'primary' : 'secondary'} w-fit px-0`}>{data.btntext}</button>}
      </div>
    </section>
  );
};

export default SectionOne;
