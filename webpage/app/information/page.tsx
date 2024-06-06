import Image from "next/image";
import logoCAM from "../../public/images/logoCAM.svg";

import Link from "next/link";

export default function InformationPage() {
  return (
    <main className="flex flex-col gap-5 max-w-6xl px-3 text-xl">
      <div className="text-2xl font-semibold text-center">
        Thank you for checking out our Cognitive Affective Map tools!
      </div>

      <div className="mb-5">
        If you just want to try out our tools hands on, please read the
        <Link href="/getstarted" className="px-1 text-gray-500 hover:underline">
          Get Started
        </Link>
        page.
      </div>

      <div className="grid grid-cols-2 gap-0">
        <div className="flex justify-center items-center">
          <Image src={logoCAM.src} width={300} height={300} alt="CAM logo" />
        </div>
        <div className="text-xl font-semibold text-left">
          Cognitive-Affective Maps (CAM) tools encompass the following tools:
          <p className="text-xl font-light">
            <ul className="list-disc space-y-2 px-14 mt-5">
              <li>
                <span className="font-bold">data collection</span> -
                Cognitive-Affective Map extended logic (C.A.M.E.L.)
              </li>
              <li>
                <span className="font-bold">data analysis</span> - CAM-App
                (Shiny)
              </li>
              <li>
                <span className="font-bold">administrative panel</span> - for
                setting up studies with different designs (you are currently on)
              </li>
            </ul>
            <p className="mt-5">
              For detailed information and how to register have a look in our
              <Link
                href="https://osf.io/q5hj4/"
                className="px-1 text-blue-500 hover:underline"
                target="_blank"
              >
                Online Documentation
              </Link>
            </p>
          </p>
        </div>
      </div>

      <div className="text-xl font-semibold text-center">
        No coding is required:
      </div>

      <ul className="list-disc space-y-5 px-14">
        <li>
          It is possible to set up CAM studies using a visual interface and all
          kind of adjustments are possible (see
          <Link
            href="https://camtools-documentation.readthedocs.io/en/master/Cognitive-Affective%20Map%20extended%20logic/#define-your-config-file"
            className="px-1 text-blue-500 hover:underline"
            target="_blank"
          >
            Config file documentation
          </Link>
          for details).
        </li>
        <li>
          Thanks to our ready-made example studies, constructing studies
          couldn't be easier (see
          <Link
            href="https://camtools-documentation.readthedocs.io/en/master/Set%20up%20study/#example-studies"
            className="pl-1 text-blue-500 hover:underline"
            target="_blank"
          >
            example studies
          </Link>
          ).
        </li>
        <li>
          Using the visual interface of the CAM-App data can be easily
          summarized and analyzed (select
          <Link
            href="https://camtools-documentation.readthedocs.io/en/master/CAM-App/"
            className="pl-1 text-blue-500 hover:underline"
            target="_blank"
          >
            CAM-App documentation
          </Link>
          ).
        </li>
      </ul>

      <div className="text-xl font-semibold text-center">
        Flexible and extensible:
      </div>

      <ul className="list-disc space-y-5 px-14">
        <li>
          There are no limits: If it's possible on a web page, you can
          theoretically implement it in the C.A.M.E.L. software.
        </li>
        <li>
          Set up the C.A.M.E.L. software on your own server to have full
          control. Here it is possible to implement even more advanced features
          (for inspiration see future features sections in the documentation).
        </li>
        <li>
          If you want to extend the features of the CAM-App you can freely
          adjust our written functions in R or write your own (check out our
          source code).
        </li>
      </ul>

      <div className="text-xl font-semibold text-center">
        There's so much more:
      </div>

      <div className="grid grid-cols-2 gap-0">
        <div className="text-xl font-medium text-left">
          Start learning:
          <p className="text-xl font-light">
            <ul className="list-disc space-y-2 px-6 mt-3">
              <li>
                Learn the
                <Link
                  href="https://camtools-documentation.readthedocs.io/en/master/Cognitive-Affective%20Maps/#what-are-cognitive-affective-maps"
                  className="px-1 text-blue-500 hover:underline"
                  target="_blank"
                >
                  theoretical background
                </Link>
                of Cognitive-Affective Maps and see
                <Link
                  href="https://camtools-documentation.readthedocs.io/en/master/Cognitive-Affective%20Maps/#what-are-the-advantages-of-using-cognitive-affective-maps"
                  className="px-1 text-blue-500 hover:underline"
                  target="_blank"
                >
                  how this method can help you
                </Link>
                with your research.
              </li>
              <li>
                Check out our
                <Link
                  href="https://www.youtube.com/channel/UC4pzmfkNS_P-W6CByGyVYlg"
                  className="px-1 text-blue-500 hover:underline"
                  target="_blank"
                >
                  Youtube Channel
                </Link>
                for introductory videos and build your first study after logging
                in minutes.
              </li>
            </ul>
          </p>
        </div>
        <div className="text-xl font-medium text-left">
          Get help:
          <p className="text-xl font-light">
            <ul className="list-disc space-y-2 px-6 mt-3">
              <li>
                You'll always find friendly people in our
                <Link
                  href="https://join.slack.com/t/cognitiveaffe-um96332/shared_invite/zt-1cybwr0tf-u2PWQh4L3BP3tuxLuH4c5w"
                  className="px-1 text-blue-500 hover:underline"
                  target="_blank"
                >
                  Slack channel
                </Link>
                . We're happy to help!
              </li>
              <li>
                Learning to build Cognitive-Affective Maps studies is most fun
                in a group. We offer workshops tailored to your needs (send an
                E-Mail to:
                <Link
                  href="mailto: cam.contact@drawyourminds.de"
                  className="px-1 text-blue-500 hover:underline"
                >
                  cam.contact@drawyourminds.de
                </Link>
                ).
              </li>
              <li>
                Whether you're in a hurry or looking for a custom study, we'll
                find an expert to help you. Please get in touch (send an E-Mail
                to:
                <Link
                  href="mailto: cam.contact@drawyourminds.de"
                  className="px-1 text-blue-500 hover:underline"
                >
                  cam.contact@drawyourminds.de
                </Link>
                ).
              </li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  );
}