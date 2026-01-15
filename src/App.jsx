import './App.css'
import BestFood from './components/bestFood'
import { CitiesFoodDelivery } from './components/citiesFoodDelivery'
import { CitiesGroceryDelivery } from './components/citiesGroceryDelivery'
import CitiesWithDeliveryReuasable from './components/citiesWithDeliveryReuasable'
import DiscoverRestaurants from './components/discoverRestaurants'
import GetTheApp from './components/getTheApp'
import HeroSection from './components/heroSection'
import ShopGroceries from './components/shopGroceries'


  export default function App() {
  return (
    <>
    <HeroSection/>
    <BestFood/>
    <ShopGroceries/>
    <DiscoverRestaurants/>
    <GetTheApp/>
    <CitiesFoodDelivery/>
    <CitiesGroceryDelivery/>
    </>
  )
}
