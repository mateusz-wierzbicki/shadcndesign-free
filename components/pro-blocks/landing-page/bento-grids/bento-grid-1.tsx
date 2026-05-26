"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function BentoGrid1() {
  return (
    <section className="bg-muted section-padding-y">
      <div className="container-padding-x mx-auto flex max-w-7xl flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Bento Grid Section</Tagline>
          <h2 className="heading-lg">
            Feature-rich layout that captures attention
          </h2>
          <p className="text-muted-foreground text-lg/8 text-pretty">
            Add a concise value statement that highlights your product's key
            features and benefits in a visually dynamic grid.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <Card className="rounded-xl shadow-xs lg:row-span-2">
            <CardHeader>
              <h3 className="heading-sm">Feature title</h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem.
              </p>
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
          <Card className="rounded-xl shadow-xs">
            <CardHeader>
              <h3 className="heading-sm">Feature title</h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem.
              </p>
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
          <Card className="rounded-xl shadow-xs lg:col-start-2">
            <CardHeader>
              <h3 className="heading-sm">Feature title</h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem.
              </p>
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
          <Card className="rounded-xl shadow-xs lg:col-start-3 lg:row-span-2 lg:row-start-1">
            <CardHeader>
              <h3 className="heading-sm">Feature title</h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem.
              </p>
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
