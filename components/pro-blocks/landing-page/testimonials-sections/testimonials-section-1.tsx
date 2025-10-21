"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection1() {
  return (
    <section
      className="bg-muted/40 container-padding-x section-padding-y flex flex-col items-center"
      aria-labelledby="testimonial-title"
    >
      {/* Content Container */}
      <div className="flex max-w-2xl flex-col items-center gap-8">
        {/* Testimonial Quote */}
        <blockquote
          id="testimonial-title"
          className="text-foreground text-center text-lg leading-7 font-medium md:text-xl"
        >
          &quot;Shadcn UI Kit for Figma has completely transformed our design
          process. It&apos;s incredibly intuitive and saves us so much time. The
          components are beautifully crafted and customizable.&quot;
        </blockquote>

        {/* Author Information */}
        <div className="flex flex-col items-center gap-4">
          {/* Author Avatar */}
          <Avatar className="h-12 w-12 rounded-xl md:h-14 md:w-14">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Lando Norris"
            />
          </Avatar>

          {/* Author Details */}
          <div className="flex items-center gap-2">
            <span className="text-foreground text-base font-medium">
              Lando Norris
            </span>
            <span className="text-muted-foreground opacity-50">•</span>
            <span className="text-muted-foreground text-base">
              CEO at Acme Inc.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
