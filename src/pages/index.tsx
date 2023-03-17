import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazing Cats</title>
        <meta name="description" content="Catalog of cat breeds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pawprint.png" title="cat icon" />

        {/* <!-- Open Sans Font --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <h1 className="text-primary font-bold"> Cats Content </h1>
      </main>
    </>
  );
}
