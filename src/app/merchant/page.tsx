import React from 'react'
import type { NextPage } from 'next'
import { MerchantLayout } from '@/layout/merchant'
import NewProducts from '@/components/NewProducts'
import IntroMember from '@/components/IntroMember'

const Merchant: NextPage = () => (
    <MerchantLayout>
      <IntroMember />
      <NewProducts 
        

      
      
      />

    </MerchantLayout>
  )


export default Merchant
