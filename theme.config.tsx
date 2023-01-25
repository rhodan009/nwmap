import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./public/logo.webp";

const config: DocsThemeConfig = {
  logo: <Image src={Logo} alt="nwmap" height={40} />,
  project: {
    link: "https://github.com/lmachens/nwmap",
  },
  chat: {
    link: "https://discord.gg/MRMTwtB3Th",
  },
  docsRepositoryBase: "https://github.com/lmachens/nwmap/tree/main",
  footer: {
    text: "nwmap.info",
  },
  head: <></>,
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s – nwmap",
      description:
        "A New World Faction Territory Map Project that helps to bring a visual understanding of each server.",
      additionalLinkTags: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
          sizes: "32x32",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-16x16.png",
          sizes: "16x16",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    };
  },
};

export default config;
