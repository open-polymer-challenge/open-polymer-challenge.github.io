import React from "react";
import img_title from "../imgs/title.svg";

const Challenge = () => {
  return (
    <main>
      <section class="h-28 bg-gradient-to-r from-green-100 to-blue-0 w-full mx-auto px-4 sm:px-6 lg:px-8 py-40 mt-16 top-5">
        <img
          src={img_title}
          alt="Background"
          className="w-1/10 h-1/3 object-cover absolute top-40 left-1/2 transform -translate-x-1/2"
        />
      </section>

      <section class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Overview
          </h2>
          <p
            class="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>A polymer</b> is consisting of very large molecules called
            macromolecules, composed of many repeating subunits named monomers.
            Polymers are essential materials in our life and society. They
            contribute to sustainability, biomaterials, and stimuli-responsive
            materials. <b>Machine learning</b> (ML) holds immense potential for
            discovering sustainable polymer materials, yet progress is hindered
            by the lack of high-quality open data.
          </p>
          <p
            class="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            In this competition, <b>Open Polymer Challenge</b>, your task is to use polymer structure data (SMILES, Graphs, etc.) to predict five key computational properties derived from Molecular Dynamics simulations: glass transition temperature (Tg), fractional free volume (FFV), thermal conductivity (TC), polymer density, and radius of gyration (Rg). Successfully predicting these properties is crucial for scientists to accelerate the design of novel polymers with targeted characteristics, which can be used in various applications.
          </p>
          <p
            class="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            The competition is hosted on <a
              className="text-red-500"
              href="https://www.kaggle.com/competitions/neurips-open-polymer-prediction-2025/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaggle
            </a> with a total prize pool of <b>$50,000</b>. 
          </p>
        </div>
      </section>

      <section
        class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8"
        id="dates"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Important Dates (Tentative)
          </h2>
          <div className="mt-4 text-lg text-neutral-800">
            <div
              className="flex items-center gap-2 mb-2"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <span className="inline-block w-48 font-bold">
                June 16, 2025
              </span>
              <span>
                - Start Date of the competition. Please visit the{"  "}
                <a
                  className="text-red-500"
                  href="https://www.kaggle.com/competitions/neurips-open-polymer-prediction-2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kaggle page
                </a>
              </span>
            </div>

            <div
              className="flex items-center gap-2 mb-2"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <span className="inline-block w-48 font-bold">
                September 8, 2025
              </span>
              <span>
                - Entry Deadline. You must accept the competition rules before this date in order to compete.
              </span>
            </div>

            <div
              className="flex items-center gap-2 mb-2"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <span className="inline-block w-48 font-bold">
                September 8, 2025
              </span>
              <span>
                - Team Merger Deadline. This is the last day participants may join or merge teams.
              </span>
            </div>

            <div
              className="flex items-center gap-2 mb-2"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <span className="inline-block w-48 font-bold">
                September 15, 2025
              </span>
              <span>
                - Final Submission Deadline.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8"
        id="news"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            News
          </h2>
          <div className="mt-4 text-lg text-neutral-800">
            <div
              className="flex items-center gap-2"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <span className="inline-block w-52 font-bold">
                June 5, 2025
              </span>
              <span>
              Website released.
              </span>
            </div>
          </div>
          <div className="mt-4 text-lg text-neutral-800">
            <div
              className="flex items-center gap-2"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <span className="inline-block w-52 font-bold">
                June 5, 2025
              </span>
              <span>
                <a
                  className="text-red-500"
                  href="https://github.com/liugangcode/torch-molecule"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  torch-molecule
                </a> released! <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">pip install torch-molecule</code> to start developing your own models.
              </span>
            </div>
          </div>
          
          <div className="mt-4 text-lg text-neutral-800">
            <div
              className="flex items-center gap-2"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <span className="inline-block w-52 font-bold">
                June 16, 2025
              </span>
              <span>
              We launch the competition on{" "}
                <a
                  className="text-red-500"
                  href="https://www.kaggle.com/competitions/neurips-open-polymer-prediction-2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kaggle
                </a>
                {" "} with a total prize pool of $50,000!
              </span>
            </div>
          </div>

          <div className="mt-4 text-lg text-neutral-800">
            <div
              className="flex items-center gap-2"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <span className="inline-block w-52 font-bold">
                June 16, 2025
              </span>
              <span>
                  We launch a{" "}   
                  <a
                    className="text-red-500"
                    href="https://www.kaggle.com/code/alexliu99/tutorial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tutorial
                  </a>
                  {" "} for the competition.
              </span>
            </div>
          </div>


        </div>
      </section>

      <section
        className="mt-12 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8"
        id="team"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Organizers
          </h2>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>
                <a
                  className="text-red-500"
                  href="https://liugangcode.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gang Liu
                </a>, 
              </b> PhD student at the University of Notre Dame
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>
                <a
                  className="text-red-500"
                  href="https://scholar.google.com/citations?user=d5HFw3YAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jiaxin Xu
                </a>, 
              </b> PhD at the University of Notre Dame
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>
                <a
                  className="text-red-500"
                  href="https://www.linkedin.com/in/eric-inae-6056b1214/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eric Inae
                </a>, 
              </b> PhD student at the University of Notre Dame
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>
                <a
                  className="text-red-500"
                  href="https://yihan222.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yihan Zhu
                </a>, 
              </b> PhD student at the University of Notre Dame
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>
                <a
                  className="text-red-500"
                  href="https://www.kaggle.com/addisonhoward"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Addison Howard
                </a>, 
              </b> Head of Competition Program Management at Kaggle
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>
                <a
                  className="text-red-500"
                  href="https://pdelab.engr.wisc.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ying Li
                </a>, 
              </b> Associate Professor at the University of Wisconsin-Madison
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>
                <a
                  className="text-red-500"
                  href="https://monsterlab.nd.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tengfei Luo
                </a>, 
              </b> the Dorini Family Professor at the University of Notre Dame
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>
                <a
                  className="text-red-500"
                  href="http://www.meng-jiang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meng Jiang
                </a>, 
              </b> Associate Professor at the University of Notre Dame
            </p>
          </div>
        </div>
      </section>

      <section
        className="mt-12 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8"
        id="acknowledgements"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Acknowledgements
          </h2>
          <div className="flex justify-start items-center flex-wrap gap-6">
            <div className="flex flex-col items-center">
              <img
                src="https://seekvectorlogo.com/wp-content/uploads/2019/08/university-of-notre-dame-vector-logo.png"
                alt="University of Notre Dame"
                className="h-64 w-64 object-contain mb-2"
              />
              <span className="text-sm text-gray-600">University of Notre Dame</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://brand.wisc.edu/content/uploads/2023/09/vert-w-crest-logo-print-color.png"
                alt="University of Wisconsin-Madison"
                className="h-64 w-64 object-contain mb-2"
              />
              <span className="text-sm text-gray-600">University of Wisconsin-Madison</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Kaggle_Logo.svg/1024px-Kaggle_Logo.svg.png?20240209024103"
                alt="Kaggle"
                className="h-64 w-64 object-contain mb-2"
              />
              <span className="text-sm text-gray-600">Kaggle</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Challenge;
