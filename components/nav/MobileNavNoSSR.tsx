"use client";

import * as React from "react";
import { MobileNav } from "./MobileNav";

/**
 * Prevent SSR for MobileNav to avoid Radix/Dialog hydration attribute mismatches
 * (e.g. aria-controls ids differing between server/client).
 */
export function MobileNavNoSSR() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <MobileNav />;
}


