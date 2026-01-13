"use client";

import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

export function BackToBlogLink({ slug }: { slug: string }) {
  return (
    <Link
      href="/blog"
      className="hover:underline"
      onClick={() =>
        sendGTMEvent({
          event: "cta_click",
          cta_label: `blog_post_back_${slug}`,
        })
      }
    >
      ← Regresar a todos los posts
    </Link>
  );
}
