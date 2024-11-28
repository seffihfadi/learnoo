import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function Forums() {
  return (
    <section>
      {/* <h1 className="text-2xl my-8">Filtering data using AND, OR and NOT logical operators Forum</h1> */}
      <Breadcrumb className="py-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Courses</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">JavaScript Programming with React, Node & MongoDB</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Filtering data using AND, OR and NOT logical operators</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="comment my-2">
        <div className="flex items-center gap-3">
          <div className="rounded-full w-9 aspect-square overflow-hidden">
            <Image className="w-full h-full object-cover" src="/imgs/learn (5).jpg" alt="" width={100} height={100} />
          </div>
          <h5 className="font-semibold">Seffih Fadi <span className="text-sm text-muted-foreground mx-2">Oct 22, 2024</span></h5>
        </div>
        <p className="max-w-3xl text-lg my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam aspernatur veniam id ratione exercitationem eligendi facere quis quos. Inventore velit, porro nemo maiores numquam aut ipsa obcaecati repellat dolor.</p>
        <div className="flex items-center gap-2">
          <button className=""><i className="uil uil-thumbs-up text-[20px]"></i></button>
          <span>15</span>
          <button className="mx-3"><i className="uil uil-thumbs-down text-[20px]"></i></button>
        </div>
        <div className="reviews pl-8 border-l-2 border-border">
          <div className="my-5">
            <div className="flex items-center gap-3">
              <div className="rounded-full w-7 aspect-square overflow-hidden">
                <Image className="w-full h-full object-cover" src="/imgs/learn (6).jpg" alt="" width={100} height={100} />
              </div>
              <h5 className="font-semibold">Mohammed Ouchene <span className="text-sm text-muted-foreground mx-2">Oct 22, 2024 at 11 AM</span></h5>
    
            </div>
            <p className="max-w-3xl my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet.</p>
            <div className="flex items-center mt-3 gap-2">
              <button><i className="uil uil-thumbs-up text-[20px]"></i></button>
              <span>15</span>
              <button className="mx-3"><i className="uil uil-thumbs-down text-[20px]"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}