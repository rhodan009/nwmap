import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./public/logo.webp";

const config: DocsThemeConfig = {
  darkMode: false,
  nextThemes: {
    forcedTheme: "dark",
  },
  logo: (
    <>
      <Image src={Logo} alt="nwmap" height={40} />
      <style jsx>{`
        img {
          padding: 0.5rem 0.5rem 0.5rem 0;
          mask-image: linear-gradient(
            60deg,
            black 25%,
            rgba(0, 0, 0, 0.2) 50%,
            black 75%
          );
          mask-size: 400%;
          mask-position: 0%;
        }
        img:hover {
          mask-position: 100%;
          transition: mask-position 1s ease, -webkit-mask-position 1s ease;
        }
      `}</style>
    </>
  ),
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
