"use client"

import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"
import { getSanityImage } from "@/lib/utils"
import { sendGTMEvent } from "@next/third-parties/google"

type BlogPost = {
  _id: string
  title: string
  slug: { current: string }
  image: { asset: { _ref: string } }
  body: any[]
  author: {
    name: string
  }
  category: {
    name: string
  }
  isFeatured: boolean
  publishedAt: string
}

export function BlogPostsSlider({ posts }: { posts: BlogPost[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useState(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  })

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4 lg:-ml-6">
          {posts
            .filter((item) => !item.isFeatured)
            .sort((a, b) => {
              const ta = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
              const tb = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
              return tb - ta
            })
            .map((blogPost) => (
              <CarouselItem
                key={blogPost._id}
                className="pl-2 sm:pl-3 md:pl-4 lg:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 relative"
              >
                <Link
                  href={`/blog/post/${blogPost.slug.current}`}
                  onClick={() =>
                    sendGTMEvent({
                      event: "cta_click",
                      cta_label: `blog_post_click_${blogPost.slug.current}`,
                    })
                  }
                >
                  <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[32px] overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12">
                    <Image
                      src={getSanityImage(blogPost.image.asset._ref).url() || "/placeholder.svg"}
                      alt={blogPost.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20" />

                    <div className="relative z-10">
                      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-white leading-tight">
                        {blogPost.title}
                      </h1>
                    </div>
                  </div>
                </Link>
                <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-4 sm:pb-6 md:pb-8 lg:pb-12">
                  <div className="bg-[#2C3E5C] text-center text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
                    {blogPost.category.name}
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>

        {posts.length > 4 && (
          <>
            <CarouselPrevious className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 hidden lg:flex -left-2 md:-left-16 lg:-left-3 bg-white/90 hover:bg-white shadow-xl border-0" />
            <CarouselNext className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 hidden lg:flex -right-2 md:-right-16 lg:-right-3 bg-white/90 hover:bg-white shadow-xl border-0" />

            <div className="flex flex-col items-center gap-4 mt-6 sm:mt-8 lg:mt-0">
              {/* Mobile/Tablet buttons */}
              <div className="flex lg:hidden gap-2">
                <CarouselPrevious className="h-10 w-10 sm:h-12 sm:w-12 bg-white/90 hover:bg-white shadow-xl border-0 static" />
                <CarouselNext className="h-10 w-10 sm:h-12 sm:w-12 bg-white/90 hover:bg-white shadow-xl border-0 static" />
              </div>

              {/* Dot indicators */}
              <div className="flex justify-center gap-1.5 sm:gap-2 lg:mt-4 flex-wrap">
                {posts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      index === current ? "w-6 sm:w-8 bg-slate-700" : "w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to post ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </Carousel>
    </div>
  )
}
