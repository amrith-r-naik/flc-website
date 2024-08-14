import React, { type FC } from "react";

import ParticlesBackground from "~/components/background/particles";

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
        <ParticlesBackground />
      </div>
      <div className="   ">
        {/* Header Section */}
        <header className=" py-4 shadow-md">
          <div className="content-container mx-auto px-4">
            <h1 className="heading text-center font-bold ">
              {title}
            </h1>
            <p className="subheading mt-2 text-center ">{subtitle}</p>
            {lastUpdated && (
              <p className="caption mt-1 text-sm ">
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
              className="mb-8 rounded-lg bg-gradient p-6 shadow-md"
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
