import CommonHead from "@/components/CommonHead";
import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRotateRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Post4() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>Dialing Letters Instead of Digits</title>
        <meta property="og:title" content="Dialing Letters Instead of Digits" />
        <meta
          property="og:description"
          content="In February 2023, I unleashed the first iteration of Cifra, my website that generates and displays as many vanity phone numbers that match an inputted phone number as fast as possible. Over the past year and a half, I've found different ways to improve the efficiency..."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://jakeo.dev/images/dialing-letters-instead-of-digits/thumbnail.png"
        />
        <meta
          name="twitter:image:src"
          content="https://jakeo.dev/images/dialing-letters-instead-of-digits/thumbnail.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
      </CommonHead>

      {/* post */}
      <h1 className="sub1title pb-0">Dialing Letters Instead of Digits</h1>

      <div className="postDatesDiv">
        <h2>
          <FontAwesomeIcon
            icon={faCalendarDay}
            className="mr-1.5"
            aria-hidden
          />
          Posted August 18, 2024
        </h2>
        <h2>
          <FontAwesomeIcon
            icon={faRotateRight}
            className="mr-1.5"
            aria-hidden
          />
          Edited August 18, 2024
        </h2>
      </div>

      <div className="postThumbImgDiv mt-6">
        <Image
          src={require("../../../public/images/dialing-letters-instead-of-digits/thumbnail.png")}
          alt="Overlapping lists of random words and numbers"
          className="postThumbImg"
          placeholder="blur"
        />
      </div>

      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:block flex-[0.3] xl:flex-[0] xl:w-0 lg:sticky top-6 self-start">
          <p className="lg:hidden block sub2title mb-0">Contents</p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2 lg:block lg:bg-gray-200/70 lg:rounded-lg lg:p-5 lg:ml-10 mb-16 lg:mt-6 lg:-mr-10 xl:-mr-64">
            <p className="hidden lg:block sub2title mt-0 pt-0">Contents</p>
            <a
              href="#generation-preparation"
              className="text sectionLink block"
            >
              Generation Preparation
            </a>
            <a
              href="#match-and-form"
              className="text sectionLink block lg:mt-4"
            >
              Match and Form
            </a>
            <a
              href="#reveal-the-numbers"
              className="text sectionLink block lg:mt-4"
            >
              Reveal the Numbers
            </a>
            <a href="#github" className="text sectionLink block lg:mt-4">
              GitHub
            </a>
          </div>
        </div>

        <div className="flex-1">
          <p className="text">
            In February 2023, I unleashed the first iteration of Cifra, my
            website that generates and displays as many vanity phone numbers
            that match an inputted phone number as fast as possible. Over the
            past year and a half, I've found different ways to improve the
            efficiency and design of the program. It required a good
            understanding of how vanity phone numbers work and an ample amount
            of time to remove the inappropriate words from the word list that I
            found online. Even though the code may seem simple, I started with
            an extremely slow and inefficient method before finding this much
            faster one, which I'll explain here.
          </p>

          <h3 className="sub1title" id="generation-preparation">
            Generation Preparation
          </h3>
          <p className="text">
            The first step in this process is to make the list of over 40,000
            words more manageable. For this specific case, we need to have two
            separate lists/arrays: one containing the words (which we already
            have), and another containing the translation of each word to how
            you would type it in the telephone number keypad.
          </p>
          <p className="text mb-0">
            The program will convert each letter of each word to the digits on
            the keypad that they correspond to. In the program, these strings of
            numbers that correspond to a word* are called "numeros." Each numero
            is added to an array called numerosArray.
          </p>
          <p className="subtext">
            More than one word can share the same numero, but this won't affect
            the program.
          </p>
          <div className="codeBlockDiv">
            <CodeBlock
              code={`numerosArray = [];

for (j = 0; j < wordsArray.length; j++) {
    numero = "";
    for (k = 0; k < wordsArray[j].length; k++) {
        numeroLetter = getNumber(wordsArray[j][k]);
        numero += numeroLetter;
    }
    numerosArray.push(numero);
}`}
            />
            <p className="subtext">
              The getNumber() function takes a letter and returns the number
              that it corresponds to on the phone keypad.
            </p>
          </div>
          <div className="md:flex md:flex-row-reverse">
            <div className="md:ml-4">
              <p className="text">
                <span className="hidden md:inline">To the left</span>
                <span className="md:hidden">Below</span> is the widely used
                standard telephone keypad. A word like "call" would be converted
                to its numero letter by letter: C to 2, A to 2, L to 5, and L to
                5, resulting in a numero of 2255.
              </p>
              <p className="subtext">
                Image by Marnanel - Own work based on: Telephone-keypad.svg by
                Silsor, CC BY-SA 3.0,{" "}
                <a
                  href="https://commons.wikimedia.org/w/index.php?curid=395327"
                  target="_blank"
                  className="link"
                >
                  https://commons.wikimedia.org/w/index.php?curid=395327
                </a>
              </p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Telephone-keypad.svg/1920px-Telephone-keypad.svg.png"
              alt="The standard telephone keypad with certain numbers corresponding to certain letters"
              className="postImg w-1/3 md:w-1/5"
            />
          </div>
          <div className="postImgDiv">
            <p className="text">
              Below is an example list of words and their corresponding numeros
              after running the code.
            </p>
            <Image
              src={require("../../../public/images/dialing-letters-instead-of-digits/visual-1.png")}
              alt={`A list of words with their corresponding "numeros"`}
              className="postImg"
              placeholder="blur"
            />
          </div>

          <h3 className="sub1title" id="match-and-form">
            Match and Form
          </h3>
          <p className="text">
            Now that the word list is in a more manageable state, let's start
            forming the vanity numbers. This is the slightly more complicated
            part.
          </p>
          <p className="sub2title">Step 1 (one-word vanity numbers)</p>
          <p className="text">
            First, the program will loop through each numero and check if the
            inputted phone number contains any of the numeros. If it does, it
            will replace that numero in the inputted phone number with the
            corresponding word. Then, it will add that vanity number to an array
            called oneNumsArray.
          </p>
          <div className="codeBlockDiv">
            <CodeBlock
              code={`for (m = 0; m < numerosArray.length; m++) {
    if (inp.includes(numerosArray[m])) {
        finalNumb = inp.replace(numerosArray[m], "-" + wordsArray[m] + "-");
        oneNumsArray.push(fixDashes(finalNumb));
    }
}`}
            />
            <p className="subtext">
              The fixDashes() function removes any duplicate dashes or any
              dashes that are at the very beginning or end of the vanity number
              so that there is only one dash between each position where a
              letter and a digit meet.
            </p>
          </div>
          <div className="postImgDiv">
            <p className="text">
              Below is an example of this step. 230-286-6911 is the inputted
              phone number, and while looping through numerosArray, it finds
              that the phone number contains a numero, 28669. It replaces the
              numero in the phone number with the word that the numero
              corresponds to, which is "bunny". It adds this new vanity phone
              number to oneNumsArray.
            </p>
            <Image
              src={require("../../../public/images/dialing-letters-instead-of-digits/visual-2.png")}
              alt={`The word "bunny" being matched to its numero, then the numero within the inputted phone number being changed to the word "bunny"`}
              className="postImg"
              placeholder="blur"
            />
          </div>
          <p className="text">
            After it finishes looping through each numero, oneNumsArray will be
            filled with every possible one-word vanity number that can be
            derived from the inputted phone number.
          </p>
          <p className="sub2title">Step 2 (two-word vanity numbers)</p>
          <p className="text">
            We don't just want vanity numbers with one word in them when we
            could have more, but repeating this process could slow down the
            program by at least several tens of milliseconds and at most several
            hundred, which equates to several years from a programmer's
            perspective.
          </p>
          <p className="text">
            So, before the process is repeated, the program should do a check to
            see if it's worth it to sacrifice a little more time to attempt to
            generate more vanity numbers.
          </p>
          <ol className="text list-decimal">
            <li className="text">
              One of the first things to check is if there have even been any
              one-word vanity numbers generated at all from the previous step.
            </li>
            <li className="text">
              Another less obvious thing to check is the digits themselves. On
              the standard telephone keypad, the numbers 0 and 1 don't
              correspond to any letters, so if those are the only digits left on
              all of the previously generated one-word vanity numbers, there's
              no point in trying to find another match with them, since there
              are none that exist. For example, it is impossible to squeeze any
              more words out of the one-word vanity number 10-PLANT-010, since
              there are no corresponding letters for any of the remaining
              digits.
            </li>
            <li className="text">
              Additionally, the shortest word in the program's word list is 3
              letters (apart from a few exceptions).
            </li>
          </ol>
          <p className="text">
            Using these important things to know, I added a statement to check
            the first and last one-word vanity numbers generated for their
            longest strings of consecutive digits from 2 to 9. If that string in
            either one of them has a length greater than 2 (at least 3) and
            there is at least one one-word vanity number generated from before,
            then the program will repeat the same process from the previous
            step, but now on the list of one-word vanity numbers.
          </p>
          <div className="codeBlockDiv">
            <CodeBlock
              code={`if (oneNumsArray.length > 0 && (numOfGoodNums(oneNumsArray[oneNumsArray.length - 1]) > 2 || numOfGoodNums(oneNumsArray[0]) > 2))`}
            />
          </div>
          <p className="text">
            It will loop through each vanity number in oneNumsArray and each
            numero to check if any of the one-word vanity numbers contain any of
            the numeros. If it does, it will replace that numero in the one-word
            vanity number with the corresponding word. Then, it will add this
            new two-word vanity number to an array called twoNumsArray.
          </p>
          <div className="codeBlockDiv">
            <CodeBlock
              code={`for (n = 0; n < oneNumsArray.length; n++) {
    for (o = 0; o < numerosArray.length; o++) {
        if (oneNumsArray[n].includes(numerosArray[o])) {
            finalNumb = oneNumsArray[n].replace(numerosArray[o], "-" + wordsArray[o] + "-");
            twoNumsArray.push(fixDashes(finalNumb));
        }
    }
}`}
            />
          </div>
          <p className="sub2title">Step 3 (three-word vanity numbers)</p>
          <p className="text">
            The same checks and processes will be repeated one last time to add
            a potential third word to the vanity numbers.
          </p>
          <div className="codeBlockDiv">
            <CodeBlock
              code={`if (twoNumsArray.length > 0 && (numOfGoodNums(twoNumsArray[twoNumsArray.length - 1]) > 2 || numOfGoodNums(twoNumsArray[0]) > 2))`}
            />
          </div>
          <div className="codeBlockDiv">
            <CodeBlock
              code={`for (p = 0; p < twoNumsArray.length; p++) {
    for (q = 0; q < numerosArray.length; q++) {
        if (twoNumsArray[p].includes(numerosArray[q])) {
            finalNumb = twoNumsArray[p].replace(numerosArray[q], '-' + wordsArray[q] + '-');
            threeNumsArray.push(fixDashes(finalNumb));
        }
    }
}`}
            />
          </div>

          <p className="sub1title" id="reveal-the-numbers">
            Reveal the Numbers
          </p>
          <p className="text">
            After all of this, we now have three arrays of vanity numbers: one
            array that has numbers with one word, another that has numbers with
            two words, and the last with three words. The program will combine
            all the arrays into one and remove any duplicate vanity numbers. It
            will then display every vanity number in a pseudo-random order,
            generally showing the vanity numbers with more, longer words first.
          </p>
          <p className="text">
            Most ten-digit phone numbers generate all their possible vanity
            numbers in about 30 to 200 milliseconds on average. Is there a more
            efficient way to do this? Almost certainly, but for me, this is fast
            enough.
          </p>

          <p className="sub1title" id="github">
            GitHub
          </p>
          <p className="text">
            You can find the full code for Cifra{" "}
            <a
              href="https://github.com/jakeo-dev/cifra"
              target="_blank"
              className="link"
            >
              on GitHub
            </a>
            .
          </p>

          <div className="text-left mt-16">
            <Link href="/blog" className="block text-xl link">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="mr-2"
                aria-hidden
              />
              Read more posts
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
