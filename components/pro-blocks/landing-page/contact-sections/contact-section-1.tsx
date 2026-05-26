"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function ContactSection1() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-xl px-6">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Contact Section</Tagline>
            <h1 id="contact-heading" className="heading-lg">
              Get in touch
            </h1>
            <p className="text-muted-foreground text-lg/8 text-pretty">
              Write one or two welcoming sentences that encourage contact and
              include your response time commitment.
            </p>
          </div>

          <form
            className="flex w-full flex-col"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form"
          >
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    placeholder="Name"
                    required
                    aria-required="true"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    placeholder="Email"
                    type="email"
                    required
                    aria-required="true"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea
                    id="message"
                    placeholder="Type your message"
                    className="min-h-[106px]"
                    required
                    aria-required="true"
                  />
                </Field>

                <Field orientation="horizontal">
                  <Checkbox id="privacy" required aria-required="true" />
                  <FieldLabel
                    htmlFor="privacy"
                    className="text-muted-foreground inline leading-none font-normal"
                  >
                    By selecting this you agree to our{" "}
                    <Link href="#" className="text-foreground underline">
                      Privacy Policy
                    </Link>
                    .
                  </FieldLabel>
                </Field>

                <Field>
                  <Button type="submit" className="w-full">
                    Send message
                  </Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </div>
    </section>
  );
}
