"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks//landing-page/tagline";

export function FaqSection1() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="faq-heading"
    >
      <div className="container-padding-x mx-auto flex max-w-2xl flex-col gap-10 md:gap-12">
        {/* Section Header */}
        <div className="section-title-gap-lg flex flex-col items-center text-center">
          {/* Category Tag */}
          <Tagline>FAQ section</Tagline>
          {/* Main Title */}
          <h1 id="faq-heading" className="heading-lg text-foreground">
            Frequently asked questions
          </h1>
          {/* Section Description */}
          <p className="text-muted-foreground">
            We&apos;ve compiled the most important information to help you get
            the most out of your experience. Can&apos;t find what you&apos;re
            looking for?{" "}
            <Link href="#" className="text-primary underline">
              Contact us.
            </Link>
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" defaultValue="item-1" aria-label="FAQ items">
          {/* FAQ Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base font-medium">
              What is shadcn/ui?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Shadcn/ui is a popular, open-source UI component library for React
              that focuses on flexibility and customization. It provides a set
              of accessible, customizable components that you can use to build
              modern web applications.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base font-medium">
              What is shadcn/ui kit for Figma?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              The shadcn/ui kit for Figma is a comprehensive design resource
              that mirrors the components and styling of the shadcn/ui library.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-base font-medium">
              I&apos;m not familiar with shadcn/ui. Can I still use this kit?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Yes, you can still use this kit even if you&apos;re new to
              shadcn/ui. The components are designed to be intuitive and easy to
              use.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-base font-medium">
              Can I create multi-brand design systems with this UI kit?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Yes, the UI kit is designed to be flexible and can be customized
              for multiple brands and design systems.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-base font-medium">
              How will this kit save me time?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              This kit provides pre-built components and consistent styling,
              reducing development and design time significantly.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left text-base font-medium">
              How does this improve my collaboration with developers?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              The kit provides a shared language and consistent components that
              both designers and developers can reference.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Card */}
        <div className="bg-muted/60 flex w-full flex-col items-center gap-6 rounded-xl p-6 md:p-8">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-foreground text-2xl font-bold">
              Still have questions?
            </h2>
            <p className="text-muted-foreground text-base">
              Have questions or need assistance? Our team is here to help!
            </p>
          </div>
          <Button aria-label="Contact our support team">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
