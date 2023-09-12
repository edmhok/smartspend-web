import React from 'react'
import type { NextPage } from 'next'
import Menubar from '@/components/merchant/Menubar'
import PointsGallery from '@/components/pointsgallery/PointsGallery'
import CardPoints from '@/components/cart/CardPoints'

const MerchantInfo: NextPage = () => (
    <>
        <Menubar />
        <CardPoints />
        {/* <PointsGallery /> */}

    </>
)


export default MerchantInfo