import React from 'react'
import type { NextPage } from 'next'
import ViewPoints from '@/components/Admin/ViewPoints'
import Menubar from '@/components/Admin/Menubar'

const Points: NextPage = () => (
  <>
    <Menubar />
    <ViewPoints />

  </>
)


export default Points
