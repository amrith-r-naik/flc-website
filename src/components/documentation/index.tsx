import React, { type FC } from "react";

import Background from "~/pages/events/particlesBackground";

interface DocumentPageProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  sections: {
    heading?: string;
    content: string[];
  }[];
  contactEmail?: string;
}

const DocumentPage: FC<DocumentPageProps> = ({
  title,
  subtitle,
  lastUpdated,
  sections,
}) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <Background />
      </div>
      <div className="   ">
        {/* Header Section */}
        <header className=" py-4 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="heading text-center font-bold text-white">
              {title}
            </h1>
            <p className="subheading mt-2 text-center text-white">{subtitle}</p>
            {lastUpdated && (
              <p className="caption mt-1 text-sm text-white">
                Last updated on {lastUpdated}
              </p>
            )}
          </div>
        </header>

        {/* Content Section */}
        <main className="container mx-auto px-4 py-8  ">
          {sections.map((section, index) => (
            <section
              key={index}
              className="mb-8 rounded-lg bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 p-6 shadow-md"
            >
              {section.heading && (
                <h2 className="mb-4 text-2xl font-semibold">
                  {section.heading}
                </h2>
              )}
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </main>
      </div>
    </>
  );
};

export default DocumentPage;
