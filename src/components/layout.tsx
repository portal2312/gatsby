import * as React from "react";

import { Link } from "gatsby";

import useSiteMetadata from "../hooks/useSiteMetadata";
import {
  container,
  heading,
  navLinkItem,
  navLinkText,
  navLinks,
  siteTitle,
} from "./layout.module.css";

interface LayoutProps {
  pageTitle?: string | null;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const data = useSiteMetadata();
  return (
    <div className={container}>
      <header className={siteTitle}>{data.site?.siteMetadata?.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
