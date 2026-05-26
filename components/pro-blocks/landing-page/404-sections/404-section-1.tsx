"use client";

import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function X404Section1() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="error-title"
    >
      <div className="container-padding-x relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="mx-auto flex max-w-xl flex-1 flex-col items-center gap-6 text-center lg:gap-8">
          <div className="section-title-gap-xl flex flex-col items-center text-center">
            <Tagline>404 Section</Tagline>
            <h1 id="error-title" className="heading-xl">
              Page not found
            </h1>
            <p className="text-muted-foreground text-lg/8 text-pretty">
              Sorry, we couldn't find the page you're looking for. Please check
              the URL or navigate back home.
            </p>
          </div>
          <Button>Go to homepage</Button>
        </div>
      </div>
    </section>
  );
}
