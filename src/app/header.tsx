import {FC} from 'react';
import {SiBurgerking} from 'react-icons/si'
import Link from "next/link";
interface IHeaderProps {
}

export const Header: FC<IHeaderProps> = () => {
  return (
    <header>
      <div>
        <SiBurgerking />
      </div>
      <nav>
        <Link href="/">Домой</Link>
        <Link href="/about">О нас</Link>
        <Link href="/review">Отзывы</Link>
        <Link href="/burgers">Бургеры</Link>
      </nav>
    </header>
  );
};