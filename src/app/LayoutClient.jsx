'use client'

import Header from './Header'
import Footer from './Footer'

export default function LayoutClient({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
