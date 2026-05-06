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
        { name: "Home", id: "/" },
        { name: "Services", id: "#features" },
        { name: "About", id: "#about" },
        { name: "Gallery", id: "#products" },
        { name: "Book", id: "/book" },
        { name: "Contact", id: "/contact" },
      ]}
      button={{ text: "Book Free Estimate", href: "/book" }}
      brandName="Shore & Grain"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "plain" }}
      imagePosition="right"
      title="Coastal Craftsmanship for Your Home"
      description="Expert carpentry and precision tile work throughout Volusia County. We turn your vision into beautiful, lasting home spaces."
      buttons={[{ text: "Book Free Estimate", href: "/book" }, { text: "View Gallery", href: "#products" }]}
      imageSrc="http://img.b2bpic.net/free-photo/man-cutting-watermelon-medium-shot_23-2149638023.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      heading={[{ type: "text", content: "Built with Integrity & Local Heart" }]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      title="Our Specialized Services"
      description="Professional care for every carpentry and tile project in Volusia County."
      features={[]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      title="Recent Projects Gallery"
      products={[]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      metrics={[]}
      title="Our Impact"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      testimonials={[]}
      cardTitle="What Our Neighbors Say"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      faqs={[]}
      title="Common Questions"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Shore & Grain"
      columns={[
        { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Book", href: "/book" }, { label: "Contact", href: "/contact" }] },
        { title: "Contact", items: [{ label: "(386) 555-0123", href: "tel:3865550123" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}