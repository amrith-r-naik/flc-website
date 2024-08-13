import { type  FC } from 'react';
import Background from '../background';




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
        <Background/>
      </div>
    <div className="   ">
      {/* Header Section */}
      <header className=" py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="heading font-bold text-center e">{title}</h1>
          <p className="subheading text-center mt-2 ">{subtitle}</p>
          {lastUpdated && (
            <p className="caption text-sm  mt-1">Last updated on {lastUpdated}</p>
          )}
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-8  ">
        {sections.map((section, index) => (
          <section key={index} className="bg-gradient p-6 mb-8 rounded-lg shadow-md">
            {section.heading && (
              <h2 className="mb-4 text-2xl font-semibold">{section.heading}</h2>
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
