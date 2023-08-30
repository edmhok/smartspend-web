"use client"

import Bestseller from '@/components/Bestseller'
import Category from '@/components/Category'
import Footer from '@/components/Footer'
import HeaderMain from '@/components/HeaderMain'
import Hero from '@/components/Hero'
import NewFavProducts from '@/components/NewFavProducts'
import { AuthCheckerOutside } from '@/utils/checker-outside'

export default function Home() {

  AuthCheckerOutside()
  return (
    <main className='place-content-center'>
      <HeaderMain />
      <Hero />
      <Bestseller />
      <Category />
      <NewFavProducts />

      <Footer />
    </main>
  )
}
