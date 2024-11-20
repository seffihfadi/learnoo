import Header from '@/components/common/header'

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <Header />
      <main className="pt-16">
        {children}
      </main>
    </>
  )
}
