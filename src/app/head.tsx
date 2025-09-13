export const metadata = {
  title: "Przebieczany",
  description: "Nowoczesne domy od dewelopera w Przebieczanach - spokojna okolica, komfort życia i świetna lokalizacja niedaleko Krakowa.",
  image: "/przebieczany_logo.svg",
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
