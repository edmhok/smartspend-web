import React from 'react'
import type { NextPage } from 'next'
import IntroMember from '@/components/IntroMember'
import { PatronLayout } from '@/layout'
import ProductMenu from '@/components/Patron/ProductMenu'

const Patron: NextPage = () => (
  <PatronLayout>
    <IntroMember />
    <ProductMenu />

  </PatronLayout>
)


export default Patron
