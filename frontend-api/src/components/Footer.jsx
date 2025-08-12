import '../App.css'
import facebookIcon from "../assets/icons/facebook.svg";
import twitterIcon from '../assets/icons/twitter.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import whatsappIcon from '../assets/icons/whatsapp.svg';



function Footer() {
  return (
    <footer className="footer">
      <span>Copyright &copy; 2025</span>
      <span>-</span>
      <a href="tel:123456789" className="footer__phone">0810-888-1234</a>
      <span>-</span>
      <span>Seguinos en nuestras redes</span>
      <a className="footer__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <img src={facebookIcon} alt="Facebook" className='footer__icon'/>
      </a>
      <a className="footer__link" href="https://twitter.com/" target="_blank" rel="noreferrer">
        <img src={twitterIcon} alt="Twitter" className='footer__icon' />
      </a>
      <a className="footer__link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <img src={instagramIcon} alt="Instagram" className='footer__icon'/>
      </a>
      <a className="footer__link" href="https://whatsapp.com/" target="_blank" rel="noreferrer">
        <img src={whatsappIcon} alt="WhatsApp" className='footer__icon'/>
      </a>
    </footer>
  );
}

export default Footer;
