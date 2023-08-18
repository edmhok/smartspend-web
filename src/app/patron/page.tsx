
import React from 'react'
import type { NextPage } from 'next'
import { PatronLayout } from '@/layout/patron'
import IntroMember from '@/components/IntroMember'
import NewProducts from '@/components/NewProducts'

const Patron: NextPage = () => (
  <PatronLayout>
    <IntroMember />
    <NewProducts />

  </PatronLayout>
)


export default Patron
