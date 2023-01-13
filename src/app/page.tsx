import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from './page.module.css'
import {Header} from "@/app/header";
import {Footer} from "@/app/footer";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Главная</h1>
      <Footer />
    </main>
  )
}
