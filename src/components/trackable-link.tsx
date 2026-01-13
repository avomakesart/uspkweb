"use client";

import Link, { LinkProps } from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { PropsWithChildren } from "react";

interface TrackableLinkProps extends LinkProps {
  ctaLabel: string;
  eventName?: string;
  className?: string;
  children: React.ReactNode;
}

export function TrackableLink({
  ctaLabel,
  eventName = "cta_click",
  children,
  ...linkProps
}: PropsWithChildren<TrackableLinkProps>) {
  return (
    <Link
      {...linkProps}
      onClick={(evt) => {
        if (typeof linkProps.onClick === "function") {
          linkProps.onClick(evt);
        }
        if (evt.defaultPrevented) return;
        sendGTMEvent({ event: eventName, cta_label: ctaLabel });
      }}
    >
      {children}
    </Link>
  );
}
