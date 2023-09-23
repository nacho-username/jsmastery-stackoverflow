import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};
export default Layout;
