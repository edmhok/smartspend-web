import React from 'react'
import type { NextPage } from 'next'
import IntroMember from '@/components/IntroMember'
import Menubar from '@/components/Patron/Menubar'
import PProduct from '@/components/Patron/PProduct'

const Patron: NextPage = () => (
  <>
    <Menubar />
    <IntroMember />
    <PProduct />

  </>
)

export default Patron
