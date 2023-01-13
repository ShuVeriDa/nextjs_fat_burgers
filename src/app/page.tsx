import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from './page.module.css'
import {Header} from "@/app/header";
import {Footer} from "@/app/footer";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Главная</h1>
      <Link href={'burgers'}>Все бургеры</Link>

      <Footer />
    </main>
  )
}
