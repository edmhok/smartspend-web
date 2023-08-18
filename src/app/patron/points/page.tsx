import React from 'react'
import type { NextPage } from 'next'
import { PatronLayout } from '@/layout/patron'
import ViewPoints from '@/components/Patron/ViewPoints'

const Merchant: NextPage = () => (
    <PatronLayout>
        <ViewPoints />

    </PatronLayout>
)


export default Merchant
