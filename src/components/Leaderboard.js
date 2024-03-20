import React, { useState } from 'react';

const tasks = {
    oxygen: {
        description: 'Oxygen Task Description',
        predictionData: [
            { method: "Random Forest", metric: 0.85 },
            { method: "Support Vector Machines", metric: 0.78 },
            { method: "Neural Networks", metric: 0.92 },
            // Add more ML methods and their accuracy scores here
        ],
        inverseDesignData: [
            { method: "Graph GA", metric: 0.85 },
        ],
    },
    nitrogen: {
        description: 'Nitrogen Task Description',
        predictionData: [
            { method: "Random Forest", metric: 0.66 },
            { method: "Support Vector Machines", metric: 0.72 },
            { method: "Neural Networks", metric: 0.62 },
            // Add more ML methods and their accuracy scores here
        ],
        inverseDesignData: [
            { method: "Graph GA", metric: 0.33 },
        ],
    },
    // Add more tasks here
};

const Leaderboard = () => {
    const [selectedTask, setSelectedTask] = useState("oxygen");

    const renderTable = (data, title) => (
        <>
            <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
            <table className="min-w-full divide-y divide-gray-200 mb-10">
                <thead className="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rank
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Method
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Metric (MAE)
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Team
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Reference
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            #Parameters
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td class="px-6 py-4 whitespace-nowrap">{item.rank}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{item.method}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{item.metric}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{item.team}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{item.reference}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{item.parameters}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );

    return (
        <main>
            <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 w-full mx-auto px-4 sm:px-6 lg:px-8 py-40 mt-16 top-20">
                <h1 className="text-5xl font-bold text-white text-center">Leaderboard</h1>
            </div>
            <div className="container mx-auto p-4 top-20">
                <p className="text-black mb-6">Description for the leaderboard</p>
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mb-6">
                    {Object.keys(tasks).map((task, index) => (
                        <li className="me-2" key={index}>
                            <a
                                href="/#"
                                className={`inline-block p-4 rounded-t-lg text-lg ${selectedTask === task ? 'text-blue-600 active dark:text-blue-500' : 'hover:text-gray-600'}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedTask(task);
                                }}
                            >
                                {task.charAt(0).toUpperCase() + task.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="text-black mb-6">{tasks[selectedTask].description}</p>
                {renderTable(tasks[selectedTask].predictionData, "Property Prediction")}
                {renderTable(tasks[selectedTask].inverseDesignData, "Inverse Design")}
            </div>
        </main>
    );
};

export default Leaderboard;
