import BackgroundCuero from "../../public/images/cabanas/fondo-cuero.png";
import cafe_img from "../../public/images/cabanas/cafe.jpeg";
import finca_img from "../../public/images/cabanas/finca.jpeg";
import Slider from "../components/Slider";

import balcones_img1 from "../../public/images/slider_balcones/1.jpeg";
import balcones_img2 from "../../public/images/slider_balcones/2.jpeg";
import balcones_img3 from "../../public/images/slider_balcones/3.jpeg";
import balcones_img4 from "../../public/images/slider_balcones/4.jpeg";
import balcones_img5 from "../../public/images/slider_balcones/5.jpeg";
import balcones_img6 from "../../public/images/slider_balcones/6.jpeg";
import balcones_img7 from "../../public/images/slider_balcones/7.jpeg";
import balcones_img8 from "../../public/images/slider_balcones/8.jpeg";

import pedregal_img1 from "../../public/images/slider_pedregal/1.jpeg";
import pedregal_img2 from "../../public/images/slider_pedregal/2.jpeg";
import pedregal_img3 from "../../public/images/slider_pedregal/3.jpeg";
import pedregal_img4 from "../../public/images/slider_pedregal/4.jpeg";
import pedregal_img5 from "../../public/images/slider_pedregal/5.jpeg";
import pedregal_img6 from "../../public/images/slider_pedregal/6.jpeg";
import pedregal_img7 from "../../public/images/slider_pedregal/7.jpeg";
import pedregal_img8 from "../../public/images/slider_pedregal/8.jpeg";
import pedregal_img9 from "../../public/images/slider_pedregal/9.jpeg";
import pedregal_img10 from "../../public/images/slider_pedregal/10.jpeg";
import pedregal_img11 from "../../public/images/slider_pedregal/11.jpeg";
import pedregal_img12 from "../../public/images/slider_pedregal/12.jpeg";

import LogoVerde from "../../public/images/logo-verde.png";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Cabanas() {
  const images_balcones = [
    balcones_img1,
    balcones_img2,
    balcones_img3,
    balcones_img4,
    balcones_img5,
    balcones_img6,
    balcones_img7,
    balcones_img8,
  ];

  const images_pedregal = [
    pedregal_img1,
    pedregal_img2,
    pedregal_img3,
    pedregal_img4,
    pedregal_img5,
    pedregal_img6,
    pedregal_img7,
    pedregal_img8,
    pedregal_img9,
    pedregal_img10,
    pedregal_img11,
    pedregal_img12,
  ];
  return (
    <main className="max-w-[1920px] mx-auto bg-[#4E3422] relative z-0">
      <img
        src={BackgroundCuero.src}
        alt=""
        className="object-cover absolute z-0"
      />
      <nav className="drop-shadow-md">
        <ul className="flex p-3 mb-3 w-full text-xl gap-4 justify-end pt-6 md:gap-9 md:text-2xl md:pr-10 lg:text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cabanas" className="border-b-2 border-[#e0d8bc]">
              Cabañas
            </Link>
          </li>
          <li>
            <Link
              href="https://api.whatsapp.com/send?phone=573203714336&text=Hola%20Finca%20El%20Fiordo"
              target="_blank"
            >
              <AiOutlineWhatsApp className="inline-block my-auto mr-1 mb-1" />
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <h2 className="z-10 text-3xl mt-2 p-2 mr-4 mb-16 md:text-4xl text-right drop-shadow-md lg:text-6xl lg:mt-20">
        PEDREGAL
      </h2>
      <Slider images={images_pedregal}></Slider>

      <div className="mt-3 drop-shadow-md lg:flex lg:my-16">
        <ul className="p-6 lg:w-1/2 lg:mx-auto lg:text-xl">
          <li>10 Personas</li>
          <li>4 Habitaciones</li>
          <li>3 Baños</li>
          <li>Cocina totalmente equipada</li>
          <li>Horno a gas y eléctrico</li>
          <li>Zona Privada BBQ</li>
          <li>2 Chimeneas</li>
          <li>Sauna</li>
          <li>Arte y literatura</li>
          <li>Suite Matrimonial</li>
          <li>Zona de estudio y trabajo</li>
          <li>Wifi</li>
          <li>Parqueadero Exclusivo</li>
          <li className="border-b-2 mt-6 lg:mt-20">
            <Link
              href="https://api.whatsapp.com/send?phone=573203714336&text=Hola%20Finca%20El%20Fiordo"
              target="_blank"
            >
              Reserva
            </Link>
          </li>
        </ul>
        <div className="w-1/3 mx-auto hidden lg:block">
          <img src={cafe_img.src} alt="" />
        </div>
      </div>

      <h2 className="z-10 text-3xl mt-2 p-2 mr-4 mb-16 md:text-4xl text-right drop-shadow-md lg:text-6xl lg:mt-24">
        BALCONES
      </h2>
      <Slider images={images_balcones}></Slider>
      <div className="mt-3 drop-shadow-md lg:flex lg:my-16">
        <div className="w-1/3 mx-auto hidden lg:block ">
          <img src={finca_img.src} alt="" className="object-cover h-[700px]" />
        </div>
        <ul className="p-6 lg:w-1/2 lg:mx-auto lg:text-xl">
          <li>7 Personas</li>
          <li>1 Habitación</li>
          <li>3 Camas</li>
          <li>Suite Matrimonial</li>
          <li>1 Sofá Cama</li>
          <li>Tina</li>
          <li>Sauna</li>
          <li>Cocina totalmente equipada</li>
          <li>Zona Privada BBQ</li>
          <li>Zona de estudio y trabajo</li>
          <li>Wifi</li>
          <li>Parqueadero Exclusivo</li>
          <li className="border-b-2 mt-6 lg:mt-20">
            <Link
              href="https://api.whatsapp.com/send?phone=573203714336&text=Hola%20Finca%20El%20Fiordo"
              target="_blank"
            >
              Reserva
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col ">
        <img
          src={LogoVerde.src}
          alt=""
          className="w-1/2 py-6 mx-auto  max-w-[300px] lg:my-11"
        />
        <Link
          href="https://www.plupweb.com"
          target="_blank"
          className="text-right ml-auto mr-8 py-5"
        >
          PLUPWEB.COM
        </Link>
      </div>
    </main>
  );
}
