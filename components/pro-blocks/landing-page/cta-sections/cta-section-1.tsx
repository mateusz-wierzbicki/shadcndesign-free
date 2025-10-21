"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function CtaSection1() {
  return (
    <section
      className="bg-primary section-padding-y"
      aria-labelledby="cta-heading"
    >
      <div className="container-padding-x container mx-auto">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-8 md:gap-10">
          {/* Section Title */}
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            {/* Tagline */}
            <Tagline className="text-primary-foreground/80">
              CTA Section
            </Tagline>
            {/* Main Heading */}
            <h2 id="cta-heading" className="heading-lg text-primary-foreground">
              Action-driving headline that creates urgency
            </h2>
            {/* Description */}
            <p className="text-primary-foreground/80">
              Add one or two compelling sentences that reinforce your main value
              proposition and overcome final objections. End with a clear reason
              to act now. Align this copy with your CTA button text.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/80"
            aria-label="Get started with our service"
          >
            Get started
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
