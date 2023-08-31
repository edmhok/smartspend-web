import React from 'react'
import type { NextPage } from 'next'
import { MerchantLayout } from '@/layout'
import ViewOrder from '@/components/ViewOrder'

const Order: NextPage = () => (
  <MerchantLayout>

    <ViewOrder />

  </MerchantLayout>
)


export default Order
