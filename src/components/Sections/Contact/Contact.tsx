import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactCard from './ContactCard';

const contactData = [
  {
    title: 'Email',
    value: 'jorgegoes4@gmail.com',
    icon: FaEnvelope,
  },
  {
    title: 'Telefone',
    value: '(71) 9 9942-2427',
    icon: FaPhone,
  },
  {
    title: 'LinkedIn',
    value: 'Cleidson Jorge dos Santos Goes',
    icon: FaLinkedin,
  },
  {
    title: 'Github',
    value: 'CleidsonGoes',
    icon: FaGithub,
  },
];

function Contact() {
  return (
    <div className="bg-dark-600">
      <section className="max-w-screen-xl mx-auto p-8 text-white">
        <h2 className="text-2xl mb-8 font-bold text-white text-center">Contato</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {contactData.map((contact, index) => (
            <ContactCard key={ index } { ...contact } />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;
