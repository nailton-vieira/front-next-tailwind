import Image from "next/image";
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faUserPlus, faBox, faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";



const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]

export default function Sidebar() {
  return (
    <div className="bg-blue-900 text-white h-screen w-60  flex-col justify-between shadow-md fixed top-0">
      <div className="justify-center flex">
        {people.map((person) => (
          <div className="perfil">
            <img className="h-20 w-20 m-5 rounded-full ring-4 ring-white" src={person.imageUrl} alt="" />
            <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
          </div>
        ))}
      </div>

      <div className="p-4 mt-10 text-md">
        <a href="#" className="block py-2 flex text-md">
          <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-2" />
          Início
        </a>
        <a href="#" className="block py-2 flex text-md">
          <FontAwesomeIcon icon={faChartBar} className="w-5 h-5 mr-2" />
          Dashboard
        </a>
        <a href="#" className="block py-2 flex text-md">
          <FontAwesomeIcon icon={faUserPlus} className="w-5 h-5 mr-2" />
          Cadastro
        </a>
        <a href="#" className="block py-2 flex text-md">
          <FontAwesomeIcon icon={faBox} className="w-5 h-5 mr-2" />
          Produtos
        </a>
          <Link className="block py-2 flex text-md" href={"./login"}>
            <FontAwesomeIcon icon={faSignOutAlt } className="w-5 h-5 mr-2" />
            Sair
          </Link>
         
      </div>

    </div>
  );
}
