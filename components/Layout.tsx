import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
