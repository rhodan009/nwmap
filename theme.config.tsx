import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: () => {
    const { title } = useConfig();
    return (
      <>
        <title>{title} - nwmap</title>
      </>
    );
  },
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
};

export default config;
