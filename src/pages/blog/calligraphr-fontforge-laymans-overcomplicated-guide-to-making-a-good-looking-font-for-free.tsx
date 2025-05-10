import CommonHead from "@/components/CommonHead";
import Cover from "@/components/PostCover";
import Contents from "@/components/PostContents";
import Callout from "@/components/Callout";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Post5() {
  const [sliderValue, setSliderValue] = useState(25);

  return (
    <>
      {/* head */}
      <CommonHead>
        <title>
          {`Calligraphr + FontForge: Layman's Overcomplicated Guide to Making a Good-Looking Font for Free`}
        </title>
        <meta
          property="og:title"
          content={`Calligraphr + FontForge: Layman's Overcomplicated Guide to Making a Good-Looking Font for Free`}
        />
        <meta
          property="og:description"
          content={`In December 2024, I designed a typeface based on my handwriting using both Calligraphr and FontForge. Calligraphr is a great service that lets you create your own font, but it's really only useful if you upgrade to the Pro version. So instead of spending...`}
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://jakeo.dev/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/thumbnail.png"
        />
        <meta
          name="twitter:image:src"
          content="https://jakeo.dev/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/thumbnail.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="calligraphr, calligrapher, calligraphy, fontforge, font, typeface, handwriting, font design, font creation, font making, font tutorial, font guide"
        />
      </CommonHead>

      {/* title and image */}
      <Cover
        title="Calligraphr + FontForge: Layman's Overcomplicated Guide to Making a Good-Looking Font for Free"
        date="May 3, 2025"
        img={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/thumbnail.png")}
        imgAlt="Different letters in different fonts kerned at different amounts"
        imgSubtext=""
      />

      {/* post */}
      <div className="lg:flex lg:flex-row-reverse">
        <Contents
          subtitles={[
            "Beginning with Calligraphr",
            "Downloading from Calligraphr",
            "Uploading to FontForge",
            "Merging Fonts",
            "Making Transformations",
            "Making Precise Adjustments",
            "Kerning",
            "Previewing in FontForge",
            "Fixing Errors",
            "Generating the Final Font",
            "Now What?",
          ]}
        />

        <div className="flex-1">
          <p className="text">
            In December 2024, I designed a typeface based on my handwriting
            using both Calligraphr and FontForge{" "}
            <span className="text text-lg font-handwriting">
              (here's what it looks like)
            </span>
            . Calligraphr is a great service that lets you create your own font,
            but it's really only useful if you upgrade to the Pro version. So
            instead of spending $4 a month, you can do what I did as an amateur
            at typeface design, and spend a little more time in FontForge to
            make a good-looking font.
          </p>
          {/* <p className="text">
            The basic summary of what we'll do is: draw the characters, compile
            them into a font file using Calligraphr, make alterations and kern
            the characters in FontForge, and finally download the font.
          </p> */}
          <p className="text">
            Here are links to the various websites/apps we'll use to create the
            font:
          </p>
          <ul className="text list-disc pl-6 md:pl-10">
            <li className="text">
              <a
                href="https://www.calligraphr.com/"
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                Calligraphr (free website)
              </a>
            </li>
            <li className="text">
              <a
                href="https://fontforge.org/"
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                FontForge (free app)
              </a>
            </li>
            <li className="text">
              Recommended but not necessary: image editing software like{" "}
              <a
                href="https://www.photopea.com/"
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                Photopea (free website)
              </a>
              ,{" "}
              <a
                href="https://www.adobe.com/products/photoshop/"
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                Adobe Photoshop (paid app)
              </a>
              , or{" "}
              <a
                href="https://www.adobe.com/products/illustrator/"
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                Adobe Illustrator (paid app)
              </a>
              .
            </li>
            <li className="text">
              {`Also recommended if you're using image editing software but not
              necessary: A drawing tablet (especially if you're making a
              handwriting-based font)`}
            </li>
          </ul>
          <p className="text">
            There are many other ways you can create your font. Some other
            websites/apps that I didn't use, but also seem to be good, include{" "}
            <a
              href="https://www.fontlab.com/"
              target="_blank"
              className="link"
              rel="noopener noreferrer"
            >
              FontLab (paid app)
            </a>
            ,{" "}
            <a
              href="https://birdfont.org/"
              target="_blank"
              className="link"
              rel="noopener noreferrer"
            >
              Birdfont (paid app)
            </a>
            ,{" "}
            <a
              href="https://www.fontself.com/"
              target="_blank"
              className="link"
              rel="noopener noreferrer"
            >
              Fontself (paid Adobe extension)
            </a>
            , and{" "}
            <a
              href="https://fontstruct.com/"
              target="_blank"
              className="link"
              rel="noopener noreferrer"
            >
              FontStruct (free website)
            </a>
            .
          </p>

          <h3 className="sub1title" id="beginning-with-calligraphr">
            Beginning with Calligraphr
          </h3>
          <p className="text">
            {`Start by creating an account and creating a template (in the Templates
            section) with the glyphs that you want to be included in the font.
            In the free version of Calligraphr, only 75 characters can be added
            to a single font, but you don't have to worry about this until
            later. Ignore the warning message to upgrade to the Pro version, and
            add as many characters as you like.`}
          </p>
          <p className="text">
            {`If you just want to include the most common English characters in
            your font, I recommend simply clicking "Minimal English," "Minimal
            Numbers," and "Minimal Punctuation" on the left sidebar.`}
          </p>
          <p className="text">
            Click Download Template at the top of the page. I recommend enabling
            "Draw helplines" and "Characters as background" to help with drawing
            the characters. Setting the file format to PNG instead of PDF may
            also make it easier if you plan to use image editing software. Click
            Download to download the font template file(s).
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-download-template.png")}
              alt="Calligraphr website showing a modal to download a template"
              className="postImg"
              placeholder="blur"
            />
          </div>
          <p className="text">Now you have some options:</p>
          <ul className="text list-disc pl-6 md:pl-10">
            <li className="text">
              You can print out your templates and start filling them out by
              hand, which Calligraphr recommends.
            </li>
            <li className="text">
              Alternatively, you can fill out the templates in some kind of
              image editing software, like I did. With my handwriting font, I
              found that drawing the characters on the computer using a drawing
              tablet makes the font turn out much cleaner.
            </li>
          </ul>
          <h3 className="sub1title" id="downloading-from-calligraphr">
            Downloading from Calligraphr
          </h3>
          <p className="text">
            {`After filling out the templates, you can now upload your templates
            to Calligraphr. Go to the My Fonts section > Upload Template > Choose
            File > Upload Template > Add Characters to Your Font.`}
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-preview-chars.png")}
              alt="Calligraphr website showing a modal previewing glyphs from a template"
              className="postImg"
              placeholder="blur"
            />
          </div>
          <p className="text">
            {`Here, there are some minor improvements you can make to your font,
            but I recommend waiting until you're in FontForge, where more
            precise adjustments can be made.`}
          </p>
          <p className="text">
            {`To download your font, click Build Font > Build > click the text in
            the top left that says the name of the font file. I recommend downloading
            as .ttf since that is what I used.`}
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-download-font.png")}
              alt="Calligraphr website showing a modal to download a font"
              className="postImg"
              placeholder="blur"
            />
          </div>
          <p className="text">
            If you have more than 75 characters in your font, the free version
            of Calligraphr will only use 75 of them when downloading the font.
            To work around this, download the font as normal at first, delete
            each character in Calligraphr that was included in the downloaded
            font, then download the font again.
          </p>
          <Callout>
            Do not just delete the first 75 characters. Calligraphr uses some
            other method to decide which characters are included in the font if
            you have more than 75. Just delete the ones that were included in
            the first font file.
          </Callout>
          <p className="text">
            If you have even more characters (more than 150), just repeat this
            step. You should now have one .ttf file for every 75 characters in
            your font, which we will later merge in FontForge.
          </p>
          <h3 className="sub1title" id="uploading-to-fontforge">
            Uploading to FontForge
          </h3>
          <p className="text">
            {`Before we can begin making adjustments to the font, we need to
            upload the first font file to FontForge. To do this, open the
            newly installed FontForge and use the file finder to select your
            font. Then, click OK to upload. FontForge should now have all of the
            glyphs of this font file displayed.`}
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-chars-displayed.png")}
              alt="FontForge with the uploaded font glyphs displayed"
              className="postImg"
              placeholder="blur"
            />
          </div>
          <h3 className="sub1title" id="merging-fonts">
            Merging Fonts
          </h3>
          <p className="text">
            {`If you have more than one font file, it's important to merge
            them before changing anything. Once the first font is uploaded,
            click Element > Merge Fonts... > select the second font file >
            OK > Yes. (It doesn't actually matter right now if you choose
            Yes or No for this.)`}
          </p>
          <p className="text">
            {`If you have more than two font files, just repeat this step
            again.`}
          </p>
          <p className="text">
            {`Now, FontForge should have all of the glyphs from
            your font displayed.`}
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-merge-fonts.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          <Callout>
            {`Remember to save your font whenever changes are made! Click File > Save > Save (Mac: Command+S / Windows: Control+S). FontForge saves your work as a .sfd file. We'll export the font as a .ttf file later.`}
          </Callout>
          <p className="text">
            {`If you notice that your font is missing some important
            characters that you now want to include, you can always go back
            to Calligraphr, create a new template with those characters, and
            repeat the previous steps to merge them into your font. All the
            characters should be added before we start making adjustments.`}
          </p>
          <h3 className="sub1title" id="making-transformations">
            Making Transformations
          </h3>
          <p className="text">
            {`If one of your glyphs appears a little off, you can change its size,
            positioning, rotation, and more in FontForge. First, select the glyph
            you want to change by single-clicking it. Then, go to Element > Transformations
            > Transform...`}
          </p>
          <p className="sub2title">Scaling</p>
          <p className="text">
            {`To change the size of a glyph, select "Scale..." in this Transform window
            and change the percentages for X and Y. To decrease or increase the size,
            make the percentages the same for both values, but if you want to squash
            or stretch, they can differ.`}
          </p>
          <p className="text">
            {`For this example in the image below, I reduced the size of this
            glyph to 90% of its original size. Make sure you have these same options enabled
            before transforming: "Transform Width Too," "Transform simple positioning features
            & kern pairs," and "Round To Int."`}
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-transform-glyph.png")}
              alt={`FontForge transform window with the scale option selected`}
              className="postImg w-full"
              placeholder="blur"
            />
          </div>
          <p className="text">
            {`Decreasing or increasing the size of a glyph will likely make it look
            thinner or thicker than the rest of the glyphs. To fix this, you can change
            the weight of the glyph by going to Element > Style > Change Weight... >
            change the number next to "Embolden by" by a certain number.`}
          </p>
          <p className="text">
            {`If you need the glyph to be thinner, you can enter a negative number.
            If you make it too thick or too thin, you can always undo (Mac: Command+Z / Windows: Control+Z) and
            enter a different amount.`}
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-change-weight.png")}
              alt={`FontForge change weight window with the "embolden by" input selected`}
              className="postImg w-full"
              placeholder="blur"
            />
          </div>
          <p className="sub2title">Vertical positioning</p>
          <p className="text">
            {`If one of your glyphs looks too low or too high compared to the
            others, you can change its vertical positioning. Select the glyph
            you want to change, then go to the Transform window again (Element >
            Transformations > Transform...).`}
          </p>
          <p className="text">
            {`Here, select "Move..." and enter how much you want to move the
            glyph, X for horizontally or Y for vertically. Entering a negative
            number will move the glyph left or down, while entering a positive
            number will move it right or up.`}
          </p>
          <p className="text">
            {`I recommend not changing the horizontal
            positioning, since it might mess up the kerning. Again, make sure you
            have these same options enabled before transforming: "Transform Width Too,"
            "Transform simple positioning features & kern pairs," and "Round To Int."`}
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-change-positioning.png")}
              alt={`FontForge transform window with the move option selected`}
              className="postImg w-full"
              placeholder="blur"
            />
          </div>
          <h3 className="sub1title" id="making-precise-adjustments">
            Making Precise Adjustments
          </h3>
          <p className="text">
            You may still have some glyphs that don't look quite right, even
            after scaling, moving, or rotating. Luckily, FontForge allows us to
            make even more precise adjustments.
          </p>
          <p className="text">
            Making these adjustments can be tedious, but it can really improve
            the quality of your font.
          </p>
          <div className="postImgDiv">
            <div className="relative mb-2">
              <Image
                src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-font-no-adjustments.png")}
                alt="Font with example text, before adjustments"
                className="postImg w-full"
                placeholder="blur"
              />
              <Image
                src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-font-with-adjustments.png")}
                alt="Font with example text, after adjustments"
                className="postImg w-full absolute top-0 left-0"
                placeholder="blur"
                style={{ opacity: `${sliderValue}%` }}
              />
            </div>
            <div className="">
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full"
              />
              <div className="w-full flex justify-between">
                <p className="subtext">Before adjustments</p>
                <p className="subtext text-right ">After adjustments</p>
              </div>
            </div>
          </div>
          <p className="text">
            Double-click a glyph to enter a more advanced editor window. Here,
            you can adjust the position of each point that makes up the glyph.
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-open-editor.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          {/* <p className="text">
            Remember that this is a "layman's guide"...so I don't know what each
            of the different symbols means, but I do know that moving the solid
            red circles can extend or reduce a part of the glyph, and moving
            the X does something similar, but also sort of changes the
            curvature. Feel free to experiment with the other symbols and
            buttons in this view. You can always undo your changes and exit the
            editor.
          </p> */}
          <p className="text">
            You can move around the different symbols to change the appearance
            of the glyph. Feel free to experiment with moving around the
            different points. You can always undo your changes (Mac: Command+Z /
            Windows: Control+Z) and exit the editor.
          </p>
          <p className="text">
            To move around a larger part, select a group of points by clicking
            and dragging a box around them, then click and drag one of the
            selected points.
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-precise-adjustments.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          <p className="text">
            It's important to try to keep your original handwriting style in
            each glyph and not correct each glyph too much. The final font
            should still look like something you would naturally write.
          </p>
          <h3 className="sub1title" id="kerning">
            Kerning
          </h3>
          <p className="text">
            Kerning is the spacing between different characters in a font. The
            amount of space between any two characters can vary, depending on
            how each one looks. With kerning, the font flows better, and it
            looks more natural, especially with handwriting fonts.
          </p>
          <div className="flex gap-x-4">
            <div className="postImgDiv mt-0">
              <Image
                src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-chars-unkerned.png")}
                alt={`The word "frijole" in a font with no kerning`}
                className="postImg w-full"
                placeholder="blur"
              />
              <p className="subtext">Handwriting font without kerning</p>
            </div>
            <div className="postImgDiv mt-0">
              <Image
                src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-chars-kerned.png")}
                alt={`The word "frijole" in a font with kerning`}
                className="postImg w-full"
                placeholder="blur"
              />
              <p className="subtext">Handwriting font with kerning</p>
            </div>
          </div>
          <p className="sub2title">Autokerning</p>
          <p className="text">
            FontForge has a useful tool that can automatically kern your font. I
            followed{" "}
            <a
              className="link"
              href="https://www.youtube.com/watch?v=pYcOo1yKrls"
              target="_blank"
            >
              this YouTube video
            </a>{" "}
            to autokern my own font, and I'll use the steps there to explain how
            to do it here.
          </p>
          <p className="text">
            {`Select all characters (Mac: Command+A / Windows: Control+A) > Metrics
            > Auto Width... > set the separation, min, and max all to zero > OK.`}
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-auto-width-zero.png")}
              alt={`FontForge auto width window with the separation, min, and max all set to zero`}
              className="postImg w-full"
              placeholder="blur"
            />
          </div>
          <p className="text">
            {`Next, go to Element > Font Info... > Lookups > GPOS > Add Lookup.`}
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-start-lookup.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          <p className="text">
            {`Then, next to "Type", click the dropdown, and click "Pair Position
            (kerning)."`}
          </p>
          <p className="text">
            {`In the space under where it says "Feature," click the down arrow next
            to <New> > "kern horizontal kerning" > OK.`}
          </p>
          <p className="text">{`Now this lookup has been added.`}</p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-add-lookup.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          <p className="text">
            {`Select this newly added lookup if it has not already been selected,
            then click Add Subtable > OK.`}
          </p>
          <p className="text">
            {`In this window, you can set Default Separation and Min Kern both to
            zero. If you are okay with the characters being so close that they are
            touching, select Touching. I recommend these settings, especially for
            handwriting-based fonts.`}
          </p>
          <p className="text">
            {`In the character selection area below, I recommend deselecting every
            character and then only selecting the lowercase and uppercase letters
            in both the top section and the bottom section. Kerning is unnecessary
            for other characters like numbers or symbols. Once you're finished here,
            click OK.`}
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-start-subtable.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          <p className="text">
            {`In this new window, you can view the different kerning pairs for every
            combination of two characters. You can select a pair and see how close
            those two characters will be.`}
          </p>
          <p className="text">
            {`Right now, all of your characters in these kerning pairs will likely be
            so close that they're touching. Don't worry about this for now, since we'll
            increase the space between all of the characters later.`}
          </p>
          <p className="text">
            {`When you're done, click OK to save and close the subtable window, then
            click OK again to save and close the Font Info window.`}
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-add-subtable.png")}
              alt={`FontForge subtable window with the kerning pair "Tr" selected`}
              className="postImg w-full"
              placeholder="blur"
            />
          </div>
          <p className="text">
            {`Now to increase the space between the characters, select all characters
            (Mac: Command+A / Windows: Control+A) > Metrics > Auto Width... > set the
            separation to 50, set min to 25, and set max to 25 > OK.`}
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-auto-width-new.png")}
              alt={`FontForge auto width window with the separation set to 50, min set to 25, and max set to 25`}
              className="postImg w-full"
              placeholder="blur"
            />
          </div>
          {/* <Callout>
            {`Remember to save your changes! Click File > Save > Save (Mac: Command+S / Windows: Control+S) to save as a .sfd file.`}
          </Callout> */}
          {/* <p className="text">
            {`If there is a certain pair of characters that you want to adjust, you can go back
            to Element > Font Info... > Lookups > GPOS > select the plus icon next to the lookup
            > select the subtable > Edit Data > select which pair you want to adjust > drag the
            character on the right to adjust the spacing > OK > OK.`}
          </p> */}
          <h3 className="sub1title" id="previewing-in-fontforge">
            Previewing in FontForge
          </h3>
          <p className="text">
            {`Before you download your font, you can preview it to
            make sure it all looks good by going to Window > New Metrics
            Window. If you think something doesn't look right, you can
            always go back to a previous step and adjust anything.`}
          </p>
          <p className="text">
            {`If you adjust something that changes the horizontal positioning
            of a glyph, you may need to go back and re-kern the characters.`}
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-preview-font.png")}
              alt={`FontForge metrics window showing example text in the font being worked on`}
              className="postImg w-full"
              placeholder="blur"
            />
          </div>
          <h3 className="sub1title" id="fixing-errors">
            Fixing Errors
          </h3>
          {/* <p className="text">
            There are some things in FontForge that I don't understand because
            I've never used them before, and then there are others, like the
            errors that often happen when trying to download a font, that I
            don't understand at all. To have the best possible font, you'll have
            to fix these errors. Just follow these next steps without any
            further explanation on what they mean.
          </p> */}
          <p className="text">
            There are a few common errors that FontForge will throw when trying
            to download a font. To ensure the best appearance and compatibility
            on all devices, you'll have to fix these errors.
          </p>
          <p className="subtext">
            ...but if you don't care, you can just force FontForge to download
            the font.
          </p>
          <p className="sub2title">Fixing Em Size (for TrueType)</p>
          <p className="text">
            {`First, you'll need to fix your font's "em size." For TrueType
            font files (.ttf), the "em size" needs to be a power of 2. Go to Element
            > Font Info... > General > change the number next to "Em Size" to 1024.`}
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-change-em-size.png")}
              alt={`FontForge font info window with the em size set to 1024`}
              className="postImg w-full"
              placeholder="blur"
            />
          </div>
          <p className="text">
            {`Now try generating your font by going to File > Generate Fonts...
            > Generate. If you don't get any errors, congratulations! Your new font
            is ready to be used.`}
          </p>
          <p className="text">
            {`But most likely you have several errors that need to be fixed. Click
            Review on this window to see which glyphs need fixing. After fixing an
            error for a glyph, a different error may appear for that same glyph, so
            make sure you fix all the errors before generating the font.`}
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-find-errors.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          <p className="sub2title">Fixing "Missing Points at Extrema"</p>
          <p className="text">
            {`To fix the "missing points at extrema" error, we need to add extrema to the glyph.`}
          </p>
          <p className="text">
            {`Enter the glyph editor view (by double-clicking the glyph) > select all the points of the glyph (Mac: Command+A / Windows: Control+A) > Element > Add Extrema.`}
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-fix-extrema.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          <p className="sub2title">Fixing "Wrong Direction"</p>
          <p className="text">{`To fix the "wrong direction" error, we need to fix the direction of the path of the glyph.`}</p>
          <p className="text">
            {`Enter the glyph editor view (by double-clicking the glyph) > select all the points of the glyph (Mac: Command+A / Windows: Control+A) > Element > Correct Direction.`}
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-fix-wrong-direction.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          <p className="sub2title">Fixing "Self Intersecting"</p>
          <p className="text">
            {`To fix the "self intersecting" error, we need to remove places where the glyph intersects with itself.`}
          </p>
          <p className="text">
            {`Enter the glyph editor view (by double-clicking the glyph) > select all the points of the glyph (Mac: Command+A / Windows: Control+A) > Overlap > Remove Overlap.`}
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-fix-intersecting-1.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          <p className="text">
            {`Sometimes, simply clicking Remove Overlap does not fix the
            error, so we need to find the self-intersection ourselves.
            You can use the zoom-in tool on the left sidebar to find
            where the glyph goes into itself. Then, move around whichever
            points are causing it to self-intersect.`}
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-fix-intersecting-2.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          <p className="sub2title">Fixing "Non-Integral Coordinates"</p>
          <p className="text">
            {`To fix the "non-integral coordinates" error, we need to move the position of points that are not at integer values.`}
          </p>
          <p className="text">
            {`Enter the glyph editor view (by double-clicking the glyph) > select all the points of the glyph (Mac: Command+A / Windows: Control+A) > Round > To Int.`}
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-fix-non-integral-coordinates.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          {/* <p className="text">{`something: Element > Simplify > Simplify`}</p>
          <p className="text">{`something: Element > Harmonize`}</p>
          <p className="text">
            {`self intersecting (maybe)?: Element > Overlap > Remove Overlap`}
          </p>
          <p className="text">
            {`missing points at extrema: Element > Add Extrema`}
          </p>
          <p className="text">
            {`wrong direction: Element > Correct Direction`}
          </p>
          <p className="text">
            {`non integral coordinates: Element > Round > To Int`}
          </p> */}
          <h3 className="sub1title" id="generating-the-final-font">
            Generating the Final Font
          </h3>
          <p className="text">
            {`Once all the errors are fixed (or you just stopped caring enough to fix them),
            you're ready to download your font! Go to File > Generate Fonts... > Generate.`}
          </p>
          <div className="postImgDiv">
            <video controls className="postImg w-full">
              <source
                src="/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/step-generate-font.mp4"
                type="video/mp4"
              />
              Error: your browser does not support the video tag.
            </video>
          </div>
          <h3 className="sub1title" id="now-what">
            Now What?
          </h3>
          {/* <p className="text text-lg font-handwriting">
            A typeface isn't really something people notice, but it can be one
            of the most important parts of a design. It sets the mood, whether
            it be serious, playful, modern, innovative, fancy, or something
            else. Let your designs be more personalized...now go use your font!
          </p> */}
          <p className="text text-lg font-handwriting">
            Now go use your font!!!!!!!!!
          </p>
          <div className="text-left mt-16">
            <Link
              href="/blog"
              className="block text-xl internalLink no-underline"
            >
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
