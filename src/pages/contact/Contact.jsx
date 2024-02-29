import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


import './contact.css';

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum ex rem corrupti nostrum architecto, error esse porro a explicabo.
      </Header>

      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto:support@frankzeal.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="https://m.me/frankzeal" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+2347067654893" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
