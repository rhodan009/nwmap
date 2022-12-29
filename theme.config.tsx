import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>nwmap</span>,
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
  useNextSeoProps: () => {
    const { frontMatter } = useConfig();

    return {
      titleTemplate: "%s – nwmap",
      description:
        frontMatter.description ||
        "A New World Faction Territory Map Project that helps to bring a visual understanding of each server.",
    };
  },
};

export default config;
