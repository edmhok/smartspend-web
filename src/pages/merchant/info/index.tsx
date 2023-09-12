import React from 'react'
import type { NextPage } from 'next'
import MyInfo from '@/components/myinfo/MerchantInfo'
import Menubar from '@/components/Merchant/Menubar'

const MerchantInfo: NextPage = () => (
    <>
        <Menubar />
        <MyInfo />

    </>
)


export default MerchantInfo