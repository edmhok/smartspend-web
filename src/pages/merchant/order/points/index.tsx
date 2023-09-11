import React from 'react'
import type { NextPage } from 'next'
import CardPoints from '@/components/Points/CardPoints'
import Menubar from '@/components/merchant/Menubar'

const MerchantInfo: NextPage = () => (
    <>
        <Menubar />
        <CardPoints />

    </>
)


export default MerchantInfo