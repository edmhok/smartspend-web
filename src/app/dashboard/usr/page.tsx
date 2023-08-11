import React from 'react'
import type { NextPage } from 'next'
import { MemberLayout } from '@/memberlayout'
import NewProducts from '@/components/NewProducts'

const Dashboard: NextPage = () => (
    <MemberLayout>
      <NewProducts />
      
    </MemberLayout>
  )


export default Dashboard
