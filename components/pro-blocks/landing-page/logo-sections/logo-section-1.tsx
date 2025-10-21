"use client";

import { PlaceholderLogo } from "@/components/pro-blocks/placeholder-logo"; /* Make sure to import your logos */
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function LogoSection1() {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline>Logo section</Tagline>
            <h2 className="heading-lg text-foreground">
              Showcase that builds trust
            </h2>
            <p className="text-muted-foreground">
              Add logos of notable companies using your product. Include 4-6
              recognizable brands in grayscale to maintain visual consistency.
              Ensure logos are properly scaled and aligned with equal spacing.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[...Array(10)].map((_, index) => (
              <PlaceholderLogo key={index} className="text-foreground" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
