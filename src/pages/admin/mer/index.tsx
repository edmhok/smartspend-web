import React from 'react'
import type { NextPage } from 'next'
import MerList from '@/components/Admin/MerList'
import Menubar from '@/components/Admin/Menubar'

const MerchantList: NextPage = () => (
    <>
        <Menubar />
        <MerList />

    </>

)
export default MerchantList
