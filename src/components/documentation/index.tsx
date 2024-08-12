// components/DocumentPage.tsx
import { type  FC } from 'react';

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
    <div className=" bg-gradient-to-b from-indigo-950 via-purple-900 to-yellow-500  ">
      {/* Header Section */}
      <header className=" shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="heading font-bold text-center text-white">{title}</h1>
          <p className="subheading text-center mt-2 text-white">{subtitle}</p>
          {lastUpdated && (
            <p className="caption text-sm text-white mt-1">Last updated on {lastUpdated}</p>
          )}
        </div>
      </header>
      
      {/* Content Section */}
      <main className="container mx-auto px-4 py-8  text-gray-900">
        {sections.map((section, index) => (
          <section key={index} className="bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 p-6 mb-8 rounded-lg shadow-md">
            {section.heading && (
              <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            )}
            {section.content.map((paragraph, idx) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}
          </section>
        ))}
      </main>
      
    </div>
  );
};

export default DocumentPage;
