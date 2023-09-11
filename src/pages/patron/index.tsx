import React from 'react'
import type { NextPage } from 'next'
import IntroMember from '@/components/IntroMember'
import NewProducts from '@/components/NewProducts'
import Menubar from '@/components/patron/Menubar'

const Patron: NextPage = () => (
  <>
    <Menubar />
    <IntroMember />
    <NewProducts />
  </>
)


export default Patron
