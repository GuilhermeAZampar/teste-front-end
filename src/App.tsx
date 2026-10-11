import './styles/global.scss'
import Header from './components/headers/Header.tsx'
import Banner from './components/headers/Banner/Banner.tsx'
import ProductList from './components/ProductList/ProductList.tsx'
import Categories from './components/Categories/Categories.tsx'
import { Partners } from './components/Partners/Partners.tsx'
import Brand from './components/Brand/Brand.tsx'
import Footer from './components/Footer/Footer.tsx'

function App() {
  

  return (
    <>
    
      <Header />
      <main>
        <Banner/>
        <Categories />
        <ProductList variant='default'/>
        <Partners/>
        <ProductList variant='simple'/>
        <Partners/>
        <Brand/>
        <ProductList variant='simple'/>
        <Footer/>
      </main>
    
      
    </>
  )
}

export default App
