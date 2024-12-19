import AuthorNav from '@/components/common/author-nav'

export default function InstructorLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    
    <main className="container">
      <AuthorNav />
      {children}
    </main>
    
  )
}
