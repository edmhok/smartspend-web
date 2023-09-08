import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout'
import AllProducts from '@/components/Admin/AllProducts'

const PatronList: NextPage = () => (
    <AdminLayout>
        <AllProducts />

    </AdminLayout>
)


export default PatronList
