import React, {FC, ReactNode} from 'react';
import {Header} from "@/app/header";
import {Footer} from "@/app/footer";

interface IMainLayoutProps {
  children: ReactNode
}

export const MainLayout: FC<IMainLayoutProps> = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};