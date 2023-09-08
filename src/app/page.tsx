"use client"

import Category from '@/components/Category'
import HeaderMain from '@/components/HeaderMain'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { AuthCheckerOutside } from '@/utils/checker-outside'
import { useMemo } from 'react'
import NewFooter from '@/components/footer/footer'
import Bestseller from '@/components/Bestseller'

export default function Home() {

  useMemo(() => {
    if (typeof window !== 'undefined') {
      AuthCheckerOutside(window);
    }
  }, [])

  return (
    <div>
      <HeaderMain />
      {/* <Navbar /> */}
      <Hero />
      <Bestseller />
      <Category />
      <NewFooter />
    </div>
  )
}
