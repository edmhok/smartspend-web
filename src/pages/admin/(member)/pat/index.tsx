import React from 'react'
import type { NextPage } from 'next'
import PatList from '@/components/Admin/PatList'
import Menubar from '@/components/Admin/Menubar'

const PatronList: NextPage = () => (
    <>
        <Menubar />
        <PatList />

    </>

)


export default PatronList
