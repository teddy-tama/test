import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Navbar, Container, Nav, Button, Offcanvas, NavDropdown, Form, FormControl} from 'react-bootstrap';
import EzeelinkIcon from '../assets/icon/ezee_icon.svg'
import { useHistory, Link} from 'react-router-dom';
import dropdown from '../assets/icon/dropdown.svg'
import './navbar.css'
import mobile from 'is-mobile'
import $ from 'jquery'

function NavbarComponent() {
  const history = useHistory();
  const isMobile = mobile();
    function linkToProductsAndServices(e){
    e.preventDefault();
    // history.push('/productsandservices');
    // window.location.reload();
  }
  const language = sessionStorage.getItem('lang')

  function navigateToSection(section){
    history.push('/productsandservices', {section: section});
    window.location.reload();
  }

  function navigateToAboutUs(section) {
    history.push('/AboutUs', { section: section })
    window.location.reload();
  }

  function navigateToHome(section) {
    history.push('/', { section: section })
    window.location.reload();
  }

  function careerClick() {
    
  }

  function engLang() {
    sessionStorage.setItem('lang', 'eng');
    window.location.reload();
  }

  function inaLang() {
    sessionStorage.removeItem('lang');
    window.location.reload();
  }

  return (
    <>
    <Navbar expand="lg" style={{width: '100%'}}>
      <Container>
        <Navbar.Brand href="/">
            <img alt="" src={EzeelinkIcon}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={isMobile ? {paddingLeft: '10%'} : {paddingLeft: '30%'}}>
              {
                language === 'eng' ?
                <NavDropdown title="Products & Services" onClick={(e) => linkToProductsAndServices(e)} className='item-navbar navbar-products' id="collasible-nav-dropdown">
                  <table className="table-products-item">
                    <thead>
                      <th>Corporate and SME</th>
                      <th>Consumer</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('qris')}>QRIS</NavDropdown.Item></td>                        
                        {isMobile ? 
                          <td><NavDropdown.Item onClick={() => navigateToSection('eMoney')}>Electronic <br/>Money</NavDropdown.Item></td> : 
                          <td><NavDropdown.Item onClick={() => navigateToSection('eMoney')}>Electronic Money</NavDropdown.Item></td>
                        }
                      </tr>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('trfpayment')}>Transfer Payment</NavDropdown.Item></td>
                        <td><NavDropdown.Item onClick={() => navigateToSection('voucher')}>Voucher</NavDropdown.Item></td>
                      </tr>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('wallet')}>Wallet</NavDropdown.Item></td>
                        <td><NavDropdown.Item onClick={() => navigateToSection('billsCredit')}>Bills & Credits</NavDropdown.Item></td>
                      </tr>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('loyalty')}>Loyalty</NavDropdown.Item></td>
                      </tr>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('remittance')}>Remittance</NavDropdown.Item></td>
                      </tr>
                    </tbody>
                  </table>
                </NavDropdown> :
                <NavDropdown title="Produk & Layanan" onClick={(e) => linkToProductsAndServices(e)} className='item-navbar navbar-products' id="collasible-nav-dropdown">
                  <table className="table-products-item">
                    <thead>
                      <th>Korporat & UMKM</th>
                      <th>Personal (Konsumer)</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('qris')}>QRIS</NavDropdown.Item></td>                        
                        {isMobile ? 
                          <td><NavDropdown.Item onClick={() => navigateToSection('eMoney')}>Uang <br/>Elektronik</NavDropdown.Item></td> :
                          <td><NavDropdown.Item onClick={() => navigateToSection('eMoney')}>Uang Elektronik</NavDropdown.Item></td>
                        }
                      </tr>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('trfpayment')}>Transfer Payment</NavDropdown.Item></td>
                        <td><NavDropdown.Item onClick={() => navigateToSection('voucher')}>Voucher</NavDropdown.Item></td>
                      </tr>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('wallet')}>Wallet</NavDropdown.Item></td>                        
                        {isMobile ? 
                          <td><NavDropdown.Item onClick={() => navigateToSection('billsCredit')}>Pulsa & <br/>Tagihan</NavDropdown.Item></td> :
                          <td><NavDropdown.Item onClick={() => navigateToSection('billsCredit')}>Pulsa & Tagihan</NavDropdown.Item></td>
                        }
                      </tr>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('loyalty')}>Loyalty</NavDropdown.Item></td>
                      </tr>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('remittance')}>Remittance</NavDropdown.Item></td>
                      </tr>
                    </tbody>
                  </table>
                </NavDropdown>
              }
                <Nav.Link className='item-navbar' onClick={() => navigateToHome('Merchant')}>Merchant & Partner</Nav.Link>
                {
                  language === 'eng' ?
                  <NavDropdown title="About Us" className='item-navbar navbar-aboutus' id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick={() => navigateToAboutUs('companyProfile')} style={{fontWeight: 600}}>Company Profile</NavDropdown.Item>
                    <br/>
                    <NavDropdown.Item onClick={() => navigateToAboutUs('ourVision')} style={{fontWeight: 600}}>Our Vision</NavDropdown.Item>
                    <br/>
                    <NavDropdown.Item onClick={() => navigateToAboutUs('ourJourney')} style={{fontWeight: 600}}>Our Journey</NavDropdown.Item>
                    <br/>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => navigateToAboutUs()} style={{fontWeight: 600}}>Career</NavDropdown.Item>
                  </NavDropdown> :
                  <NavDropdown title="Tentang Kami" className='item-navbar navbar-aboutus' id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick={() => navigateToAboutUs('companyProfile')} style={{fontWeight: 600}}>Profil Perusahaan</NavDropdown.Item>
                    <br/>
                    <NavDropdown.Item onClick={() => navigateToAboutUs('ourVision')} style={{fontWeight: 600}}>Visi Ezeelink</NavDropdown.Item>
                    <br/>
                    <NavDropdown.Item onClick={() => navigateToAboutUs('ourJourney')} style={{fontWeight: 600}}>Perjalanan Ezeelink</NavDropdown.Item>
                    <br/>
                    <NavDropdown.Divider />
                    {/* <NavDropdown.Item onClick={() => navigateToAboutUs()} style={{fontWeight: 600}}>Karir</NavDropdown.Item> */}
                  </NavDropdown>
                }
                {/* <Nav.Link className='item-navbar'>FAQ</Nav.Link> */}
                {
                  sessionStorage.getItem('lang') === 'eng' ?
                  <Nav.Link className='item-navbar'><span style={{color: '#FFFFFF'}} onClick={() => engLang()}>EN</span> | <span onClick={() => inaLang()}>ID</span></Nav.Link> :
                  <Nav.Link className='item-navbar'><span onClick={() => engLang()}>EN</span> | <span style={{color: '#FFFFFF'}} onClick={() => inaLang()}>ID</span></Nav.Link>
                }
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarComponent