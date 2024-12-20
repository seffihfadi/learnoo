import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ChapterAddLecture() {
  return (
    <section className="flex">
      <div className="max-w-3xl w-full mx-auto">
        <Tabs defaultValue="video" className="w-full my-8">
          <TabsList>
            <TabsTrigger value="video">Video Lecture</TabsTrigger>
            <TabsTrigger value="doc">Doc Lecture</TabsTrigger>
          </TabsList>
          <TabsContent value="video">
            <div className="flex items-center gap-3 my-5">
              <i className="uil uil-airplay text-[30px]"></i>
              <input className="text-2xl bg-background outline-none w-full placeholder:text-muted-foreground" placeholder="Introduction to Next Js 15" type="text" />
              <p className="text-2xl font-semibold ml-auto">#5</p>
            </div>
            <div className="w-full aspect-video border-2 border-border border-dashed rounded-2xl flex justify-center items-center text-lg text-muted-foreground">
              Drag and drop video here
            </div>
          </TabsContent>
          <TabsContent value="doc">
            <div className="flex items-center gap-3 my-5">
              <i className="uil uil-file-info-alt text-[30px]"></i>
              <input className="text-2xl bg-background outline-none w-full placeholder:text-muted-foreground" placeholder="Java Data Types" type="text" />
              <p className="text-2xl font-semibold ml-auto">#6</p>
            </div>
            <div className="w-full aspect-video border-2 border-border border-dashed rounded-2xl flex justify-center items-center text-lg text-muted-foreground">
              Reach Text
            </div>
          </TabsContent>
        </Tabs>
        
      </div>

    </section>
  )
}
