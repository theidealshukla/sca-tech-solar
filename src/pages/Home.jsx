import React from 'react'
import Hero from '../sections/Hero'
import StatsBar from '../sections/StatsBar'
import AboutVision from '../sections/AboutVision'
import ServicesOverview from '../sections/ServicesOverview'
import WhyChooseUs from '../sections/WhyChooseUs'
import OurProcess from '../sections/OurProcess'
import ProductsShowcase from '../sections/ProductsShowcase'
import SolarCalculator from '../sections/SolarCalculator'
import ProjectsGallery from '../sections/ProjectsGallery'
import Testimonials from '../sections/Testimonials'
import SubsidyBanner from '../sections/SubsidyBanner'
import FAQ from '../sections/FAQ'
import ContactSection from '../sections/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutVision />
      <ServicesOverview />
      <WhyChooseUs />
      <OurProcess />
      <ProductsShowcase />
      <SolarCalculator />
      <ProjectsGallery />
      <Testimonials />
      <SubsidyBanner />
      <FAQ />
      <ContactSection />
    </>
  )
}
