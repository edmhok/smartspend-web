import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout'
import PatList from '@/components/Admin/PatList'

const PatronList: NextPage = () => (
    <AdminLayout>
        <PatList />

    </AdminLayout>
)


export default PatronList
