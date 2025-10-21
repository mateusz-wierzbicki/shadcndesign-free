"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";

export function TeamSection1() {
  const teamMembers = [
    {
      name: "Ricky Smith",
      role: "CEO",
      description:
        "Leads the company with a clear vision, guiding strategic growth and fostering innovation to ensure long-term success.",
      facebook: "#",
      instagram: "#",
      x: "#",
      image: "https://github.com/shadcn.png",
    },
    {
      name: "Kurt Bates",
      role: "Innovation Specialist",
      description:
        "Drives innovation efforts, exploring new technologies and strategies to keep the company ahead of industry trends.",
      facebook: "#",
      instagram: "#",
      x: "#",
      image: "https://github.com/shadcn.png",
    },
    {
      name: "Dennis Callis",
      role: "Designer",
      description:
        "Creates beautiful, innovative, and functional designs that effectively communicate the brand and engage the audience.",
      facebook: "#",
      instagram: "#",
      x: "#",
      image: "https://github.com/shadcn.png",
    },
    {
      name: "Frances Swann",
      role: "UI/UX Designer",
      description:
        "Crafts seamless, intuitive user interfaces and experiences that ensure products are both easy to use and visually appealing.",
      facebook: "#",
      instagram: "#",
      x: "#",
      image: "https://github.com/shadcn.png",
    },
    {
      name: "Corina McCoy",
      role: "Culture Curator",
      description:
        "Nurtures company culture, ensuring a positive, inclusive environment where creativity, collaboration, and growth thrive.",
      facebook: "#",
      instagram: "#",
      x: "#",
      image: "https://github.com/shadcn.png",
    },
    {
      name: "Rhonda Rhodes",
      role: "Innovation Specialist",
      description:
        "Shapes and communicates the brand's identity, developing strategies that enhance recognition and build lasting customer loyalty.",
      facebook: "#",
      instagram: "#",
      x: "#",
      image: "https://github.com/shadcn.png",
    },
  ];

  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline>Team section</Tagline>
            <h2 className="heading-lg text-foreground">
              People-powered showcase that builds connection
            </h2>
            <p className="text-muted-foreground">
              Add a concise value statement that highlights your team's
              expertise and culture while maintaining a professional tone. Focus
              on collective strengths and achievements while keeping it under 2
              lines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-16 w-16 rounded-xl">
                    <AvatarImage src={member.image} alt={member.name} />
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-foreground text-base font-semibold">
                      {member.name}
                    </p>
                    <p className="text-muted-foreground text-base">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-base">
                  {member.description}
                </p>
                <div className="flex gap-4">
                  <Link
                    href={member.facebook}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary cursor-pointer"
                  >
                    <SiFacebook className="size-6" />
                  </Link>
                  <Link
                    href={member.x}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary cursor-pointer"
                  >
                    <SiInstagram className="size-6" />
                  </Link>
                  <Link
                    href={member.x}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary cursor-pointer"
                  >
                    <SiX className="size-6" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
