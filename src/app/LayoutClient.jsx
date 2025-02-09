'use client'

import Header from './Header';
import Footer from './Footer';

export default function LayoutClient({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
