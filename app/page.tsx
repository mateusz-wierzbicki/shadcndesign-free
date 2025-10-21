"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/pro-blocks/logo";

export default function Home() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="page-heading"
    >
      <div className="container-padding-x container mx-auto">
        <div className="section-title-gap-xl mx-auto flex max-w-xl flex-1 flex-col items-center text-center">
          <div className="section-title-gap-xl flex flex-col items-center">
            <Link
              href="https://www.shadcndesign.com"
              aria-label="Go to homepage"
            >
              <Logo className="size-7" />
            </Link>
            <Tagline>Pro Blocks</Tagline>
            <h1 id="page-heading" className="heading-xl text-foreground">
              Free Pro Blocks collection for shadcn/ui
            </h1>
            <p
              className="text-muted-foreground text-base lg:text-lg"
              aria-description="page description"
            >
              Stop building every interface from scratch. Use our free shadcn/ui
              blocks to build your next project.
            </p>
            <Button asChild>
              <Link
                href="https://www.shadcndesign.com/pro-blocks"
                target="_blank"
              >
                View all our blocks
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
