"use client";

import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function X404Section1() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="error-title"
    >
      <div className="container-padding-x relative z-10 container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="m-auto flex max-w-xl flex-1 flex-col items-center gap-6 text-center lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col items-center text-center">
            {/* Tagline */}
            <Tagline>404 Section</Tagline>
            {/* Main Heading */}
            <h1 id="error-title" className="heading-xl">
              Page not found
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
              Please check the URL or navigate back home.
            </p>
          </div>
          <Button>Go to homepage</Button>
        </div>
      </div>
    </section>
  );
}
