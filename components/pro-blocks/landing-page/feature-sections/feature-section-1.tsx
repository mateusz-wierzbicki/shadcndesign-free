"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/pro-blocks//landing-page/tagline";

export function FeatureSection1() {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 md:gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <div className="section-title-gap-lg flex flex-col items-start">
            <Tagline>Feature section</Tagline>
            <h2 className="heading-lg text-foreground">
              Headline that shows solution&apos;s impact on user success
            </h2>
            <p className="text-muted-foreground">
              Explain in one or two concise sentences how your solution
              transforms users&apos; challenges into positive outcomes. Focus on
              the end benefits that matter most to your target audience. Keep it
              clear and compelling.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Get access</Button>
            <Button variant="ghost">
              Learn more
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="w-full flex-1">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Feature section image"
              fill
              className="rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
