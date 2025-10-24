import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityDocument } from "@sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, type PortableTextProps } from "@portabletext/react";
import { client } from "@/sanity/client";
import ReactPlayer from "react-player";
import Image from "next/image";
import SpotifyEmbed from "@/components/sanity/spotify-embed";
import SoundCloudEmbed from "@/components/sanity/soundcloud-embed";
import { Metadata, ResolvingMetadata } from "next";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const serializers: PortableTextProps["components"] = {
  types: {
    image: (props) =>
      props.value ? (
        <img
          className="rounded-lg not-prose w-full h-auto"
          src={urlFor(props.value)!
            .width(600)
            .height(400)
            .quality(80)
            .auto("format")
            .url()}
          alt={props?.value?.alt || ""}
          width="600"
          height="400"
        />
      ) : null,
    youTube: (props) => {
      return <ReactPlayer src={props.value.url} />;
    },
    audioEmbed: ({ value }) => {
      switch (value.platform) {
        case "spotify":
          return <SpotifyEmbed url={value.url} />;
        case "soundcloud":
          return <SoundCloudEmbed url={value.url} />;
        default:
          return null;
      }
    },
  },
};

export async function generateMetadata(
  { params, searchParams }: PageProps<"/blog/post/[slug]">,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slugParams = await params;

  const post = await client.fetch<SanityDocument>(POST_QUERY, slugParams);

  return {
    title: `${post.title} | Uspk English`,
    description: post.description,
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
}

export default async function Post(props: PageProps<"/blog/post/[slug]">) {
  const params = await props.params;
  const post = await client.fetch<SanityDocument>(POST_QUERY, params);

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/blog" className="hover:underline">
        ← Regresar a todos los posts
      </Link>
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl w-full"
          width={550}
          height={310}
        />
      )}
      <h1 className="text-4xl font-bold mb-8 break-all">{post.title}</h1>
      <div className="prose break-all">
        <div className="flex gap-2">
          <p className="font-bold my-0!">Publicado:</p>
          <p className="my-0!">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={serializers} />
        )}
      </div>
    </main>
  );
}
