"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Users, BookOpen, Heart, Anchor } from "lucide-react";

export default function AboutPage() {
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
              { name: "Services", id: "/#features" },
              { name: "About", id: "/about" },
              { name: "Gallery", id: "/#products" },
            ]}
            brandName="Shore & Grain"
          />
        </div>

        <div id="company-story" data-section="about">
          <InlineImageSplitTextAbout
            heading={[
              { type: "text", content: "Our Heritage in Coastal Craftsmanship" },
              { type: "image", src: "http://img.b2bpic.net/free-photo/man-working-wood-workshop_23-2148970798.jpg", alt: "Workshop" }
            ]}
          />
        </div>

        <div id="values" data-section="metrics">
          <MetricCardOne
            title="Core Values"
            description="Guided by our commitment to precision, integrity, and the timeless beauty of the Florida coast."
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            textboxLayout="split"
            metrics={[
              { id: "1", value: "Precision", title: "Craftsmanship", description: "Meticulous attention to every detail in wood and tile.", icon: Anchor },
              { id: "2", value: "Integrity", title: "Local Heart", description: "Building trust through transparency and quality service.", icon: Heart },
              { id: "3", value: "Heritage", title: "Legacy", description: "Creating lasting home spaces for generations.", icon: BookOpen }
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamCardTen
            title="Meet Our Master Builders"
            tag="The Shore & Grain Team"
            memberVariant="card"
            members={[
              { id: "1", name: "Alex Rivers", imageSrc: "http://img.b2bpic.net/free-photo/tiler-working-renovation-apartment_23-2149278614.jpg" },
              { id: "2", name: "Jordan Salt", imageSrc: "http://img.b2bpic.net/free-photo/man-working-his-wood-shop-with-tools-equipment_23-2150861559.jpg" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Shore & Grain"
            columns={[
              { title: "Company", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}