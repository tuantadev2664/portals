import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import { Alert } from "@heroui/alert";
import { Badge } from "@heroui/badge";
import { Avatar } from "@heroui/avatar";
import Hero from "@/components/hero";
import HeaderOrg from "@/components/header-org";
import Recently from "@/components/recently";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Hero />

      <HeaderOrg />

      <div className="w-full mt-16 pl-18">
        <Recently />
      </div>
      {/* <div className="justify-center inline-block max-w-xl text-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div> */}

      {/* <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>

      <div className="flex gap-4">
        <Button variant="bordered" radius="md">
          Button
        </Button>
        <Button isDisabled color="primary" radius="md">
          Disabled
        </Button>
      </div>
      <div className="flex gap-4">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Badge color="danger" content="5" shape="rectangle" showOutline={false}>
          <Avatar
            isBordered
            radius="md"
            src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
          />
        </Badge>
        <Badge color="danger" content="5" shape="circle" showOutline={false}>
          <Avatar
            isBordered
            radius="full"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
        </Badge>
      </div> */}
    </section>
  );
}
