import React, { PropsWithChildren } from "react";
import Navbar from './navbar.jsx'
import Radioblock from './radioblock.jsx'
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar/>
      <Radioblock/>
      {children}
    </>
  );
};
export default Layout;