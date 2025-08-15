import '../App.css'
import facebook from "../assets/icons/facebook.svg";
import twitter from '../assets/icons/twitter.svg';
import instagram from '../assets/icons/instagram.svg';
import whatsapp from '../assets/icons/whatsapp.svg';


function Footer() {
  return (
    <footer className="footer">
      <span>Copyright &copy; 2025</span>
      <span>-</span>
      <a href="tel:123456789" className="footer__phone">0810-888-1234</a>
      <span>-</span>
      <span>Seguinos en nuestras redes</span>
      <a className="footer__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <img src={facebook} alt="Facebook" className='footer__icon footer__icon-facebook'/>
      </a>
      <a className="footer__link" href="https://twitter.com/" target="_blank" rel="noreferrer">
        <img src={twitter} alt="Twitter" className='footer__icon footer__icon-twitter' />
      </a>
      <a className="footer__link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <img src={instagram} alt="Instagram" className='footer__icon footer__icon-instagram'/>
      </a>
      <a className="footer__link" href="https://whatsapp.com/" target="_blank" rel="noreferrer">
        <img src={whatsapp} alt="WhatsApp" className='footer__icon footer__icon-whatsapp'/>
      </a>
    </footer>
  );
}

export default Footer;
