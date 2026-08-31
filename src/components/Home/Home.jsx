import React from 'react'
import BestFood from './bestFood'
import { CitiesFoodDelivery } from './citiesFoodDelivery'
import { CitiesGroceryDelivery } from './citiesGroceryDelivery'
import CitiesWithDeliveryReuasable from './citiesWithDeliveryReuasable'
import DiscoverRestaurants from './discoverRestaurants'
import GetTheApp from './getTheApp'
import HeroSection from './HeroSection'
import ShopGroceries from './ShopGroceries'
import Footer from './footer'

function Home() {
    return (
        <div>
            <HeroSection />
            <BestFood />
            <ShopGroceries />
            <DiscoverRestaurants />
            <GetTheApp />
            <CitiesFoodDelivery />
            {/* <CitiesGroceryDelivery /> */}
            <Footer />
        </div>
    )
}

export default Home