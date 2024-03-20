import React from "react";

function Event({ date, title, description, tag }) {
    return (
        <div class="border-b border-gray-300 py-6">
            <div class="text-sm text-gray-500">{date}</div>
            <div class="text-xl font-semibold mt-1">{title}</div>
            <div class="text-gray-600 mt-2">{description}</div>
            <div class="text-xs font-semibold text-gray-500 mt-3">{tag}</div>
        </div>
    );
}
const Update = () => (
    <main>
        <section className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 w-full mx-auto px-4 sm:px-6 lg:px-8 py-40 mt-16 top-20">
            <h1 className="text-5xl font-bold text-white text-center">Updates</h1>
        </section>
        <section class="container mx-auto px-4">
            <Event
                date="Dec 14, 2023"
                title="Weekly Wednesday Work-meeting"
                description="Recurring weekly co-working meeting on Discord"
                tag="HACKATHON"
            />
            <Event
                date="Aug 30, 2023"
                title="NeurIPS 2023: Single-Cell Perturbation Prediction"
                description="Generalizing experimental interventions to unseen contexts, a NeurIPS 2023 competition"
                tag="COMPETITION"
            />
            <Event
                date="Aug 15, 2022"
                title="NeurIPS 2022: Multimodal Single-Cell Integration Across Time, Individuals, and Batches"
                description="A competition on predicting multimodal expression across batches and timepoints"
                tag="COMPETITION"
            />
            <Event
                date="Sep 1, 2021"
                title="NeurIPS 2021: Multimodal Single-Cell Data Integration"
                description="Solving various multimodal integration tasks using ML"
                tag="COMPETITION"
            />
            <Event
                date="Mar 29, 2021"
                title="Spring 2021 Jamboree"
                description="A virtual hackathon and kickoff event"
                tag="HACKATHON"
            />
        </section>
    </main>
);

export default Update;