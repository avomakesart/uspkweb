import { BlogPostsSlider } from "@/components/blog-posts-slider";
import { Container } from "@/components/container";
import { FeaturedArticle } from "@/components/featured-article";
import { getSanityImage } from "@/lib/utils";
import { client } from "@/sanity/client";
import { SanityDocument } from "@sanity/client";
import { Metadata } from "next";
import Image from "next/image";

const BLOG_POSTS_QUERY = `*[_type == "post"]{ _id, title, slug, publishedAt, image, isFeatured, body, author->{
_id,
name,
picture
}, category->{
  name,
  description,
  picture
} }`;

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  image: { asset: { _ref: string } };
  body: any[];
  author: {
    name: string;
  };
  category: {
    name: string;
  };
  isFeatured: boolean;
  publishedAt: string;
};

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explora nuestro blog para descubrir consejos, recursos y novedades sobre el aprendizaje del inglés. Encuentra artículos diseñados para ayudarte a mejorar tus habilidades lingüísticas y mantenerte motivado en tu camino hacia la fluidez.",
  keywords: [
    "Blog de inglés",
    "Consejos para aprender inglés",
    "Recursos de inglés",
    "Novedades sobre el aprendizaje de idiomas",
    "Artículos de inglés",
    "Mejorar habilidades lingüísticas",
    "Motivación para aprender inglés",
    "Uspk English",
  ],
};

export default async function BlogPage() {
  const blogPosts =
    await client.fetch<SanityDocument<BlogPost[]>>(BLOG_POSTS_QUERY);

  const featuredBlogPosts = blogPosts?.filter((item) => item.isFeatured);

  return (
    <>
      <section className="relative px-6 py-32 overflow-hidden" id="hero-blog">
        <Container variant="beige" className="max-w-7xl">
          <div className="flex flex-col gap-10 lg:flex-row items-center justify-between">
            <div className="flex flex-col items-start gap-8 lg:max-w-xl max-w-2xl">
              <h1 className="text-5xl text-brand-blue font-bold">
                Explora ideas, tips y{" "}
                <span className="text-brand-yellow-dark">
                  recursos para tu inglés
                </span>
              </h1>
              <div className="flex items-start flex-col gap-6">
                <p className="text-lg">
                  Descubre artículos con tips prácticos, recursos y curiosidades
                  del inglés.{" "}
                </p>
                <p className="text-lg">
                  Desde mejorar tu pronunciación hasta entender tradiciones
                  anglosajonas, aquí encontrarás ideas que harán tu aprendizaje
                  más auténtico y aplicable en tu vida diaria.
                </p>
              </div>
            </div>

            <div className="xl:absolute xl:-right-32">
              <div className="relative">
                <Image
                  src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/blog-her-2.png"
                  alt="A woman in a computer"
                  width={600}
                  height={600}
                  className="z-20 relative rounded-4xl"
                />
              </div>
            </div>
          </div>
        </Container>
        <Image
          src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/cbe67f60-1747-4f5b-b5f3-605588150b00.svg"
          alt="Decorator"
          width={900}
          height={900}
          className="absolute hidden xl:block -top-40 z-10 -right-60"
        />
      </section>

      <section className="relative px-6 py-32 overflow-hidden" id="hero-blog">
        <Container variant="beige">
          <FeaturedArticle
            postLink={`/blog/post/${featuredBlogPosts[0].slug.current}`}
            title={<>{featuredBlogPosts[0].title}</>}
            blogTitle={featuredBlogPosts[0].title}
            featuredImage={getSanityImage(
              featuredBlogPosts[0].image.asset._ref
            ).url()}
            author={featuredBlogPosts[0].author.name}
            category={featuredBlogPosts[0].category.name}
            content={
              <div className="flex flex-col gap-4">
                {featuredBlogPosts[0].body?.map((content) =>
                  content.children.map((content: any) => (
                    <p
                      className="text-white/90 text-lg break-all leading-relaxed"
                      key={content._key}
                    >
                      {content.text.slice(0, 90)}
                    </p>
                  ))
                )}
              </div>
            }
          />
        </Container>
      </section>

      <section className="relative px-6 py-32 overflow-hidden" id="hero-blog">
        <BlogPostsSlider posts={blogPosts} />
      </section>
    </>
  );
}
