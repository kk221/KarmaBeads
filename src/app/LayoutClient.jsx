'use client'

import Header from './Header'
import Footer from './Footer'

export default function LayoutClient({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 md:pt-32">
        {children}
      </main>
      <Footer />
    </>
  );
}
