"use client";

import "./login.css";
import Link from "next/link";

export default function Example() {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-gray-200 flex items-center justify-center shadow-lg">
                <div className="h-full w-full">
                    <img
                        src="https://static.vecteezy.com/ti/vetor-gratis/p1/2774578-designer-working-on-web-project-work-illustration-concept-gratis-vetor.jpg"
                        alt="Imagem"
                        className="h-full w-full object-cover"
                        style={{ width: '100%' }}
                    />
                </div>
            </div>

            <div className="w-1/2 bg-gray-100 flex items-center justify-center">
                <div className="p-5 min-w-96 sm:px-6 lg:px-8 shadow-lg bg-white rounded-lg p-10 flex flex-col">
                   

                    <div className="">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Usuário
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-5"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Senha
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-5"
                                    />
                                </div>
                                <div className="text-sm mt-2">
                                    <a href="#" className="text-color font-semibold text-color  hover:text-color text-blue-900">
                                        Esqueceu a senha?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="bg-color flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-blue-900"
                                >
                                    Acessar
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500 ">
                            Não é membro?{' '}
                            <Link href="./cadastro" className=" text-color font-semibold leading-6 text-color  hover:text-color text-blue-900">
                                Cadastre-se
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
