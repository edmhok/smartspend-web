"use client"

// import Category from '@/components/Category'
import Hero from '@/components/Hero'
import { AuthCheckerOutside } from '@/utils/checker-outside'
import { useMemo } from 'react'
import Bestseller from '@/components/Bestseller'
import Category from '@/components/category/Category'

export default function Home() {

    useMemo(() => {
        if (typeof window !== 'undefined') {
            AuthCheckerOutside(window);
        }
    }, [])

    return (
        <main >
            <Hero />
            <Category />
            <Bestseller />
        </main>
    )
}
