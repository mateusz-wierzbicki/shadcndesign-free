"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function BentoGrid1() {
  return (
    <section className="bg-muted section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <Tagline>Bento Grid Section</Tagline>
          {/* Main Heading */}
          <h2 className="heading-lg">
            Feature-rich layout that captures attention
          </h2>
          {/* Description */}
          <p className="text-muted-foreground">
            Add a concise value statement that highlights your product&apos;s
            key features and benefits in a visually dynamic grid. Focus on
            creating balanced content blocks while keeping it under 2-3 lines.
            Align with your grid layout structure.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {/* Tall Feature Card - Left */}
          <Card className="rounded-xl lg:row-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Feature title
              </CardTitle>
              <CardDescription>
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="https://ui.shadcn.com/placeholder.svg"
                alt="Placeholder"
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>
          {/* Regular Feature Card - Top Right */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Feature title
              </CardTitle>
              <CardDescription>
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="https://ui.shadcn.com/placeholder.svg"
                alt="Placeholder"
                width={1000}
                height={1000}
                className="h-full w-full object-cover md:aspect-[4/3]"
              />
            </CardContent>
          </Card>
          {/* Regular Feature Card - Bottom Right */}
          <Card className="rounded-xl lg:col-start-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Feature title
              </CardTitle>
              <CardDescription>
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="https://ui.shadcn.com/placeholder.svg"
                alt="Placeholder"
                width={1000}
                height={1000}
                className="h-full w-full object-cover md:aspect-[4/3]"
              />
            </CardContent>
          </Card>
          {/* Tall Feature Card - Right */}
          <Card className="rounded-xl lg:col-start-3 lg:row-span-2 lg:row-start-1">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Feature title
              </CardTitle>
              <CardDescription>
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="https://ui.shadcn.com/placeholder.svg"
                alt="Placeholder"
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
