import React from 'react'
import type { NextPage } from 'next'
import { MemberLayout } from '@/memberlayout'
import NewProducts from '@/components/NewProducts'
import IntroMember from '@/components/IntroMember'

const Dashboard: NextPage = () => (
    <MemberLayout>
      <IntroMember />
      <NewProducts 
        

      
      
      />

    </MemberLayout>
  )


export default Dashboard
