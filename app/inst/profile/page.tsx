import { getDataAction } from "@/actions/getActions";
import NotFound from "@/app/not-found";
import RaitingDisplay from "@/components/common/raiting-display";
import { Author } from "@/types/user";
import Image from "next/image";
import Link from "next/link";

export default async function Profile() {

  const author = await getDataAction<Author>("/users/profiles/authors/profile", "append_with=accomplishments,user,courses");
  console.log('author', author)

  if (!author) return <NotFound />;

  return (
    <section>
      <div className="bg-muted rounded-br-3xl rounded-bl-3xl w-full px-20 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl">Account</h1>
          <button className="lite transition-colors hover:text-muted hover:bg-primary !pl-5 w-fit flex items-center">
            Logout
            <i className="uil uil-sign-out-alt text-[18px] ml-2"></i>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full w-40 aspect-square overflow-hidden">
            <Image className="w-full h-full object-cover" src="/imgs/learn (6).jpg" alt="" width={500} height={500} />
          </div>
          <div className="flex flex-col mx-5">
            <h2 className="text-3xl capitalize">{author.user?.full_name}</h2>
            {author.courses && <p className="text-lg text-muted-foreground">{author.courses?.length} Courses</p>}
            <p className="text-lg text-green-600">{author.balance}DZD</p>

          </div>
          <div className="flex gap-2 items-center ml-auto">
            <span className="text-4xl">3.5</span>
            <div className="flex flex-col items-center">
              <RaitingDisplay rate={3.5} />
              <Link href="/inst/courses/145/reviews" className="text-muted-foreground hover:text-primary">(123 reviews)</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-10 my-10">
        <div className="col-span-8">
          <div className="mb-16">
            <h2 className="text-3xl">Biography</h2>
            <div className="mt-4 text-lg">
              <p>
                Zakaria Saoual is a passionate educator with over 10 years of experience in the field of web development. He has a deep understanding of modern web technologies and enjoys sharing his knowledge with others.
              </p>
              <p className="mt-2">
                Throughout his career, Zakaria has worked on numerous projects, ranging from small business websites to large-scale web applications. He is proficient in a variety of programming languages and frameworks, including JavaScript, TypeScript, React, and Next.js.
              </p>
              <p className="mt-2">
                In addition to his technical skills, Zakaria is also an excellent communicator and mentor. He has a talent for breaking down complex concepts into easy-to-understand lessons, making him a favorite among students.
              </p>
              <p className="mt-2">
                When he's not coding or teaching, Zakaria enjoys spending time with his family, exploring new technologies, and contributing to open-source projects.
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl">Certificates</h2>
            <div className="grid grid-cols-12 mt-5 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="col-span-4 aspect-square bg-gradient-to-tl to-transparent from-muted rounded-xl overflow-hidden">
                <Image className="object-contain h-full w-full hover:scale-105 transition-all" src={`/imgs/learn (${i+4}).jpg`} width={1000} height={1000} alt="" />
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
