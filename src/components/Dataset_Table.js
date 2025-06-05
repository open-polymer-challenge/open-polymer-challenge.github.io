import React from 'react';
import tableData from '../data/dataSummary.json'; // Adjust the import path to where your JSON file is located.

const TableComponent = () => {
  return (
    <div className="overflow-x-auto flex justify-center">
        <table className="min-w-full divide-y divide-gray-200 shadow-md">
        <thead className="bg-gray-50">
          <tr>
            {/* Define all column headers based on the JSON structure */}
            <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">Source</th>
            <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">Solubility</th>
            <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">Diffusivity</th>
            <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">Permeability</th>
            <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">FFV</th>
            <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">Experimental</th>
            <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">Computational</th>
            <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">Hypothetical</th>
            <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">With SMILES</th>
            <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">#Polymers</th>
            {/* <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">Note</th> */}
            <th className="px-4 py-2 text-xs text-gray-500 sm:text-sm">Reference</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {tableData.map((row, index) => (
            <tr key={index}>
              {/* Render all columns based on the JSON structure */}
              <td className="px-4 py-2 text-xs sm:text-sm">{row.source}</td>
              <td className="px-4 py-2 text-xs sm:text-sm">{row.solubility}</td>
              <td className="px-4 py-2 text-xs sm:text-sm">{row.diffusivity}</td>
              <td className="px-4 py-2 text-xs sm:text-sm">{row.permeability}</td>
              <td className="px-4 py-2 text-xs sm:text-sm">{row.ffv}</td>
              <td className="px-4 py-2 text-xs sm:text-sm">{row.experimental ? '✓' : '✗'}</td>
              <td className="px-4 py-2 text-xs sm:text-sm">{row.computational ? '✓' : '✗'}</td>
              <td className="px-4 py-2 text-xs sm:text-sm">{row.hypothetical ? '✓' : '✗'}</td>
              <td className="px-4 py-2 text-xs sm:text-sm">{row.withSmiles ? '✓' : '✗'}</td>
              <td className="px-4 py-2 text-xs sm:text-sm">{row.polymers} </td>
              {/* <td>{row.note}</td> */}
              <td>{row.reference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
