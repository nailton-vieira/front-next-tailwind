import React from 'react';
import "./indicadores.css";
import BarChart from '../charts';

const indicadores = [
    {
        name: 'ORÇAMENTO',
        valor: 200,
    },
    {
        name: 'GASTOS',
        valor: 300,
    },
    {
        name: 'SALDO',
        valor: -100,
    }
];

const tableData = [
    {
        nome: 'Nubank',
        descCartao: 'Lorem Lorem Lorem',
        vencimento: '10/06/2024',
        valorTotal: 1000
    },
    {
        nome: 'Nubank',
        descCartao: 'Lorem Lorem Lorem',
        vencimento: '10/06/2024',
        valorTotal: 1000,
    },
    {
        nome: 'Nubank',
        descCartao: 'Lorem Lorem Lorem',
        vencimento: '10/06/2024',
        valorTotal: 1000
    }
];

function Table({ data }) {
    return (
        <table className='max-h-4 overflow-x-auto table-auto border-collapse border border-gray-800 w-full border-gray-300'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className='border border-gray-300 px-4 py-2 text-left text-slate-800'>Cartão</th>
                    <th className='border border-gray-300 px-4 py-2 text-left text-slate-800'>Descrição</th>
                    <th className='border border-gray-300 px-4 py-2 text-left text-slate-800'>Vencimento</th>
                    <th className='border border-gray-300 px-4 py-2 text-left text-slate-800'>Valor Total</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                        {Object.values(item).map((value, index) => (
                            <td key={index} className='border border-gray-300 px-4 py-2'>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default function Dashboard() {
    

    return (
        <div>
            <div className="flex justify-between m-10 ">
                {indicadores.map((person, index) => (
                    <div className="flex-1 mx-2" key={index}>
                        <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
                            <h2 className="font-medium text-md text-gray-800">{person.name}</h2>
                            <div className={`text-3xl font-bold mt-2 ${person.valor <= 0 ? 'text-red-500' : 'text-indigo-600'}`}> R$ {person.valor}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-h-4 overflow-x-auto min-h-96 max-h-96 m-12 sm:px-6 lg:px-8 p-5 shadow-md bg-white rounded-md p-10">
                <h2 className='pb-5 font-semibold text-sm'>
                    PRODUTOS
                </h2>
                <Table data={tableData} />
            </div>

            <BarChart/>
        </div>
    );
}
