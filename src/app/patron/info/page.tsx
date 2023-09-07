import React from 'react'
import type { NextPage } from 'next'
import { PatronLayout } from '@/layout'
import MyInfo from '@/components/myinfo/PatronInfo'

const PatronInfo: NextPage = () => (
    <PatronLayout>
        <MyInfo />

    </PatronLayout>
)


export default PatronInfo