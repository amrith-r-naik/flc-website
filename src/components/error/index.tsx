import Link from "next/link";
import { type FunctionComponent } from "react";

const Error: FunctionComponent = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="gradient mb-4 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-9xl font-extrabold tracking-tight text-transparent dark:from-yellow-400 dark:to-red-400 lg:text-[10rem]">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Oops! Page not found.
          </p>
          <p className="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, the page you’re looking for doesn’t exist. But don’t worry,
            you can find plenty of things on our homepage.
          </p>
          <Link href="/">
            <span className="inline-flex items-center justify-center rounded-lg bg-yellow-500 px-6 py-3 text-center text-lg font-medium text-white hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">
              Back to Homepage
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
