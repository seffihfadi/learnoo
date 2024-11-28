import Header from '@/components/common/header'
import Image from 'next/image'
import Link from 'next/link'

export default function InstructorLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <Header />
      <main className="pt-16 container">
        <nav className="fixed top-0 left-0 h-screen flex items-center">
          <ul className="flex flex-col gap-2 items-center justify-center bg-background border-border border-[1px] border-l-0 px-2 py-6 rounded-tr-2xl rounded-br-2xl">
            <li>
              <Link title="dashboard" href="/inst/">
                <i className="uil uil-chart-line"></i>
              </Link>
            </li>
            <li>
              <Link title="courses" href="/inst/courses">
                <i className="uil uil-book-open"></i>
              </Link>
            </li>
            <li>
              <Link title="notifications" href="/inst/notifications">
                <i className="uil uil-bell"></i>
              </Link>
            </li>
            <li>
              <Link title="create course" href="/inst/courses/create">
                <i className="uil uil-plus-circle"></i>
              </Link>
            </li>
            <li>
              <Link title="profile" href="/inst/profile">
                <div className="rounded-full w-8 h-8 overflow-hidden mt-4">
                  <Image className='object-cover w-full h-full' src="/imgs/learn (8).jpg" alt="avatar" width={40} height={40} />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </main>
    </>
  )
}
