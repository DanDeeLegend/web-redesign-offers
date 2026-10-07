"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** The visitor's current year; the build year is used for the static HTML. */
export function CurrentYear({ fallback }: { fallback: number }) {
  return <>{useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => fallback)}</>;
}
