
export default function LectureLayout({
  children,
  chapters
}: {
  children: React.ReactNode,
  chapters: React.ReactNode
}) {
  return (
    <section>
      <div className="container grid grid-cols-12 gap-5 my-5">
        {children}
        {chapters}
      </div>
    </section>
  )
}
