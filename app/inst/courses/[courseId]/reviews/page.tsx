import RaitingDisplay from "@/components/common/raiting-display";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function CourseReviews() {
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

      <div className="comments">
        <div className="comment my-2">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-9 aspect-square overflow-hidden">
              <Image className="w-full h-full object-cover" src="/imgs/learn (6).jpg" alt="" width={100} height={100} />
            </div>
            <h5 className="font-semibold">Mohammed Ouchene</h5>
          </div>
          <div className="flex items-center my-1 gap-2">
            <RaitingDisplay rate={1} />
            <span className="text-muted-forground text-sm">2 days ago</span>
          </div>
          <p className="max-w-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam aspernatur veniam id ratione exercitationem eligendi facere quis quos. Inventore velit, porro nemo maiores numquam aut ipsa obcaecati repellat dolor.</p>
          
          <div className="reviews pl-8 border-l-2 border-border">
            <div className="my-5">
              <div className="flex items-center gap-3">
                <div className="rounded-full w-7 aspect-square overflow-hidden">
                  <Image className="w-full h-full object-cover" src="/imgs/learn (5).jpg" alt="" width={100} height={100} />
                </div>
                <h5 className="font-semibold">Seffih Fadi <span className="text-muted-forground text-sm mx-2 text-muted-foreground">2 days ago</span></h5>
              </div>
              <p className="max-w-3xl mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam aspernatur veniam id ratione exercitationem eligendi facere quis quos. Inventore velit, porro nemo maiores numquam aut ipsa obcaecati repellat dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
          

  )
}
