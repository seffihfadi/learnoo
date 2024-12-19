import React from 'react'

export default function LectureNotes() {
  return (
    <>
      <button className="create_note">
        <p>Create a note at: <span className="text-muted-foreground font-semibold">0.00</span></p>
        <div className="flex items-center justify-center p-2 bg-primary w-8 h-8 rounded-full">
          <i className="uil uil-plus text-background text-[20px]"></i>
        </div>
      </button>
      <div className="notes my-10">
        <div className="my-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-full bg-primary px-2 py-.5 text-white font-semibold">
              0.00
            </div>
            <span className="text-muted-forground text-sm">2 days ago</span>
            <button className="ml-auto rtl:mr-auto"><i className="uil uil-pen text-[20px]"></i></button>
            <button><i className="uil uil-trash-alt text-[20px]"></i></button>
          </div>
          <div className="border-l-2 border-border pl-5">
            <p className="max-w-3xl text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam aspernatur veniam id ratione exercitationem eligendi facere quis quos. Inventore velit, porro nemo maiores numquam aut ipsa obcaecati repellat dolor.</p>
          </div>
        </div>
      </div>
    </>
  )
}
