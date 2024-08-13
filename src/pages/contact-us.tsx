
import { type FC } from 'react';
import Background from './events/ParticlesBackground';
import Footer from '~/components/footer';


const ContactUs: FC = () => {
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
    <div className="  ">
      {/* Header Section */}
      <header className="shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="heading font-bold text-center">INSPIRANTE TECHNOLOGIES PRIVATE LIMITED</h1>
          <p className="subheading  text-center mt-2">Contact Us</p>
          <p className="text-center caption  mt-1">Last updated on Oct 20th 2022</p>
        </div>
      </header>
      
      {/* Content Section */}
      <main className="container mx-auto px-4 py-8 ">
        <section className=" p-6 rounded-lg shadow-md  bg-gradient ">
          <p className="text-lg font-semibold mb-4">You may contact us using the information below:</p>
          <ul className="list-none space-y-4">
            <li>
              <strong>Merchant Legal entity name:</strong> INSPIRANTE TECHNOLOGIES PRIVATE LIMITED
            </li>
            <li>
              <strong>Registered Address:</strong> 2-1-22, Bombay House, Kalsanka, Kunjibettu P O Udupi KARNATAKA 576102
            </li>
            <li>
              <strong>Operational Address:</strong> 2-1-22, Bombay House, Kalsanka, Kunjibettu P O Udupi KARNATAKA 576102
            </li>
            <li>
              <strong>Telephone No:</strong> 8197903771
            </li>
            <li>
              <strong>E-Mail ID:</strong> <a href="mailto:inspirantech@gmail.com" className="text-blue-500 hover:underline">inspirantech@gmail.com</a>
            </li>
          </ul>
        </section>
      </main>
      
      <Footer />
    </div>
    </>
  );
};

export default ContactUs;