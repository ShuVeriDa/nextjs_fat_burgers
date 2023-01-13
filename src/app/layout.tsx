import './globals.css'
import {Header} from "@/app/header";
import {Footer} from "@/app/footer";
import {MainLayout} from "@/app/mainLayout";

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head/>
    <body>
    <Header />
      <div>{children}</div>
    <Footer />
    </body>
    </html>
  )
}
