"use client";
import Image from "next/image";
import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

export function FeaturedArticle({
  featuredImage,
  title,
  blogTitle,
  category,
  trackingLabel,
  content,
  author,
  postLink,
}: {
  featuredImage?: string;
  blogTitle?: string;
  postLink: string;
  title?: ReactNode;
  category?: string;
  content?: ReactNode;
  author?: string;
  trackingLabel?: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl w-full">
      <div className="relative">
        <Link
          href={postLink}
          onClick={() =>
            sendGTMEvent({
              event: "cta_click",
              cta_label: `blog_featured_${(trackingLabel || blogTitle || postLink).toString().replace(/\s+/g, "_")}`,
            })
          }
        >
          <div className="relative rounded-[32px] overflow-hidden min-h-[600px] flex flex-col justify-between p-12">
            <Image
              src={
                featuredImage ||
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              }
              alt="Autumn leaves in coffee mug on books"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10">
              <h1 className="text-3xl lg:text-4xl font-serif text-white leading-tight">
                {title}
              </h1>
            </div>
          </div>
          <div className="absolute -bottom-7 left-0 w-full right-0 z-10">
            <div className="bg-[#2C3E5C] justify-self-center w-60 text-center text-white px-8 py-4 rounded-full text-lg font-medium">
              {category}
            </div>
          </div>
        </Link>
      </div>

      <Card className="bg-[#0F1419] rounded-[32px] mt-10 px-4 lg:mt-0 lg:p-12 flex flex-col justify-between">
        <CardHeader className="space-y-8">
          <h2 className="text-xl font-sans font-bold text-white leading-tight overflow-hidden text-ellipsis">
            {blogTitle}
          </h2>
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter className="text-right">
          <p className="text-white/70 text-lg italic">Por {author}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
