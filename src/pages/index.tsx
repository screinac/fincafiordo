import Image from "next/image";
import { Inter } from "next/font/google";
import Slider from "../components/Slider";

import ImagenPrincipal from "../../public/images/imagen-principal.png";
import FooterImage from "../../public/images/footer-img-celular.png";
import CorrerImg from "../../public/images/correr.png";
import MotocrossImg from "../../public/images/motocross.png";
import PajaroImg from "../../public/images/pajaro.png";
import PezImg from "../../public/images/pez.png";
import SenderismoImg from "../../public/images/senderismo.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <nav>
        <ul className="flex p-3 mb-3 w-full text-xl gap-4 justify-end">
          <li>Cabañas</li>
          <li>Precios</li>
          <li>Contacto</li>
          <li>Home</li>
        </ul>
      </nav>

      {/* Hero */}
      <div className="flex gap-7 px-2">
        <img
          src={ImagenPrincipal.src}
          alt="Logo Fincafiordo"
          className="w-1/2 rounded-3xl"
        />
        <div className="my-auto w-1/2 ">
          <h2 className="text-3xl my-auto mb-6">
            RESPIRA. <br></br> VIVE. <br /> AMA.
          </h2>
          <a href="" className="border-b-[#e0d8bc] border-b pb-2 block">
            Conoce más
          </a>
        </div>
      </div>

      {/* Cabañas */}
      <h2 className="text-3xl mt-6 p-2 mb-10">CABAÑAS</h2>
      <Slider></Slider>

      {/* La finca */}
      <div className="p-3">
        <h2 className="text-3xl mt-6 p-2 mb-10">LA FINCA</h2>
        <img src={ImagenPrincipal.src} alt="" />
        <p className="my-6">
          Disfruta de la tranquilidad de la naturaleza Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Veniam ratione corrupti minima
          alias placeat. Nisi quae molestias rem laudantium similique?
        </p>
        <img src={ImagenPrincipal.src} alt="" />
      </div>

      {/* Deportes */}
      <div className="p-3">
        <h2 className="text-3xl mt-6 p-2 mb-10">DEPORTES</h2>
        <div className="grid grid-cols-3 gap-3 mb-9">
          <img src={SenderismoImg.src} alt="" />
          <img src={MotocrossImg.src} alt="" />
          <img src={CorrerImg.src} alt="" />
        </div>
        <img src={ImagenPrincipal.src} alt="" className="w-1/3 mx-auto" />
        <div className="flex justify-center">
          <h3 className="mt-4 text-center text-2xl border-b-[#e0d8bc] border-b inline-block pb-2">
            &quot;Un lugar mágico&quot;
          </h3>
        </div>
      </div>

      {/* Footer */}
      <div className="relative">
        <img src={FooterImage.src} alt="" className="w-full" />
        <h2 className="absolute right-4 bottom-8">PREMIUMPAGE.COM</h2>
      </div>
    </main>
  );
}
