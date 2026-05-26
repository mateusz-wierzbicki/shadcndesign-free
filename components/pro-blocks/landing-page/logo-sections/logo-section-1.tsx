"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { PlaceholderLogoBuzzsnap } from "@/components/pro-blocks/placeholder-logo-buzzsnap";
import { PlaceholderLogoDashstar } from "@/components/pro-blocks/placeholder-logo-dashstar";
import { PlaceholderLogoEditly } from "@/components/pro-blocks/placeholder-logo-editly";
import { PlaceholderLogoGeoaura } from "@/components/pro-blocks/placeholder-logo-geoaura";
import { PlaceholderLogoNanodea } from "@/components/pro-blocks/placeholder-logo-nanodea";
import { PlaceholderLogoOrionbo } from "@/components/pro-blocks/placeholder-logo-orionbo";
import { PlaceholderLogoRevahub } from "@/components/pro-blocks/placeholder-logo-revahub";
import { PlaceholderLogoStarlight } from "@/components/pro-blocks/placeholder-logo-starlight";

const logos = [
  {
    id: 1,
    component: PlaceholderLogoBuzzsnap,
    alt: "Buzzsnap logo",
  },
  {
    id: 2,
    component: PlaceholderLogoDashstar,
    alt: "Dashstar logo",
  },
  {
    id: 3,
    component: PlaceholderLogoEditly,
    alt: "Editly logo",
  },
  {
    id: 4,
    component: PlaceholderLogoGeoaura,
    alt: "Geoaura logo",
  },
  {
    id: 5,
    component: PlaceholderLogoNanodea,
    alt: "Nanodea logo",
  },
  {
    id: 6,
    component: PlaceholderLogoOrionbo,
    alt: "Orionbo logo",
  },
  {
    id: 7,
    component: PlaceholderLogoRevahub,
    alt: "Revahub logo",
  },
  {
    id: 8,
    component: PlaceholderLogoStarlight,
    alt: "Starlight logo",
  },
];

export function LogoSection1() {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline>Logo section</Tagline>
            <h2 className="heading-lg text-foreground">
              Customer logos that build trust
            </h2>
            <p className="text-muted-foreground text-lg/8 text-pretty">
              Add logos of notable companies using your product. Include 4-6
              recognizable brands in grayscale to maintain visual consistency.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[...logos, logos[0], logos[1]].map((logo, index) => {
              const LogoComponent = logo.component;

              return (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex items-center justify-center"
                  aria-label={logo.alt}
                >
                  <LogoComponent className="text-foreground dark:text-foreground h-8 w-auto" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
