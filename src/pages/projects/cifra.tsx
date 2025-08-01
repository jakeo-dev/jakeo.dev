import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import ProjectCover from "@/components/projects/ProjectCover";
import Paper from "@/components/Paper";

export default function Cifra() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO: About Cifra</title>
        <meta property="og:title" content="JakeO: About Cifra" />
        <meta
          property="og:description"
          content="Cifra is a website that lets you generate vanity phone numbers from an inputted phone number."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      <ProjectCover
        title="Cifra"
        desc="Generate vanity numbers from your own phone number to make it unforgettable."
        createDate="February 2023"
        updateDate="March 2025"
        logoImg="https://cifra.jakeo.dev/cifra-logo.png"
        toolsList={["JavaScript", "Tailwind"]}
        titlePinColor={2}
      />

      <div className="container mx-auto mt-6">
        <ImageCarousel
          imagePosition="object-top"
          images={[
            {
              src: "/images/cifra-ss-1.png",
              alt: "Screenshot of Cifra showing vanity numbers generated from an inputted phone number",
            },
            {
              src: "/images/cifra-ss-2.png",
              alt: "Screenshot of Cifra showing vanity numbers generated from an inputted phone number",
            },
            {
              src: "/images/cifra-ss-3.png",
              alt: "Screenshot of Cifra showing vanity numbers generated from an inputted phone number",
            },
          ]}
        />
      </div>

      <div className="my-6 flex flex-col gap-3 md:flex-row">
        <Button href="https://cifra.jakeo.dev" bgColor={2}>
          Visit website
        </Button>
        <Button href="https://github.com/jakeo-dev/cifra">View GitHub</Button>
      </div>

      <Paper speed="off" pinColor={2}>
        <p className="text">
          Cifra is a website that lets you generate vanity phone numbers from an
          inputted phone number. I made the first version in February 2023, and
          later updated it in January 2024 to make the generation more
          efficient.
        </p>
        <p className="text">
          In short, to generate all possible vanity phone numbers, Cifra
          converts every word in a word list to a string of numbers
          corresponding to the digits on the typical telephone keypad, checks if
          any of those numbers match with the inputted phone number, replaces
          the matched digits with the corresponding word, and finally displays
          each vanity number. For a more in-depth explanation, read my blog
          post:{" "}
          <Link
            href="/blog/dialing-letters-instead-of-digits"
            className="internal-link"
          >
            Dialing Letter Instead of Digits
          </Link>
          .
        </p>
        <p className="text">
          The word "cifra" (pronounced SEE-fra) is a Spanish word that can be
          translated to "number," "figure," or "cipher."
        </p>
        <p className="text">
          The logo shows the word "Cifra" with the letters' corresponding
          telephone keypad digits in front of it.
        </p>
      </Paper>
    </>
  );
}
