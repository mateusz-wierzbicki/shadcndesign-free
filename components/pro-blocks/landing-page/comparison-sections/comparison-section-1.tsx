"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/pro-blocks/logo";
import { Check, X, Box } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ComparisonRow = {
  feature: string;
  our: boolean | string;
  theirs: boolean | string;
};

const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "Projects", our: "Unlimited", theirs: "10" },
  { feature: "Custom components", our: true, theirs: true },
  { feature: "Design tokens", our: true, theirs: true },
  { feature: "Team permissions", our: true, theirs: false },
  { feature: "Audit logs", our: true, theirs: false },
];

export function ComparisonSection1() {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x mx-auto flex max-w-6xl flex-col gap-8 md:gap-12">
        {/* Title block */}
        <div className="section-title-gap-lg mx-auto flex flex-col items-center text-center md:max-w-xl">
          <Tagline>Comparison Section</Tagline>
          <h2 className="heading-lg text-foreground">You vs. Them</h2>
          <p className="text-muted-foreground text-base">
            Explain in one or two concise sentences how your solution compares
            to a competitor. Keep it clear and compelling.
          </p>
        </div>

        {/* Comparison grid */}
        {/* Desktop/tablet (md+) table */}
        <div className="hidden overflow-x-auto md:block">
          <div className="">
            <Table>
              <TableHeader>
                <TableRow className="h-14">
                  <TableHead className="w-[40%]"></TableHead>
                  <TableHead className="w-[30%]">
                    <div className="relative flex items-center justify-center">
                      <Logo className="size-6" />
                    </div>
                  </TableHead>
                  <TableHead className="w-[30%]">
                    <div className="flex items-center justify-center">
                      <Box className="size-6" aria-hidden="true" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <TableRow key={idx} className="h-14">
                    <TableCell className="text-base font-medium">
                      {row.feature}
                    </TableCell>
                    <TableCell>
                      <div className="relative flex items-center justify-center">
                        <div className="text-base">
                          {typeof row.our === "boolean" ? (
                            row.our ? (
                              <Check className="size-5" aria-hidden="true" />
                            ) : (
                              <X
                                className="text-muted-foreground size-5"
                                aria-hidden="true"
                              />
                            )
                          ) : (
                            row.our
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center text-base">
                        {typeof row.theirs === "boolean" ? (
                          row.theirs ? (
                            <Check className="size-5" aria-hidden="true" />
                          ) : (
                            <X
                              className="text-muted-foreground size-5"
                              aria-hidden="true"
                            />
                          )
                        ) : (
                          row.theirs
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Mobile (< md) stacked rows */}
        <div className="md:hidden">
          <div className="mb-4 grid grid-cols-2 text-sm font-medium">
            <div className="relative flex items-center justify-center py-2">
              <div className="bg-muted/50 absolute inset-0 -z-10" />
              <Logo className="size-6" />
            </div>
            <div className="flex items-center justify-center py-2">
              <Box className="size-6" aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-3">
            {COMPARISON_ROWS.map((row, idx) => (
              <div key={idx} className="rounded-md border">
                <div className="px-4 py-3 text-sm font-medium">
                  {row.feature}
                </div>
                <Separator role="presentation" />
                <div className="grid grid-cols-2">
                  <div className="relative flex items-center justify-center py-3">
                    <div className="bg-muted/50 absolute inset-0 -z-10" />
                    <div className="text-sm">
                      {typeof row.our === "boolean" ? (
                        row.our ? (
                          <Check className="size-4" aria-hidden="true" />
                        ) : (
                          <X className="size-4" aria-hidden="true" />
                        )
                      ) : (
                        row.our
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center py-3 text-sm">
                    {typeof row.theirs === "boolean" ? (
                      row.theirs ? (
                        <Check className="size-4" aria-hidden="true" />
                      ) : (
                        <X
                          className="text-muted-foreground size-4"
                          aria-hidden="true"
                        />
                      )
                    ) : (
                      row.theirs
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center gap-4">
          <Button asChild>
            <Link href="#">Get started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
