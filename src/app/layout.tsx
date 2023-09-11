
import './globals.css';
import './layout.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SmartSpend',
  description: 'Ecommerce',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (


    <html lang="en" >
      <body className={inter.className}>
        
        
        {/* <Suspense> */}
          <main>
            <div>{children}</div>
          </main>
        {/* </Suspense> */}
      </body>
    </html>
  )
}
