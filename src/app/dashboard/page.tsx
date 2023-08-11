import React from 'react'
import type { NextPage } from 'next'
import { MemberLayout } from '@/memberlayout'
import NewProducts from '@/components/NewProducts'
import IntroMessage from '@/components/Dashboard/Intro'

const Dashboard: NextPage = () => (
    <MemberLayout>
      <IntroMessage />
      <NewProducts />

    </MemberLayout>
  )


export default Dashboard
