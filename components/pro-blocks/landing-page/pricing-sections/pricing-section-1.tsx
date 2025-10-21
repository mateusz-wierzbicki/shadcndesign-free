"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { VariantProps } from "class-variance-authority";

const pricingData = {
  plans: [
    {
      name: "Basic",
      description: "Perfect for individuals and small projects",
      features: [
        {
          name: "Up to 5 team members",
          tooltip:
            "Collaborate with up to 5 team members on unlimited projects",
        },
        {
          name: "10GB storage space",
          tooltip: "Secure cloud storage for all your project files and assets",
        },
        {
          name: "Basic analytics",
          tooltip: "Access to essential metrics and performance tracking",
        },
      ],
      pricing: {
        monthly: 29,
        annually: 290,
      },
      variant: "secondary",
    },
    {
      name: "Standard",
      description: "Ideal for growing teams and businesses",
      badge: "Most popular",
      features: [
        {
          name: "Up to 20 team members",
          tooltip: "Scale your team with expanded collaboration capabilities",
        },
        {
          name: "50GB storage space",
          tooltip: "More storage for larger projects and asset libraries",
        },
        {
          name: "Advanced analytics",
          tooltip: "Detailed insights with custom reporting and dashboards",
        },
        {
          name: "Priority support",
          tooltip: "Get help within 24 hours from our dedicated support team",
        },
      ],
      pricing: {
        monthly: 49,
        annually: 490,
      },
      variant: "default",
      highlighted: true,
    },
    {
      name: "Premium",
      description: "For large enterprises and advanced needs",
      features: [
        {
          name: "Unlimited team members",
          tooltip: "No limits on team size or collaboration",
        },
        {
          name: "250GB storage space",
          tooltip: "Enterprise-grade storage with advanced security",
        },
        {
          name: "Custom analytics",
          tooltip: "Tailored analytics solutions with API access",
        },
        {
          name: "24/7 premium support",
          tooltip:
            "Round-the-clock dedicated support with 4-hour response time",
        },
        {
          name: "White-labeling",
          tooltip: "Custom branding and white-label solutions",
        },
      ],
      pricing: {
        monthly: 99,
        annually: 990,
      },
      variant: "secondary",
    },
  ],
};

export function PricingSection1() {
  const [billingPeriod, setBillingPeriod] = React.useState("monthly");

  return (
    // Main pricing section container
    <section
      className="bg-background section-padding-y"
      aria-labelledby="pricing-section-title"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            {/* Category Tag */}
            <Tagline>Pricing section</Tagline>
            {/* Main Title */}
            <h2
              id="pricing-section-title"
              className="heading-lg text-foreground"
            >
              Benefit-focused headline that highlights choice
            </h2>
            {/* Section Description */}
            <p className="text-muted-foreground text-base">
              Add a concise value statement that addresses price sensitivity and
              showcases plan flexibility. Focus on transformation and results
              while keeping it under 2 lines. Align with your pricing table
              options.
            </p>
          </div>

          {/* Billing Period Toggle */}
          <Tabs
            value={billingPeriod}
            onValueChange={setBillingPeriod}
            className="w-fit"
          >
            <TabsList className="bg-muted h-10">
              <TabsTrigger
                value="monthly"
                className="data-[state=active]:bg-background px-3 py-1.5 data-[state=active]:shadow-sm"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="annually"
                className="data-[state=active]:bg-background px-3 py-1.5 data-[state=active]:shadow-sm"
              >
                Annually
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Pricing Cards Grid */}
          <div className="grid w-full grid-cols-1 gap-4 lg:max-w-5xl lg:grid-cols-3 lg:gap-6">
            {pricingData.plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`rounded-xl p-6 lg:p-8 ${plan.highlighted ? "border-primary border-2" : ""}`}
              >
                <CardContent className="flex flex-col gap-8 p-0">
                  {/* Plan Header */}
                  <div className="flex flex-col gap-6">
                    {/* Plan Title and Description */}
                    <div className="relative flex flex-col gap-3">
                      {/* Popular Plan Badge */}
                      {plan.badge && (
                        <Badge className="absolute top-1 right-0 w-fit">
                          {plan.badge}
                        </Badge>
                      )}
                      <h3
                        className={`text-lg font-semibold ${plan.highlighted ? "text-primary" : ""}`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing Display */}
                    <div className="flex items-end gap-0.5">
                      <span className="text-4xl font-semibold">
                        $
                        {
                          plan.pricing[
                            billingPeriod as keyof typeof plan.pricing
                          ]
                        }
                      </span>
                      <span className="text-muted-foreground text-base">
                        /{billingPeriod === "monthly" ? "month" : "year"}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={
                        plan.variant as VariantProps<
                          typeof buttonVariants
                        >["variant"]
                      }
                      className="w-full"
                    >
                      Purchase plan
                    </Button>
                  </div>

                  {/* Features List */}
                  <div className="flex flex-col gap-4">
                    <p className="text-sm font-medium">
                      {index === 0
                        ? "What's included:"
                        : `Everything in ${pricingData.plans[index - 1].name}, plus:`}
                    </p>
                    <div className="flex flex-col gap-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          {/* Feature Checkmark */}
                          <Check className="text-primary h-5 w-5" />
                          {/* Feature Name */}
                          <span className="text-muted-foreground flex-1 text-sm">
                            {feature.name}
                          </span>
                          {/* Feature Info Tooltip */}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger
                                aria-label={`More information about ${feature.name}`}
                              >
                                <Info className="text-muted-foreground h-4 w-4 cursor-pointer opacity-70 hover:opacity-100" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
