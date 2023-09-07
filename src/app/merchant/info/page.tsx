import React from 'react'
import type { NextPage } from 'next'
import { MerchantLayout } from '@/layout'
import MyInfo from '@/components/myinfo/MerchantInfo'

const MerchantInfo: NextPage = () => (
    <MerchantLayout>
        <MyInfo />

    </MerchantLayout>
)


export default MerchantInfo