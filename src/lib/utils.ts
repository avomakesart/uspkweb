import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import {} from "react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import urlBuilder from "@sanity/image-url";
import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const withCallbacks = <Args extends unknown[], T extends any>(
  fn: (...args: Args) => Promise<T>
): ((...args: Args) => Promise<T>) => {
  return async (...args: Args) => {
    const promise = fn(...args);

    return promise;
  };
};

const builder = imageUrlBuilder(client)

export function getSanityImage(source: SanityImageSource) {
  return builder.image(source)
}