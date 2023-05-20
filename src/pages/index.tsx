import Image from "next/image";
import { Inter } from "next/font/google";
import Slider from "../components/Slider";
import Slider1 from "../components/Slider1";

import ImagenPrincipal from "../../public/images/imagen-principal.png";
import FooterImage from "../../public/images/footer-img-celular.png";
import CorrerImg from "../../public/images/correr.png";
import MotocrossImg from "../../public/images/motocross.png";
import PajaroImg from "../../public/images/pajaro.png";
import PezImg from "../../public/images/pez.png";
import EcoturismoImg from "../../public/images/ecoturismo.png";
import SenderismoImg from "../../public/images/senderismo.png";
import LogoVerde from "../../public/images/logo-verde.png";
import FotoLogoCentrofrom from "../../public/images/foto-logo-centro.png";
import LaRegionImg from "../../public/images/la-region.jpeg";
import DeportesLarge from "../../public/images/deportes-large.png";

import { MdOutlineStarPurple500 } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto">
      <nav>
        <ul className="flex p-3 mb-3 w-full text-xl gap-4 justify-end pt-6 md:gap-9 md:text-2xl md:pr-10 lg:text--xl">
          <li>Cabañas</li>
          <li>Contacto</li>
          <li>Home</li>
        </ul>
      </nav>

      {/* Hero */}
      <div className="flex gap-7 px-2 md:gap-14 md:p-7 ">
        <div className="w-1/2 ">
          <img
            src={ImagenPrincipal.src}
            alt="Logo Fincafiordo"
            className="w-full rounded-3xl mx-auto max-w-[450px] "
          />
        </div>

        <div className="my-auto w-1/2  lg:my-0  lg:flex lg:flex-col lg:justify-between lg:pt-20 ">
          <h2 className="text-3xl my-auto  mb-6 md:text-7xl lg:my-0">
            RESPIRA. <br></br> VIVE. <br /> AMA.
          </h2>
          <a
            href=""
            className="border-b-[#e0d8bc] border-b pb-2 block lg:text-xl lg:mr-40 "
          >
            Conoce más
          </a>
        </div>
      </div>

      {/* Cabañas */}
      <h2 className="text-3xl mt-6 p-2 mb-10 ml-4 md:text-4xl lg:ml-10 lg:mt-16">
        CABAÑAS
      </h2>
      <Slider></Slider>

      {/* La Región */}
      <h2 className="text-3xl mt-10 p-2 mb-10 pr-7 text-right md:text-4xl lg:mr-10 lg:mt-16">
        LA REGIÓN
      </h2>
      <div className="flex gap-8 lg:hidden">
        <div className="w-1/3 pl-3 text-center md:my-auto ">
          <img
            src={PajaroImg.src}
            alt=""
            className="w-24 mx-auto mb-2 md:w-40 md:mb-3"
          />
          <p className="mb-5 md:mb-10">Avistamiento de aves</p>
          <img
            src={PezImg.src}
            alt=""
            className="w-24 mx-auto mb-2 md:w-40 md:mb-3"
          />
          <p className="mb-5 md:mb-10">Pezca</p>
          <img
            src={EcoturismoImg.src}
            alt=""
            className="w-24 mx-auto mb-2 md:w-40"
          />
          <p className="mb-5 md:mb-10">Ecoturismo</p>
        </div>
        <img
          src={LaRegionImg.src}
          alt=""
          className="w-2/3 object-cover md:mb-3"
        />
      </div>
      {/* visulalization for large screen */}
      <div className="flex">
        <div className="w-1/3 pl-3 text-center md:my-auto hidden lg:block lg:w-1/2">
          <img
            src={PajaroImg.src}
            alt=""
            className="w-24 mx-auto mb-2 md:w-40 md:mb-3"
          />
          <p className="mb-5 md:mb-10 text-xl">Avistamiento de aves</p>
          <img
            src={PezImg.src}
            alt=""
            className="w-24 mx-auto mb-2 md:w-40 md:mb-3"
          />
          <p className="mb-5 md:mb-10 text-xl">Pezca</p>
          <img
            src={EcoturismoImg.src}
            alt=""
            className="w-24 mx-auto mb-2 md:w-40"
          />
          <p className="mb-5 md:mb-10 text-xl">Ecoturismo</p>
        </div>
        <div className="lg:w-2/3 lg:mr-10">
          <p className="mt-10 mb-6 px-5">
            La región de Ubaté, reconocida por su gente laboriosa y servicial,
            se encuentra en el Departamento de Cundinamarca a 2 horas de la
            capital de la República de Colombia: Bogotá. El paisaje andino
            acaparado por frondosas montañas, invita a reconocer la frescura de
            sus pasturas. Al lado de la gastronomía típica colombiana,
            tendencias modernas vienen acompañando los turistas.
          </p>
          <p className="mt-6 mb-4 px-5 ">
            En la región de Ubaté además de disfrutar maravillosos paisajes,
            podrás realizar cabalgatas, deportes acuáticos en el embalse el Hato
            y un sin número de actividades para todos los gustos.
          </p>
          <h2 className="hidden lg:block text-3xl mt-10 p-2 mb-10 pr-7 text-right md:text-4xl  lg:mt-16">
            LA FINCA
          </h2>
          <p className="hidden lg:block mb-8 px-3 lg:px-5">
            Un espacio de tranquilidad y conexión con la naturaleza. Más de
            40.000 mil metros cuadrados para recargar el aire puro de sus
            montañas majestuosas. Senderos, flora y fauna silvestre y mucho
            silencio reparador. A 800 metros encontrarás “el santuario”, bello
            lugar para tu espiritualidad. A 6 kilómetros encontrarás el Embalse
            el Hato, bellísimo lago para tus actividades acuáticas. Estamos sólo
            a 1 hora y 50 minutos de Bogotá.
          </p>
          <p className="hidden lg:block mb-8 px-3 lg:px-5">
            Disfruta de la tranquilidad de la naturaleza en una de nuestras
            cabañas, vive la experiencia del campo con comodidades modernas.
            Ideal para desconectar y disfrutar de actividades al aire libre en
            un entorno acogedor y relajante.
          </p>
        </div>
      </div>

      {/* La finca */}
      <div className="p-3 lg:hidden">
        <h2 className="text-3xl mt-6 p-2 mb-10 md:text-4xl">LA FINCA</h2>
        <img src={FotoLogoCentrofrom.src} alt="" />
        <p className="mt-8 mb-4 px-3 text-sm">
          Disfruta de la tranquilidad de la naturaleza en una de nuestras
          cabañas, vive la experiencia del campo con comodidades modernas. Ideal
          para desconectar y disfrutar de actividades al aire libre en un
          entorno acogedor y relajante.
        </p>
        <p className="mb-8 px-3 text-sm">
          Un espacio de tranquilidad y conexión con la naturaleza. Más de 40.000
          mil metros cuadrados para recargar el aire puro de sus montañas
          majestuosas. Senderos, flora y fauna silvestre y mucho silencio
          reparador. A 800 metros encontrarás “el santuario”, bello lugar para
          tu espiritualidad. A 6 kilómetros encontrarás el Embalse el Hato,
          bellísimo lago para tus actividades acuáticas. Estamos sólo a 1 hora y
          50 minutos de Bogotá.
        </p>
        <Slider1></Slider1>
      </div>

      {/* Deportes */}
      <div className="p-3 ">
        <h2 className="text-3xl mt-6 p-2 mb-10 md:text-4xl lg:ml-10">
          DEPORTES
        </h2>
        <div className="flex justify-between">
          <div className="grid grid-cols-3 gap-5 mb-9 md:gap-14 md:mb-20 md:mx-20 lg:m-0 lg:mx-auto lg:grid-cols-1 lg:w-2/3 lg:my-auto lg:gap-36">
            <img
              src={SenderismoImg.src}
              alt=""
              className="rounded-full lg:mx-auto lg:w-40"
            />
            <img
              src={MotocrossImg.src}
              alt=""
              className="rounded-full lg:mx-auto lg:w-40"
            />
            <img
              src={CorrerImg.src}
              alt=""
              className="rounded-full lg:mx-auto lg:w-40"
            />
          </div>
          <div className="hidden lg:block w-2/3">
            <img src={DeportesLarge.src} alt="" />
          </div>
        </div>

        <img src={LogoVerde.src} alt="" className="w-1/3 mx-auto lg:hidden" />
        <div className="lg:hidden">
          <div className="flex justify-center lg:mt-20">
            <h3 className="mt-4 text-center text-2xl border-b-[#e0d8bc] border-b inline-block pb-2 lg:text-3xl">
              &quot;Un lugar mágico&quot;
            </h3>
          </div>
          <div>
            <div className="flex mx-auto my-4 justify-center text-2xl hover:drop-shadow-[0_1px_1px_#e0d8bc] lg:text-3xl">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="relative h-96 mt-10 flex flex-col justify-center align-middle bg-no-repeat bg-cover lg:h-[500px]"
        style={{ backgroundImage: `url(${FooterImage.src})` }}
      >
        <h2 className="absolute inline-block bottom-10 right-8 ">
          PLUPWEB.COM
        </h2>

        <div className="hidden lg:block">
          <div className="flex justify-center lg:mt-20">
            <h3 className="mt-4 text-center text-2xl border-b-[#e0d8bc] border-b inline-block pb-2 lg:text-3xl">
              &quot;Un lugar mágico&quot;
            </h3>
          </div>
          <div>
            <div className="flex mx-auto my-4 justify-center text-2xl hover:drop-shadow-[0_1px_1px_#e0d8bc] lg:text-3xl">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
