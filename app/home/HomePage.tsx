'use client'

import BestServiceFeature from '../components/common/ui/BestServiceFeature'
import CoverHiglights from '../components/common/ui/CoverHiglights'
import FeaturedPost from '../components/common/ui/FeaturedPost'
import SectionHeader from '../components/common/ui/FeaturedProductHeader'
import Products from './components/Products'

const HomePage = () => {
  return (
    <div>
      <div className="p-6">
        <div className="mx-4 my-10 flex flex-col gap-y-20 md:mx-32">
          <CoverHiglights />
          <div className="mt-13 flex flex-col justify-center gap-4">
            <SectionHeader
              headerText="Featured Products"
              title="BEST SELLER PRODUCTS"
              description="Problems trying to resolve the conflict between"
            />
            <Products />
            <SectionHeader
              headerText="Services"
              title="THE BEST SERVICES"
              description="Problems trying to resolve the conflict between"
            />
            <BestServiceFeature />
          </div>
        </div>
      </div>
      <FeaturedPost />
    </div>
  )
}

export default HomePage
