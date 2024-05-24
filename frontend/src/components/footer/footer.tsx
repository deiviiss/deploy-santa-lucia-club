import React from "react";
import { Link } from "@nextui-org/react";
import { LinkedinIcon, YoutubeIcon, FacebookIcon, InstagramIcon, GithubIcon, Logo } from "./assets";

type Props = {};

export function Footer({}: Props) {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="#" className="flex items-center text-black">
              <Logo />
              <h3 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Club Social X
              </h3>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 sm:mb-2">
                  <Link href="#" className="hover:underline text-gray-500">
                    Discord Server
                  </Link>
                </li>
                <li className="mb-4 sm:mb-2">
                  <Link href="#" className="hover:underline text-gray-500">
                    Twitter
                  </Link>
                </li>
                <li className="mb-4 sm:mb-2">
                  <Link href="#" className="hover:underline text-gray-500">
                    Facebook
                  </Link>
                </li>
                <li className="mb-4 sm:mb-2">
                  <Link href="#" className="hover:underline text-gray-500">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-gray-500">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-gray-500">
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-gray-500">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href="#" className="hover:underline text-gray text-sm">
              Club Social X™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 items-center">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FacebookIcon />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <LinkedinIcon />
              <span className="sr-only">Linkedin Page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <YoutubeIcon />
              <span className="sr-only">Youtube Page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <InstagramIcon />
              <span className="sr-only">Instagram Page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <GithubIcon />
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
