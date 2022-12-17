import Plausible from "plausible-tracker";

let plausible: ReturnType<typeof Plausible> | null = null;
export const initPlausible = () => {
  if (
    process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST &&
    process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN &&
    !plausible
  ) {
    plausible = Plausible({
      domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
      apiHost: process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST,
    });
    plausible.enableAutoPageviews();
  }
};
