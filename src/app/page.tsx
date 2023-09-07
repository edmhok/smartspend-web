"use client"

import Category from '@/components/Category'
import HeaderMain from '@/components/HeaderMain'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { AuthCheckerOutside } from '@/utils/checker-outside'
import { useMemo } from 'react'
import FeaturedProducts from '@/components/FeaturedProducts'
import NewFooter from '@/components/footer/footer'

export default function Home() {

  useMemo(() => {
    if (typeof window !== 'undefined') {
      AuthCheckerOutside(window);
    }
  }, [])

  return (
    <main className='place-content-center'>
      <HeaderMain />
      {/* <Navbar /> */}
      <Hero />
      <FeaturedProducts />
      <Category />
      <NewFooter />
    </main>
  )
}
