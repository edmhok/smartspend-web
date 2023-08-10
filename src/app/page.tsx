import Bestseller from '@/components/Bestseller'
import Category from '@/components/Category'
import Footer from '@/components/Footer'
import HeaderMain from '@/components/HeaderMain'
import Hero from '@/components/Hero'
import NewProducts from '@/components/NewProducts'

export default function Home() {
  return (
    <main className='place-content-center'>
    <HeaderMain />
    <Hero />
    <Bestseller />
    <Category />
    <NewProducts />
    <Footer />
    </main>
  )
}
