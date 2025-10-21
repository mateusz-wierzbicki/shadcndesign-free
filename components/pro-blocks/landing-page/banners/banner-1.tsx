"use client";

import { X, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Banner1() {
  return (
    <aside
      role="banner"
      aria-label="Promotion announcement"
      className="relative flex items-center bg-neutral-950 py-3 pr-8 pl-6"
    >
      <Link
        href="#"
        className="flex w-full cursor-pointer items-start justify-start gap-2 md:items-center md:justify-center"
        aria-label="Learn more about shadcn/ui kit Pro blocks"
      >
        <p className="text-left text-sm text-white hover:underline md:text-center">
          <span className="font-semibold">New update</span> · Pro blocks are now
          available in shadcn/ui kit for Figma!
        </p>
        <ChevronsRight className="hidden h-4 w-4 text-white md:block" />
      </Link>

      <Button
        onClick={() => {
          /* Add close handler */
        }}
        className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/20"
        aria-label="Close announcement"
        variant="ghost"
        size="icon"
      >
        <X className="text-white" />
        <span className="sr-only">Close</span>
      </Button>
    </aside>
  );
}
