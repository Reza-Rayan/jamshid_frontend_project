import React from "react";

// Custom Component
import Header from "./Header";
import CMenu from "./CMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-[300px] text-white px-6">{children}</main>
      <CMenu />
    </>
  );
};

export default Layout;
