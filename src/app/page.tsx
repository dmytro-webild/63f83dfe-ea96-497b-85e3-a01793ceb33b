"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="noise"
        cardStyle="soft-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "features" },
        { name: "About", id: "about" },
        { name: "Gallery", id: "products" },
        { name: "Contact", id: "contact" },
      ]}
      button={{
        text: "Book Free Estimate",        href: "#contact"}}
      brandName="Shore & Grain"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain"}}
      imagePosition="right"
      title="Coastal Craftsmanship for Your Home"
      description="Expert carpentry and precision tile work throughout Volusia County. We turn your vision into beautiful, lasting home spaces with natural materials and master craftsmanship."
      buttons={[
        { text: "Book Free Estimate", href: "#contact" },
        { text: "View Gallery", href: "#products" },
      ]}
      mediaAnimation="slide-up"
      avatarText="Trusted by 150+ Volusia families"
      marqueeItems={[
        { type: "text", text: "Custom Woodwork" },
        { type: "text", text: "Tile Installation" },
        { type: "text", text: "Home Renovations" },
        { type: "text", text: "Professional Finish" },
        { type: "text", text: "Coastal Style" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Built with Integrity & Local Heart" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/man-working-wood-workshop_23-2148970798.jpg", alt: "Craftsman at work" },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        { title: "Custom Carpentry", description: "From built-ins to trim, we provide precise woodwork.", imageSrc: "http://img.b2bpic.net/free-photo/man-engraving-wood-outdoors-close-up_23-2149061715.jpg" },
        { title: "Precision Tiling", description: "Expert layout and installation for bathrooms, floors, and backsplashes.", imageSrc: "http://img.b2bpic.net/free-photo/small-bathroom-with-modern-style-ai-generated_23-2150694894.jpg" },
        { title: "Home Consults", description: "We help you select materials that fit your home's aesthetic.", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-view-hand-holding-small-house-model-pencil-blueprint_23-2148203980.jpg" },
      ]}
      title="Our Specialized Services"
      description="Whether it's custom interior wood finishes or intricate tiling, our team brings professional care to every project in Volusia County."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      buttons={[{ text: "View Full Gallery", href: "#" }]}
      products={[
        { id: "1", brand: "Carpentry", name: "Custom Kitchen Cabinetry", price: "", rating: 5, reviewCount: "", imageSrc: "http://img.b2bpic.net/free-photo/background-with-empty-wooden-table-with-tablecloth_93675-130865.jpg" },
        { id: "2", brand: "Carpentry", name: "Modern Living Built-ins", price: "", rating: 5, reviewCount: "", imageSrc: "http://img.b2bpic.net/free-photo/close-up-minimalist-fireplace_23-2148238611.jpg" },
        { id: "3", brand: "Tile", name: "Master Bath Tile", price: "", rating: 5, reviewCount: "", imageSrc: "http://img.b2bpic.net/free-photo/photo-ground-texture-pattern_58702-11686.jpg" },
        { id: "4", brand: "Carpentry", name: "Hardwood Flooring", price: "", rating: 5, reviewCount: "", imageSrc: "http://img.b2bpic.net/free-photo/interior-home-design-with-wooden-floor_23-2148443916.jpg" },
        { id: "5", brand: "Tile", name: "Backsplash Design", price: "", rating: 5, reviewCount: "", imageSrc: "http://img.b2bpic.net/free-photo/tiled-kitchen-wall_23-2148906644.jpg" },
        { id: "6", brand: "Carpentry", name: "Custom Trim Work", price: "", rating: 5, reviewCount: "", imageSrc: "http://img.b2bpic.net/free-photo/carpenter-working-wood_23-2148970806.jpg" },
      ]}
      title="Our Project Showcase"
      description="A curated selection of our recent craftsmanship across Volusia County."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        { id: "m1", value: "150+", title: "Homes Renovated", items: ["Kitchens", "Bathrooms", "Living Areas"] },
        { id: "m2", value: "10+", title: "Years Experience", items: ["Carpentry", "Tile Design", "Install"] },
        { id: "m3", value: "5/5", title: "Customer Rating", items: ["Quality", "Communication", "Punctuality"] },
      ]}
      title="Our Impact in Volusia County"
      description="Committed to quality and community trust."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[]}
      cardTitle="What Our Neighbors Say"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Do you serve all of Volusia County?", content: "Yes, we proudly serve all cities and communities within Volusia County." },
        { id: "q2", title: "Can I provide my own materials?", content: "Yes, we are happy to work with your materials or help you source high-quality options." },
        { id: "q3", title: "How do I get a quote?", content: "Click the 'Book Free Estimate' button to fill out our contact form." },
        { id: "q4", title: "What is your typical project timeline?", content: "Timelines vary by project size; we will provide a clear estimate during our consultation." },
        { id: "q5", title: "Are you licensed and insured?", content: "Yes, we are fully licensed and insured for all carpentry and tiling work." },
      ]}
      title="Common Questions"
      description="Here is what you need to know about our home service process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      title="Let's Talk About Your Project"
      description="Share your vision with us, and let's bring it to life."
      mediaPosition="right"
      tag="Contact Us"
      buttonText="Send Message"
      imageSrc="http://img.b2bpic.net/free-photo/building-blueprints-table_23-2147710828.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Shore & Grain"
      columns={[
        {
          title: "Company",          items: [
            { label: "Home", href: "#hero" },
            { label: "Services", href: "#features" },
            { label: "Gallery", href: "#products" },
            { label: "Contact", href: "#contact" },
          ],
        },
        {
          title: "Contact",          items: [
            { label: "(386) 555-0123", href: "tel:3865550123" },
            { label: "hello@shoregrain.com", href: "mailto:hello@shoregrain.com" },
            { label: "123 Coastal Way, Ormond Beach, FL 32174", href: "#" },
          ],
        },
      ]}
      copyrightText="© 2026 Shore & Grain. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
