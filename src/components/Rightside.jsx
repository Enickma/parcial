import React from "react";
import { RiMapPin2Fill, RiTwitterFill} from "react-icons/ri";
import { GoGlobe} from "react-icons/go";
import { ImOffice} from "react-icons/im";

const Rightside = () => {
  return <div>


    <p className="mt-20">
        OctoCat
    </p>

    <p className="mt-3">
        @OctoCat
    </p>

    <p className="mt-5 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores reiciendis ducimus accusamus eligendi nesciunt sint obcaecati! Iure eaque illo quas.
    </p>

    <div className="mt-2 flex bg-[#ececec] justify-center">
        <div className="ml-10">
            <p>Repositorios</p>
            <p className="ml-10">8</p>
        </div>

        <div className="ml-10">
            <p>Seguidores</p>
            <p className="ml-5">7486</p>
        </div>

        <div className="ml-10">
            <p>Me Gusta</p>
            <p className="ml-7">9</p>
        </div>
    </div>


 {/* hipervinculos */}

            <div className="mt-4 ml-2 flex justify-center">
        <ul>
        <li className="flex">
        <a href="" 
            target="_blank"
            className="transition-colors text-2xl">
            <RiMapPin2Fill/>
            </a>
            <p className="ml-2 ">Posadas Misiones</p>
        </li>
        </ul>


      <ul className="ml-96">
        <li className="flex">
        <a href="https://twitter.com/"
            target="_blank"
            className="transition-colors text-2xl">
            <RiTwitterFill/>
            </a>
            <p className="ml-2">Not Available</p>
        </li>
        </ul>

      </div>

      <div className="mt-4 ml-2 flex justify-center">
        <ul>
        <li className="flex">
        <a href="https://github.blog" 
            target="_blank"
            className="transition-colorstext-xl">
            <GoGlobe/>
            </a>
            <p className="ml-2 ">https://github.blog</p>
        </li>
        </ul>


      <ul className="ml-96">
        <li className="flex">
        <a href="" 
            target="_blank"
            className="transition-colors text-2xl">
            <ImOffice/>
            </a>
            <p className="ml-2">@github</p>
        </li>
        </ul>

      </div>

  </div>;
};

export default Rightside;