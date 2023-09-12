import React from 'react'
import type { NextPage } from 'next'
import MyInfo from '@/components/myinfo/PatronInfo'
import Menubar from '@/components/patron/Menubar'

const PatronInfo: NextPage = () => (
    <>
        <Menubar />
        <MyInfo />

    </>
)


export default PatronInfo