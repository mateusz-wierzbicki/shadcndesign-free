"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection1() {
  return (
    <section
      className="bg-muted/40 container-padding-x section-padding-y flex flex-col items-center"
      aria-labelledby="testimonial-title"
    >
      <div className="flex max-w-2xl flex-col items-center gap-8">
        <blockquote
          id="testimonial-title"
          className="text-foreground text-center text-lg leading-7 font-medium text-pretty md:text-xl"
        >
          &quot;Shadcn UI Kit for Figma has completely transformed our design
          process. It&apos;s incredibly intuitive and saves us so much time. The
          components are beautifully crafted and customizable.&quot;
        </blockquote>

        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-12 w-12 rounded-xl md:h-14 md:w-14">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Lando Norris"
            />
          </Avatar>

          <div className="flex flex-col items-center sm:flex-row sm:gap-2">
            <span className="text-foreground font-medium">Lando Norris</span>
            <span className="text-muted-foreground hidden opacity-50 sm:block">
              •
            </span>
            <span className="text-muted-foreground">CEO at Acme Inc.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
