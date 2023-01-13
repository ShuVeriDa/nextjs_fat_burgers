import {FC} from 'react';
import {SiBurgerking} from 'react-icons/si'
interface IHeaderProps {
}

export const Header: FC<IHeaderProps> = () => {
  return (
    <header>
      <div>
        <SiBurgerking />
      </div>
      <nav>
        <a href="">Домой</a>
        <a href="">О нас</a>
        <a href="">Отзывы</a>
        <a href="">Бургеры</a>
      </nav>
    </header>
  );
};