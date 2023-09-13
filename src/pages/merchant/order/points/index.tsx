import React from 'react'
import type { NextPage } from 'next'
import Menubar from '@/components/merchant/Menubar'
import CardPoints from '@/components/Points/CardPoints'

const MerchantInfo: NextPage = () => (
    <>
        <Menubar />
        <CardPoints />

    </>
)


export default MerchantInfo