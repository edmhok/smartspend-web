import React from 'react'
import type { NextPage } from 'next'
import { PatronLayout } from '@/layout/patron'
import NewProducts from '@/components/NewProducts'
import IntroMember from '@/components/IntroMember'

const Patron: NextPage = () => (
    <PatronLayout>
      <IntroMember />
      <NewProducts 
        

      
      
      />

    </PatronLayout>
  )


export default Patron
