"use client"

import Bestseller from '@/components/Bestseller'
import Category from '@/components/Category'
import Footer from '@/components/Footer'
import HeaderMain from '@/components/HeaderMain'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import NewProducts from '@/components/NewProducts'
import { AuthCheckerOutside } from '@/utils/checker-outside'

export default function Home() {

  AuthCheckerOutside()
  return (
    <main className='place-content-center'>
      <HeaderMain />
      {/* <Navbar /> */}
      <Hero />
      <Bestseller />
      <Category />
      <NewProducts />

      <Footer />
    </main>
  )
}
