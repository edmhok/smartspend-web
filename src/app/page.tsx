import Category from '@/components/Category'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import NewProducts from '@/components/NewProducts'

export default function Home() {
  return (
    <main className='place-content-center'>
    <Header />
    <Hero />
    <Category />
    <NewProducts />
    <Footer />
    </main>
  )
}
