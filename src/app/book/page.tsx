"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function BookPage() {
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
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "/" },
            { name: "Book", id: "/book" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="Shore & Grain"
        />
        <div className="pt-32 pb-16">
          <ContactCenter
            tag="Booking"
            title="Schedule Your Project"
            description="Let's discuss your carpentry or tiling project. We'll get back to you shortly to confirm your booking."
            background={{ variant: "plain" }}
          />
        </div>
        <FooterBaseReveal
          logoText="Shore & Grain"
          columns={[
            { title: "Company", items: [{ label: "Home", href: "/" }, { label: "Book", href: "/book" }, { label: "Contact", href: "/contact" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}