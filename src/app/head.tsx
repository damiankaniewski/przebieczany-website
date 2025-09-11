export const metadata = {
  title: "Przebieczany",
  description: "Przebieczany",
  image: "/favicon.ico",
};

export default function Head() {
  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.image} />
    </head>
  );
}
