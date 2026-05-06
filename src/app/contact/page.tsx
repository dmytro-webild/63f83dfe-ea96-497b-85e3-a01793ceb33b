"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function ContactPage() {
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
        <div className="pt-32">
          <ContactSplit
            tag="Contact"
            title="Get In Touch"
            description="We're here to answer your questions and help you plan your next home project."
            background={{ variant: "plain" }}
          />
          <FaqSplitText
            faqs={[
              { id: "1", title: "What service areas do you cover?", content: "We proudly serve the entire Volusia County area." },
              { id: "2", title: "How soon can you start?", content: "Project timelines vary based on current workload, typically within 2-4 weeks." }
            ]}
            sideTitle="Frequently Asked Questions"
            faqsAnimation="slide-up"
            useInvertedBackground={true}
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