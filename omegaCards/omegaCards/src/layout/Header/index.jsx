
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import DropDown from './DropDown';
import { useCart } from '../AppParams/AppParams.jsx'; // Importando o hook aqui
import CartModal from './../../components/CartModal.jsx'; // Importando a modal

export default function Header({ variant }) {
  const { cartProductIds } = useCart();
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant || ''} cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <div className="cs-main_header">
          <div className="container mt-0">
            <div className="cs-main_header_in">
              <div className="cs-main_header_left">
                <button type="button" className="btn cartButton btn-link position-absolute top-0 mt-4" data-bs-toggle="modal" data-bs-target="#cartModal">
                  <i className="bi bi-cart-check-fill" style={{ fontSize: '40px', color: 'rgb(240, 48, 0)' }}></i>
                  <span className="position-absolute top-0 left-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartProductIds.length}
                  </span>
                </button>


              </div>
              <div className="cs-main_header_center">
                <div className="cs-nav cs-primary_font cs-medium">
                  <ul className="cs-nav_list" style={{ display: mobileToggle ? 'block' : 'none' }}>
                    <li>
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>Início</NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink to="/calendar" onClick={() => setMobileToggle(false)}>Agendamento</NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/calendar" onClick={() => setMobileToggle(false)}>Agendamento Online</Link>
                          </li>
                          <li>
                            <Link target="_blank" to="https://api.whatsapp.com/send/?phone=5512996229081" onClick={() => setMobileToggle(false)}>Whatsapp</Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink to="/redirect" onClick={() => setMobileToggle(false)}>Serviços da Barbearia</NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/budget" onClick={() => setMobileToggle(false)}>Orçamento Online</Link>
                          </li>
                          <li>
                            <Link to="/barber" onClick={() => setMobileToggle(false)}>Promoções</Link>
                          </li>
                          <li>
                            <Link to="/barber" onClick={() => setMobileToggle(false)}>Produtos</Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <NavLink to="/contact" onClick={() => setMobileToggle(false)}>Unidades/Contato</NavLink>
                    </li>
                  </ul>
                  <span className={`cs-munu_toggle ${mobileToggle ? 'cs-toggle_active' : ''}`} onClick={() => setMobileToggle(!mobileToggle)}>
                    <span></span>
                  </span>
                </div>
              </div>

              <div className="cs-main_header_right">
                <div className="cs-toolbox">
                  {/* Botão do carrinho com contador */}
                  <span className="cs-icon_btn" onClick={() => setSideHeaderToggle(!sideHeaderToggle)}>
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* Usando a modal separada */}
      <CartModal cartProductIds={cartProductIds} />

      <div className={sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'}>
        <button className="cs-close" onClick={() => setSideHeaderToggle(!sideHeaderToggle)} />
        <div className="cs-side_header_overlay" onClick={() => setSideHeaderToggle(!sideHeaderToggle)} />
        <div className="cs-side_header_in">
          <div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src="/images/logo.png" alt="Logo" />
          </Link>
          <div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">Tem alguma ideia?<br /> Me mande pelos contatos abaixo!</h2>
          </div>
          <div className="cs-side_header_box">
            <ContactInfoWidget title="Contato:" withIcon />
          </div>
          <div className="cs-side_header_box"></div>
          <div className="cs-side_header_box">
            <SocialWidget />
          </div>
        </div>
      </div>
    </>
  );
}