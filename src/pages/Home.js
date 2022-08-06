/* eslint-disable jsx-a11y/anchor-is-valid */

import heroBanner from "../images/hero/banner.jpg";

//component Imports
import OurProducts from "../components/products/product_sections/our_products/OurProducts";
import FeaturedProducts from "../components/products/product_sections/featured_products/FeaturedProducts";
import Banner from "../components/banner/Banner";
import CategorizedProductSection from "../components/products/product_sections/categorized_products/CategorizedProductSection";
import HeroHeader from "../components/common/hero/HeroHeader";

const Home = () => {
  return (
    <>
      <HeroHeader isOnHomepage />
      <OurProducts />
      <FeaturedProducts />
      <CategorizedProductSection />
      <Banner />
    </>
  );
};

export default Home;
