import React from 'react'
import type { NextPage } from 'next'
import IntroMember from '@/components/IntroMember'
import Menubar from '@/components/Patron/Menubar'
import PProduct from '@/components/Patron/PProduct'
import Category from '@/components/category/Category'

const Patron: NextPage = () => (
  <>
    <Menubar />
    <IntroMember />
    <Category />
    <PProduct />

  </>
)

export default Patron
