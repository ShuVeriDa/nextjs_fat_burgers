import {Inter} from '@next/font/google'
import Link from "next/link";
import {MainLayout} from "@/app/mainLayout";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main>
      <h1>Главная</h1>
      <Link href='/burgers'>Все бургеры</Link>
    </main>

  )
}
