import React from 'react'
import type { NextPage } from 'next'
import ViewOrder from '@/components/ViewOrder'
import Menubar from '@/components/Patron/Menubar'

const Order: NextPage = () => (
  <>
    <Menubar />
    <ViewOrder />

  </>
)


export default Order
