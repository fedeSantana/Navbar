import React from 'react'
import Navbar from './components/Navbar'
import TwitterLogo from "./assets/svg/icon-twitter.svg";
import FacebookLogo from "./assets/svg/icon-facebook.svg";
import InstagramLogo from "./assets/svg/icon-instagram.svg";

export default function App() {

  const dataNavbar = [
    {
      label: 'Quiénes somos',
      link: 'https://expedicionciencia.org.ar/quienes-somos/',
      children: [
        {
          label: 'Nosotros',
          link: 'expedicionciencia.com/nosotros'
        },
        {
          label: 'Contacto',
          link:'expedicionciencia.com/contacto'
        }
      ]
    },
    {
      label: 'Campamentos científicos',
      link: 'https://expedicionciencia.org.ar/campamentos-cientificos/'
    },
    {
      label: "Donaciones",
      link: "https://expedicionciencia.org.ar/donaciones/"
    },
    {
      label: "Otras Actividades",
      link: "https://expedicionciencia.org.ar/actividades/"
    },
    {
      label: "Contacto",
      link: "https://expedicionciencia.org.ar/contacto/"
    }
  ]

  const redesSociales = [
    {
      logo: TwitterLogo,
      alt: 'Twitter',
      href: 'https://twitter.com/Exp_Ciencia'
    },
    {
      logo: FacebookLogo,
      alt: 'Facebook',
      href: 'https://www.facebook.com/Expedicion.Ciencia/'
    },
    {
      logo: InstagramLogo,
      alt: 'Instagram',
      href: 'https://www.instagram.com/expedicionciencia/'
    }
  ]

  return (
    <div className="App">
      <Navbar dataNavbar={dataNavbar} socialNetworks={redesSociales}/>
    </div>
  )
}