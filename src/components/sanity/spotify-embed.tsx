export default function SpotifyEmbed({ url }: { url: string }) {
  // Convert Spotify URL to embed format
  const getEmbedUrl = () => {
    // Handle spotify.com/track/xxx or spotify.com/album/xxx or spotify.com/playlist/xxx
    const match = url.match(
      /spotify\.com\/(track|album|playlist|episode)\/([a-zA-Z0-9]+)/
    );
    if (match) {
      return `https://open.spotify.com/embed/${match[1]}/${match[2]}`;
    }
    return url;
  };

  return (
    <iframe
      src={getEmbedUrl()}
      width="100%"
      height="152"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}
