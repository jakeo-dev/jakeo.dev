import CommonHead from "@/components/CommonHead";
import Cover from "@/components/blog/PostCover";
import Contents from "@/components/blog/PostContents";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Paper from "@/components/Paper";
import PostFooter from "@/components/blog/PostFooter";

export default function Post1() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>AP World History: A History</title>
        <meta property="og:title" content="AP World History: A History" />
        <meta
          property="og:description"
          content="As more students enroll in Advanced Placement classes, the College Board is bound to make changes to the curriculums of their courses either to more accurately represent college-level classes or to make them easier for students. The outline and exam for the AP..."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://jakeo.dev/images/ap-world-history-a-history/thumbnail.png"
        />
        <meta
          name="twitter:image:src"
          content="https://jakeo.dev/images/ap-world-history-a-history/thumbnail.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="ap world history, world history, apwh, whap, ap, advanced placement, college board, collegeboard, apwh curriculum, apwh exam, apwh changes, apwh exam history, ap world history exam, ap world history changes, ap world history exam changes"
        />
      </CommonHead>

      {/* title and image */}
      <Cover
        title="AP World History: A History"
        date="June 13, 2023"
        img={require("/public/images/ap-world-history-a-history/thumbnail.png")}
        imgAlt="Crystal Bay at Incline Village in Nevada taken in April 2022"
        imgSubtext="Monkey Rock at Incline Village, Nevada"
      />

      {/* post */}
      <div className="lg:flex lg:flex-row-reverse">
        <Contents
          subtitles={[
            "Original 2002 Curriculum",
            "2012 Changes",
            "2017 Changes",
            "2018 Changes",
            "2020 Changes",
            "2024 Changes",
            "Exam Data",
            "References",
          ]}
        />

        <div className="flex-1">
          <Paper speed="off">
            <p className="text">
              As more students enroll in Advanced Placement classes, the College
              Board is bound to make changes to the curriculums of their courses
              either to more accurately represent college-level classes or to
              make them easier for students. The outline and exam for the AP
              World History course have changed many times since its
              introduction in 2001, but have these changes actually made the
              course easier for students?
            </p>
            <p className="text">
              I'll explore the most notable changes that the College Board has
              made to the AP World History curriculum over the past 20+ years
              and look at the exam data to determine how these changes have
              affected the performance of the test-takers.
            </p>
            <p className="text highlight mt-8 px-3">
              A green highlight indicates a change or addition from the previous
              year's curriculum
            </p>
          </Paper>

          {/* 2001-2002 */}
          <Paper
            speed="slow"
            className="sub1title w-fit"
            id="original-2002-curriculum"
          >
            <h2>Original 2002 Curriculum</h2>
          </Paper>
          <Paper speed="off">
            <p className="text">
              AP World History was introduced in the 2001-2002 school year, 46
              years after AP US History was introduced. Its first exam was taken
              by over 20,000 students, with an average score of 2.94. (For
              comparison, the most recent 2023 exam was taken by over 350,000
              students, and had an average score of 3.04)
            </p>
            <h4 className="sub3title mb-2">Time Periods</h4>
            <table className="sp-table">
              <thead className="sp-table-head">
                <tr>
                  <th className="sp-table-head-item">Period</th>
                  <th className="sp-table-head-item">Exam weight</th>
                  <th className="sp-table-head-item">Instruction time</th>
                </tr>
              </thead>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">Foundations: up to 1000 AD</td>
                  <td className="sp-table-item">14%</td>
                  <td className="sp-table-item">5 weeks</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">1000 AD - 1450</td>
                  <td className="sp-table-item">22%</td>
                  <td className="sp-table-item">8 weeks</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">1450 - 1750</td>
                  <td className="sp-table-item">22%</td>
                  <td className="sp-table-item">8 weeks</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">1750 - 1914</td>
                  <td className="sp-table-item">20%</td>
                  <td className="sp-table-item">7 weeks</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">1914 - present (2001)</td>
                  <td className="sp-table-item">22%</td>
                  <td className="sp-table-item">8 weeks</td>
                </tr>
              </tbody>
            </table>
            <h4 className="sub3title">Multiple Choice Questions (MCQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text">
                70 non-stimulus-based questions (questions that do not include
                responding to a primary or secondary source)
              </li>
              <li className="text">55 minutes</li>
              <li className="text">~47 seconds per question</li>
              <li className="text">50% of exam score</li>
              <li className="text">
                1/4 of a point was deducted from the overall MCQ score for each
                incorrect question
              </li>
            </ul>
            <h4 className="sub3title">Document-Based Question (DBQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text">4 - 10 documents</li>
              <li className="text">
                50 minutes with a 10-minute built-in reading period
              </li>
              <li className="text">16.6% of exam score</li>
              <li className="text">
                Rubric:
                <table className="sp-table mt-4 -ml-6 md:-ml-10">
                  <thead className="sp-table-head">
                    <tr>
                      <th className="sp-table-head-item">Description</th>
                      <th className="sp-table-head-item w-24">Points (9)</th>
                    </tr>
                  </thead>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">An acceptable thesis</td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Uses at least all but one of the documents
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Supports thesis with evidence from documents
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Understands the purpose of at least all but one of the
                        documents
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Analyzes bias or point of view in at least 2 documents
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Groups documents in 1, 2, or 3 different ways depending
                        on the prompt
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Identifies one type of appropriate additional document
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Expanded Core: expands beyond the basic core (can only
                        earn points in the expanded core after earning all 7
                        previous points). This can be earned in several
                        different ways, including:
                        <ul className="list-disc pl-6 md:pl-10">
                          <li className="sp-table-list-item">
                            A clear, analytical, and comprehensive thesis
                          </li>
                          <li className="sp-table-list-item">
                            Analyzes the bias or point of view of multiple
                            documents
                          </li>
                          <li className="sp-table-list-item">
                            Analyzes document in additional ways: groupings,
                            comparisons, synthesis
                          </li>
                          <li className="sp-table-list-item">
                            Uses evidence not found in the documents
                          </li>
                          <li className="sp-table-list-item">
                            Identifies more than one type of appropriate
                            additional document
                          </li>
                        </ul>
                      </td>
                      <td className="sp-table-item">2</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
            <h4 className="sub3title">Change-Over-Time Essay</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text">40 minutes</li>
              <li className="text">16.6% of exam score</li>
              <li className="text">
                Rubric:
                <table className="sp-table mt-4 -ml-6 md:-ml-10">
                  <thead className="sp-table-head">
                    <tr>
                      <th className="sp-table-head-item">Description</th>
                      <th className="sp-table-head-item w-24">Points (9)</th>
                    </tr>
                  </thead>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        An acceptable thesis that addresses the global issues
                        and time periods specified
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Addresses all parts of the prompt
                        <span className="block text-stone-600">
                          (or only addresses most parts of the prompt)
                        </span>
                      </td>
                      <td className="sp-table-item">
                        2<span className="block text-stone-600">(1)</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Supports thesis with appropriate evidence
                        <span className="block text-stone-600">
                          (or only partially supports thesis with appropriate
                          evidence)
                        </span>
                      </td>
                      <td className="sp-table-item">
                        2<span className="block text-stone-600">(1)</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Uses historical context to show change over time and/or
                        continuities
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Expanded Core: expands beyond the basic core (can only
                        earn points in the expanded core after earning all 6
                        previous points). This can be earned in several
                        different ways, including:
                        <ul className="list-disc pl-6 md:pl-10">
                          <li className="sp-table-list-item">
                            A clear, analytical, and comprehensive thesis
                          </li>
                          <li className="sp-table-list-item">
                            Addresses all parts of the prompt: global issues,
                            chronology, causation, continuity, change, content
                          </li>
                          <li className="sp-table-list-item">
                            Addresses all parts of the prompt evenly
                          </li>
                          <li className="sp-table-list-item">
                            Provides links with relevant ideas, events, or
                            trends in an innovative way
                          </li>
                        </ul>
                      </td>
                      <td className="sp-table-item">3</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
            <h4 className="sub3title">Comparative Essay</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text">40 minutes</li>
              <li className="text">16.6% of exam score</li>
              <li className="text">
                Rubric:
                <table className="sp-table mt-4 -ml-6 md:-ml-10">
                  <thead className="sp-table-head">
                    <tr>
                      <th className="sp-table-head-item">Description</th>
                      <th className="sp-table-head-item w-24">Points (9)</th>
                    </tr>
                  </thead>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        An acceptable thesis that addresses the global issues
                        and time periods specified
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Addresses all parts of the prompt
                        <span className="block text-stone-600">
                          (or only addresses most parts of the prompt)
                        </span>
                      </td>
                      <td className="sp-table-item">
                        2<span className="block text-stone-600">(1)</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Supports thesis with appropriate evidence
                        <span className="block text-stone-600">
                          (or only partially supports thesis with appropriate
                          evidence)
                        </span>
                      </td>
                      <td className="sp-table-item">
                        2<span className="block text-stone-600">(1)</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Makes at least one or two relevant, direct comparisons
                        between societies
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Expanded Core: expands beyond the basic core (can only
                        earn points in the expanded core after earning all 6
                        previous points). This can be earned in several
                        different ways, including:
                        <ul className="list-disc pl-6 md:pl-10">
                          <li className="sp-table-list-item">
                            A clear, analytical, and comprehensive thesis
                          </li>
                          <li className="sp-table-list-item">
                            Addresses all parts of the prompt: comparisons,
                            chronology, causation, connections, themes,
                            interactions, content
                          </li>
                          <li className="sp-table-list-item">
                            Relates comparisons to a larger global context
                          </li>
                          <li className="sp-table-list-item">
                            Makes direct comparisons consistently between
                            societies
                          </li>
                        </ul>
                      </td>
                      <td className="sp-table-item">3</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </Paper>

          {/* 2011-2012 */}
          <Paper speed="slow" className="sub1title w-fit" id="2012-changes">
            <h2>2012 Changes</h2>
          </Paper>
          <Paper speed="off">
            <p className="text">
              In 2012, the main point of the changes made was to make the exam
              easier and the curriculum more straightforward. Date ranges and
              exam weights of some time periods were updated, and each period
              was given a unique title. The requirements for the DBQ were
              further specified in the rubric. The MCQ was made easier by
              reducing the number of possible answers and getting rid of the 1/4
              point penalty for each incorrect answer.
            </p>
            <h4 className="sub3title mb-2">Time Periods</h4>
            <table className="sp-table mt-4">
              <thead className="sp-table-head">
                <tr>
                  <th className="sp-table-head-item">Title</th>
                  <th className="sp-table-head-item">Date range</th>
                  <th className="sp-table-head-item">Exam weight</th>
                </tr>
              </thead>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item highlight">
                    Technological and Environmental Transformations
                  </td>
                  <td className="sp-table-item highlight">8000 - 600 BC</td>
                  <td className="sp-table-item highlight">5%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item highlight">
                    Organization and Reorganization of Human Societies
                  </td>
                  <td className="sp-table-item highlight">600 BC - 600 AD</td>
                  <td className="sp-table-item highlight">15%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item highlight">
                    Regional and Transregional Interactions
                  </td>
                  <td className="sp-table-item highlight">600 AD - 1450</td>
                  <td className="sp-table-item">20%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item highlight">
                    Global Interactions
                  </td>
                  <td className="sp-table-item">1450 - 1750</td>
                  <td className="sp-table-item">20%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item highlight">
                    Industrialization and Global Integration
                  </td>
                  <td className="sp-table-item highlight">1750 - 1900</td>
                  <td className="sp-table-item">20%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item highlight">
                    Accelerating Global Change and Realignments
                  </td>
                  <td className="sp-table-item highlight">
                    1900 - present (2001)
                  </td>
                  <td className="sp-table-item">20%</td>
                </tr>
              </tbody>
            </table>
            <h4 className="sub3title">Multiple Choice Questions (MCQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text highlight">
                Points are no longer deducted for incorrect answers
              </li>
              <li className="text highlight">
                Questions now have four possible answers instead of five
              </li>
            </ul>
            <h4 className="sub3title">Document-Based Question (DBQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text">
                Rubric:
                <table className="sp-table mt-4 -ml-6 md:-ml-10">
                  <thead className="sp-table-head">
                    <tr>
                      <th className="sp-table-head-item">Description</th>
                      <th className="sp-table-head-item w-24">Points (9)</th>
                    </tr>
                  </thead>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">An acceptable thesis</td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Addresses all documents and demonstrates an
                        understanding of at least all but one of the documents
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Supports thesis with evidence from at least all but one
                        of the documents
                        <span className="block text-stone-600">
                          (or only supports thesis with evidence from at least
                          all but two of the documents)
                        </span>
                      </td>
                      <td className="sp-table-item">
                        2<span className="block text-stone-600">(1)</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Analyzes bias or point of view in at least 2 documents
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Groups documents in 2 or 3 different ways depending on
                        the prompt
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Identifies one type of appropriate additional document
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Expanded Core: expands beyond the basic core (can only
                        earn points in the expanded core after earning all 7
                        previous points). This can be earned in several
                        different ways, including:
                        <ul className="list-disc pl-6 md:pl-10">
                          <li className="sp-table-list-item">
                            A clear, analytical, and comprehensive thesis
                          </li>
                          <li className="sp-table-list-item">
                            Analyzes the bias or point of view of multiple
                            documents
                          </li>
                          <li className="sp-table-list-item">
                            Analyzes document in additional ways: groupings,
                            comparisons, synthesis
                          </li>
                          <li className="sp-table-list-item">
                            Uses evidence not found in the documents
                          </li>
                          <li className="sp-table-list-item highlight">
                            Explains why additional types of documents are
                            needed
                          </li>
                        </ul>
                      </td>
                      <td className="sp-table-item">2</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </Paper>

          {/* 2016-2017 */}
          <Paper speed="slow" className="sub1title w-fit" id="2017-changes">
            <h2>2017 Changes</h2>
          </Paper>
          <Paper speed="off">
            <p className="text">
              The AP World History exam was completely overhauled in 2017. The
              new Short Answer Questions (SAQ) and Long Essay Question (LEQ)
              replaced the comparative and change-over-time essays. More time
              was given to complete the DBQ, and the number of documents was set
              to always be seven. The number of multiple choice questions was
              reduced to 55 and were changed to be about responding to a
              passage, image, or piece of data, instead of recalling and
              answering specific facts.
            </p>
            <h4 className="sub3title">Multiple Choice Questions (MCQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text highlight">
                55 stimulus-based questions (questions that include responding
                to a primary or secondary source)
              </li>
              <li className="text highlight">55 minutes</li>
              <li className="text highlight">60 seconds per question</li>
              <li className="text highlight">40% of exam score</li>
            </ul>
            <h4 className="sub3title highlight">
              Short Answer Questions (SAQ)
            </h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text">50 minutes</li>
              <li className="text">4 stimulus-based questions</li>
              <li className="text">12 minutes and 30 seconds per question</li>
              <li className="text">20% of exam score</li>
            </ul>
            <h4 className="sub3title">Document-Based Question (DBQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text highlight">Only 7 documents</li>
              <li className="text highlight">
                55 minutes with a 15-minute built-in reading period
              </li>
              <li className="text highlight">25% of exam score</li>
              <li className="text">
                Rubric:
                <table className="sp-table mt-4 -ml-6 md:-ml-10">
                  <thead className="sp-table-head">
                    <tr>
                      <th className="sp-table-head-item">Description</th>
                      <th className="sp-table-head-item w-24">Points (7)</th>
                    </tr>
                  </thead>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        A historically defensible thesis that responds to all
                        parts of the prompt
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Describes broader historical context relevant to the
                        prompt
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Supports an argument using contradiction, corroboration,
                        or qualification with evidence
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Supports an argument in response to the prompt using at
                        least 6 documents
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Explains how the document's point of view, purpose,
                        historical context, or audience is relevant to an
                        argument for at least 4 documents
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Uses at least one additional piece of evidence not found
                        in the documents and that is relevant to the prompt
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Synthesis: Explains a connection between an argument and
                        a development in one of the following:
                        <ul className="list-disc pl-6 md:pl-10">
                          <li className="sp-table-list-item">
                            Different historical period
                          </li>
                          <li className="sp-table-list-item">
                            Geographical period
                          </li>
                          <li className="sp-table-list-item">
                            Course theme that is not the focus of the essay
                          </li>
                          <li className="sp-table-list-item">
                            Different discipline
                          </li>
                        </ul>
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
            <h4 className="sub3title highlight">Long Essay Question (LEQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text">35 minutes</li>
              <li className="text">Choose from one of two prompts</li>
              <li className="text">15% of exam score</li>
              <li className="text">
                Rubric:
                <table className="sp-table mt-4 -ml-6 md:-ml-10">
                  <thead className="sp-table-head">
                    <tr>
                      <th className="sp-table-head-item">Description</th>
                      <th className="sp-table-head-item w-24">Points (6)</th>
                    </tr>
                  </thead>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        A historically defensible thesis that responds to all
                        parts of the prompt
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Describes and explains reasons for the historical
                        continuity and change
                        <span className="block text-stone-600">
                          (or only describes the historical continuity and
                          change)
                        </span>
                      </td>
                      <td className="sp-table-item">
                        2<span className="block text-stone-600">(1)</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Supports an argument in response to the prompt using
                        specific and relevant pieces of evidence
                        <span className="block text-stone-600">
                          (or only provides pieces of evidence relevant to the
                          topic of the prompt)
                        </span>
                      </td>
                      <td className="sp-table-item">
                        2<span className="block text-stone-600">(1)</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Synthesis: Explains a connection between an argument and
                        a development in one of the following:
                        <ul className="list-disc pl-6 md:pl-10">
                          <li className="sp-table-list-item">
                            Different historical period
                          </li>
                          <li className="sp-table-list-item">
                            Geographical period
                          </li>
                          <li className="sp-table-list-item">
                            Course theme that is not the focus of the essay
                          </li>
                          <li className="sp-table-list-item">
                            Different discipline
                          </li>
                        </ul>
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </Paper>

          {/* 2017-2018 */}
          <Paper speed="slow" className="sub1title w-fit" id="2018-changes">
            <h2>2018 Changes</h2>
          </Paper>
          <Paper speed="off">
            <p className="text">
              In response to students struggling with the previous exam's free
              response questions, the SAQ, DBQ, and LEQ were majorly changed
              once again. The Synthesis point on the DBQ and LEQ was replaced
              with the less-specific Complexity point. The SAQ was changed to
              require only three out of the four questions to be answered, with
              the last two not including stimulus, and 10 minutes were taken
              from the SAQ and added to the DBQ and LEQ.
            </p>
            <h4 className="sub3title">Short Answer Questions (SAQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text highlight">40 minutes</li>
              <li className="text highlight">
                3 required questions
                <ul className="list-disc pl-6 md:pl-10">
                  <li className="text">
                    Question 1:
                    <ul className="list-disc pl-6 md:pl-10">
                      <li className="text">Only asks about periods 3-6</li>
                      <li className="text">
                        Given stimulus from a secondary source
                      </li>
                    </ul>
                  </li>
                  <li className="text">
                    Question 2:
                    <ul className="list-disc pl-6 md:pl-10">
                      <li className="text">Only asks about periods 3-6</li>
                      <li className="text">
                        Given stimulus from a primary source or image
                      </li>
                    </ul>
                  </li>
                  <li className="text">
                    Choose between:
                    <ul className="list-disc pl-6 md:pl-10">
                      <li className="text">
                        Question 3:
                        <ul className="list-disc pl-6 md:pl-10">
                          <li className="text">Only asks about periods 1-3</li>
                          <li className="text">No stimulus</li>
                        </ul>
                      </li>
                      <li className="text">
                        Question 4:
                        <ul className="list-disc pl-6 md:pl-10">
                          <li className="text">Only asks about periods 4-6</li>
                          <li className="text">No stimulus</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="text highlight">
                13 minutes and 20 seconds per question
              </li>
            </ul>
            <h4 className="sub3title">Document-Based Question (DBQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text highlight">
                60 minutes with a 15-minute built-in reading period
              </li>
              <li className="text highlight">
                The prompt can now only ask about content from periods 3 to 6
              </li>
              <li className="text">
                Rubric:
                <table className="sp-table mt-4 -ml-6 md:-ml-10">
                  <thead className="sp-table-head">
                    <tr>
                      <th className="sp-table-head-item">Description</th>
                      <th className="sp-table-head-item w-24">Points (7)</th>
                    </tr>
                  </thead>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        A historically defensible thesis that responds to the
                        prompt and establishes a line of reasoning
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Describes broader historical context relevant to the
                        prompt
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Supports an argument in response to the prompt using at
                        least 6 documents
                        <span className="highlight block text-stone-600">
                          (or only addresses the topic of the prompt using at
                          least 3 documents)
                        </span>
                      </td>
                      <td className="sp-table-item highlight">
                        2<span className="block text-stone-600">(1)</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Uses at least one additional piece of evidence not found
                        in the documents and that is relevant to the prompt
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Explains how the document's point of view, purpose,
                        historical situation, or audience is relevant to an
                        argument for at least 3 documents
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Complexity: Demonstrates a complex understanding of the
                        historical development of the prompt using evidence to
                        corroborate, qualify, or modify an argument
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
            <h4 className="sub3title">Long Essay Question (LEQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text highlight">40 minutes</li>
              <li className="text highlight">
                Choose from one of three prompts that correspond to periods 1-2,
                3-4, and 5-6
              </li>
              <li className="text">
                Rubric:
                <table className="sp-table mt-4 -ml-6 md:-ml-10">
                  <thead className="sp-table-head">
                    <tr>
                      <th className="sp-table-head-item">Description</th>
                      <th className="sp-table-head-item w-24">Points (6)</th>
                    </tr>
                  </thead>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        A historically defensible thesis that responds to the
                        prompt and establishes a line of reasoning
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Describes broader historical context relevant to the
                        prompt
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Supports an argument in response to the prompt using
                        specific and relevant pieces of evidence
                        <span className="block text-stone-600">
                          (or only provides pieces of evidence relevant to the
                          topic of the prompt)
                        </span>
                      </td>
                      <td className="sp-table-item">
                        2<span className="block text-stone-600">(1)</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Complexity: Demonstrates a complex understanding of the
                        historical development of the prompt using evidence to
                        corroborate, qualify, or modify an argument
                        <span className="block text-stone-600">
                          (or only uses comparison, causation, or CCOT to
                          structure an argument that addresses the prompt)
                        </span>
                      </td>
                      <td className="sp-table-item">
                        2<span className="block text-stone-600">(1)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </Paper>

          {/* 2019-2020 */}
          <Paper speed="slow" className="sub1title w-fit" id="2020-changes">
            <h2>2020 Changes</h2>
          </Paper>
          <Paper speed="off">
            <p className="text">
              The course outline was reorganized into units that cover the same
              time periods, but exclude all content before 1200 AD, in
              preparation for a potential AP Ancient World History course that
              will cover content from 8000 BC - 1450 AD. No other information
              regarding this future course is known.
            </p>
            <h4 className="sub3title highlight mb-2">Units</h4>
            <table className="sp-table mt-4">
              <thead className="sp-table-head">
                <tr>
                  <th className="sp-table-head-item">Unit</th>
                  <th className="sp-table-head-item">Date range</th>
                  <th className="sp-table-head-item">Exam weight</th>
                </tr>
              </thead>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">Unit 1: The Global Tapestry</td>
                  <td className="sp-table-item">1200 - 1450</td>
                  <td className="sp-table-item">8-10%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">
                    Unit 2: Networks of Exchange
                  </td>
                  <td className="sp-table-item">1200 - 1450</td>
                  <td className="sp-table-item">8-10%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">Unit 3: Land-Based Empires</td>
                  <td className="sp-table-item">1450 - 1750</td>
                  <td className="sp-table-item">12-15%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">
                    Unit 4: Transoceanic Connections
                  </td>
                  <td className="sp-table-item">1450 - 1750</td>
                  <td className="sp-table-item">12-15%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">Unit 5: Revolutions</td>
                  <td className="sp-table-item">1750 - 1900</td>
                  <td className="sp-table-item">12-15%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">
                    Unit 6: Consequences of Industrialization
                  </td>
                  <td className="sp-table-item">1750 - 1900</td>
                  <td className="sp-table-item">12-15%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">Unit 7: Global Conflict</td>
                  <td className="sp-table-item">1900 - present (2001)</td>
                  <td className="sp-table-item">8-10%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">
                    Unit 8: Cold War and Decolonization
                  </td>
                  <td className="sp-table-item">1900 - present (2001)</td>
                  <td className="sp-table-item">8-10%</td>
                </tr>
              </tbody>
              <tbody className="sp-table-row">
                <tr>
                  <td className="sp-table-item">Unit 9: Globalization</td>
                  <td className="sp-table-item">1900 - present (2001)</td>
                  <td className="sp-table-item">8-10%</td>
                </tr>
              </tbody>
            </table>
            <h4 className="sub3title">Document-Based Question (DBQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text highlight">
                The prompt can now only ask about content from units 3 to 9
              </li>
            </ul>
          </Paper>

          {/* 2023-2024 */}
          <Paper speed="slow" className="sub1title w-fit" id="2024-changes">
            <h2>2024 Changes</h2>
          </Paper>
          <Paper speed="off">
            <p className="text">
              Likely in response to declining AP US History scores, minor
              changes were made to all AP history DBQ rubrics, with a few even
              smaller changes made to the LEQ rubric, mainly making it easier to
              earn the complexity point.
            </p>
            <h4 className="sub3title">Document-Based Question (DBQ)</h4>
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text">
                Rubric:
                <table className="sp-table mt-4 -ml-6 md:-ml-10">
                  <thead className="sp-table-head">
                    <tr>
                      <th className="sp-table-head-item">Description</th>
                      <th className="sp-table-head-item w-24">Points (7)</th>
                    </tr>
                  </thead>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        A historically defensible thesis that responds to the
                        prompt and establishes a line of reasoning
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Describes broader historical context relevant to the
                        prompt
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item highlight">
                        Supports an argument in response to the prompt using at
                        least 4 documents
                        <span className="block text-stone-600">
                          (or only addresses the topic of the prompt using at
                          least 3 documents)
                        </span>
                      </td>
                      <td className="sp-table-item highlight">
                        2<span className="block text-stone-600">(1)</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Uses at least one additional piece of evidence not found
                        in the documents and that is relevant to the prompt
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row highlight">
                    <tr>
                      <td className="sp-table-item">
                        Explains how the document's point of view, purpose,
                        historical situation, or audience is relevant to an
                        argument for at least 2 documents
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                  <tbody className="sp-table-row">
                    <tr>
                      <td className="sp-table-item">
                        Complexity: Demonstrates a complex understanding of the
                        historical development of the prompt using evidence to
                        corroborate, qualify, or modify an argument;{" "}
                        <span className="highlight inline">
                          can now also be earned by using seven documents or
                          analyzing four documents
                        </span>
                      </td>
                      <td className="sp-table-item">1</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </Paper>

          <Paper speed="slow" className="sub1title w-fit" id="exam-data">
            <h2>Exam Data</h2>
          </Paper>
          <Paper speed="off">
            <h4 className="sub3title mt-0">Percentages of Scores 2002-2023</h4>
            <Image
              src={require("/public/images/ap-world-history-a-history/percent-score-over-time-graph.svg")}
              alt="Percentages of Scores 2002-2023"
            />
            <h4 className="sub3title">Mean Score 2002-2023</h4>
            <Image
              src={require("/public/images/ap-world-history-a-history/mean-score-over-time-graph.svg")}
              alt="Mean Score 2002-2023"
            />
            <p className="text mt-6">
              Significant increases and decreases in the percentages of scores
              can be seen in the years of curriculum and exam changes,
              especially during 2011 and 2017. There was also a significant
              increase in the percentage of 1's and 2's and a decrease in the
              percentage of 3's and 4's during 2021, likely due to COVID-19. For
              the first time in the course's history, the percentage of 5's
              overtook the percentage of 1's in the most recent 2023 exam.
              Additionally, the exams from the last two years, 2022 and 2023,
              have had the highest average scores since the introduction of the
              course in 2002.
            </p>
          </Paper>

          <Paper speed="slow" className="sub1title w-fit" id="references">
            <h2>References</h2>
          </Paper>
          <Paper speed="off">
            <a
              href="https://apcentral.collegeboard.org/courses/ap-world-history/exam/past-exam-questions"
              className="text link block text-sm"
              target="_blank"
            >
              2002-2019, 2021-2022 Exam Data from the College Board
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1.5"
                aria-hidden
              />
            </a>
            <a
              href="https://reports.collegeboard.org/media/pdf/Student-Score-Distributions-2020_1.pdf"
              className="text link block text-sm"
              target="_blank"
            >
              2020 Exam Data from the College Board
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1.5"
                aria-hidden
              />
            </a>
            <a
              href="https://apcentral.collegeboard.org/courses/ap-world-history/exam#panel-1751376911-heading"
              className="text link block text-sm"
              target="_blank"
            >
              2023 Exam Data from the College Board
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1.5"
                aria-hidden
              />
            </a>
            <a
              href="/images/ap-world-history-a-history/apwh-exam-scores.pdf"
              className="text link block text-sm"
              target="_blank"
            >
              2002-2023 Exam data compiled in a spreadsheet (PDF)
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1.5"
                aria-hidden
              />
            </a>
            <a
              href="/images/ap-world-history-a-history/apwh-course-description-2002.pdf"
              className="text link block text-sm"
              target="_blank"
            >
              2002 Course Description
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1.5"
                aria-hidden
              />
            </a>
            <a
              href="/images/ap-world-history-a-history/apwh-course-description-2012.pdf"
              className="text link block text-sm"
              target="_blank"
            >
              2012 Course Description
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1.5"
                aria-hidden
              />
            </a>
            <a
              href="/images/ap-world-history-a-history/apwh-course-description-2017.pdf"
              className="text link block text-sm"
              target="_blank"
            >
              2017 Course Description
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1.5"
                aria-hidden
              />
            </a>
            <a
              href="/images/ap-world-history-a-history/apwh-course-description-2018.pdf"
              className="text link block text-sm"
              target="_blank"
            >
              2018 Course Description
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1.5"
                aria-hidden
              />
            </a>
            <a
              href="/images/ap-world-history-a-history/apwh-course-description-2020.pdf"
              className="text link block text-sm"
              target="_blank"
            >
              2020 Course Description
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1.5"
                aria-hidden
              />
            </a>
            <a
              href="/images/ap-world-history-a-history/apwh-course-description-2024.pdf"
              className="text link block text-sm"
              target="_blank"
            >
              2024 Course Description
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-1.5"
                aria-hidden
              />
            </a>
            <p className="text text-sm italic">
              Information is specified by the year that the first exam including
              those changes was administered.
            </p>
          </Paper>

          <PostFooter />
        </div>
      </div>
    </>
  );
}
