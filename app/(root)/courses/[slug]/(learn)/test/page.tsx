
export default function Test() {
  return (
    <section className="">
        <div className="flex items-center justify-between pt-16 container">
          <span className="text-3xl">1 / 20</span>
          <button className="lite transition-colors hover:text-background hover:bg-primary !pl-5 w-fit flex items-center">
            Next
            <i className="uil uil-angle-right ml-2"></i>
          </button>
        </div>
      <div className="container h-[calc(100vh-200px)] flex flex-col justify-center">
        <span className="text-4xl text-green-500 mb-10">30s</span>
        <h1 className="text-3xl max-w-5xl">Which 3 levels in OSI Model are usually implemented in the software within the operating system?</h1>
        <p className="text-muted-foreground mt-5 text-lg">Choise one or more than one </p>
        <ul className="[&>li]:my-3 mt-5">
          <li className="flex items-center gap-3">
            <input className="" type="radio" name="answer" id="answer1" />
            <label className="text-xl" htmlFor="answer1">Physical, Data Link, Network</label>
          </li>
          <li className="flex items-center gap-3">
            <input className="" type="radio" name="answer" id="answer2" />
            <label className="text-xl" htmlFor="answer2">Data Link, Network, Transport</label>
          </li>
          <li className="flex items-center gap-3">
            <input className="" type="radio" name="answer" id="answer3" />
            <label className="text-xl" htmlFor="answer3">Network, Transport, Session</label>
          </li>
        </ul>
        
      </div>
    </section>
  )
}
