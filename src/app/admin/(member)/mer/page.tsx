import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout'
import ViewPoints from '@/components/Admin/ViewPoints'
import MerList from '@/components/Admin/MerList'

const MerchantList: NextPage = () => (
    <AdminLayout>
        <MerList />

    </AdminLayout>
)


export default MerchantList
