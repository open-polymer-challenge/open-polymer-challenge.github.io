import React from "react";
// import React, { useState } from "react";
import img_title from "../imgs/title.svg"; // Tell webpack this JS file uses this image

const pred_test_dev_example = [
  {
    SMILES: "*Nc1ccc([C@H](CCCC)c2ccc(C3(c4ccc([C@@H] ...",
    FFV: null,
  },
  {
    SMILES: "*Nc1ccc([C@H](CCCCCC)c2ccc(C3(c4ccc([C@@H] ...",
    FFV: null,
  },
  {
    SMILES: "*Nc1ccc(/C=C/c2ccc(N*)cc2-c2ccccc2)c(-c2ccccc2)c1",
    FFV: null,
  },
  {
    SMILES: "*c1ccc(-c2ccc(Oc3ccc(C4(c5ccc(Oc6ccc(-c7ccc ...",
    O2: null,
    N2: null,
    CO2: null,
    CH4: null,
  },
  // ...
];

const gen_test_dev_example = [
  [
    {
      Conditions: "[0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, ...",
      SMILES: null,
    },
    {
      Conditions: "[0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, ...",
      SMILES: null,
    },
    // ...
  ],
];
const Challenge = () => {
  return (
    <main>
      <section class="h-28 bg-gradient-to-r from-green-100 to-blue-0 w-full mx-auto px-4 sm:px-6 lg:px-8 py-60 mt-16 top-5">
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
            We propose the Open Polymer Challenge, with large-scale open-sourced
            dataset that is ten times larger than existing ones, along with
            competitive baselines and ML model evaluation pipelines. This
            challenge targets two application scenarios: multi-task polymer
            property prediction and multi-conditional polymer generation, which
            are crucial for virtual screening and inverse design.
          </p>
        </div>
      </section>

      <section
        class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8"
        id="track1_prediction"
      >
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Competition Task: Polymer Property Prediction
          </h2>
          <p
            class="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>Motivation</b>: Polymers have broad applications. Modern polymer
            discovery needs to be efficient and accurate to meet expectations
            for diverse properties such as high-temperature stability, thermal
            conductivity, and biodegradability. To benchmark ML models for
            polymer properties, we propose the multi-task property prediction
            track, studying 11 material properties from web-lab experiments and
            molecular dynamics (MD) simulations.
          </p>
          <p
            className="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>Task (Prediction Target)</b>: The track consists of eleven
            polymer properties, including six experimental properties of
            different gas permeability: He, H2, O2, N2, CO2, CH4 (in Barrer),
            and five computational properties from MD simulations: fractional
            free volume (FFV), glass transition temperature (Tg, °C), thermal
            conductivity (TC, W/m·K), radius of gyration (Rg) and polymer
            density.
          </p>
          <p
            className="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>Data for development</b>: The task has 8,500 annotations spanning
            11 tasks for model development, with 12,607 in total. All data is
            provide by a CSV file. The data can be downloaded from:{" "}
            <a
              href="https://github.com/open-polymer-challenge/data-dev/raw/main/prediction/data_dev.csv.gz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "red" }}
            >
              this link
            </a>
          </p>
          <p
            className="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>Test during development</b>: There are 944 polymers held out with
            1,265 annotations for initial evaluation. Data is provided by a JSON
            from {"  "}
            <a
              href="https://github.com/open-polymer-challenge/data-dev/blob/main/prediction/test_dev.json"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "red" }}
            >
              this link
            </a>{" "}
            with entries like:
            <pre className="bg-gray-100 rounded p-4">
              <code>{JSON.stringify(pred_test_dev_example, null, 2)}</code>
            </pre>
          </p>
          <p
            className="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>Test for final challenge evaluation </b>: Finally there are 2,114
            polymers, with approximately 6,000 annotations for final evaluation.
          </p>
        </div>
      </section>

      {/* <section
        class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8"
        id="track2_generation"
      >
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Track 2: Polymer Inverse Design
          </h2>
          <p
            class="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>Motivation</b>: Polymer design should directly generate polymers
            meeting specific constraints, providing rapid feedback to experts.
            One challenge is the expense of accurately evaluating the generated
            polymers, either through methods such as molecular dynamics or
            web-lab experiments, or less accurate evaluations. To address this
            issue, we focus on generation from predefined structures, which is
            practical for inverse design due to the deterministic
            condition-structure relationship and the existence of an efficient,
            accurate Oracle evaluator.
          </p>
          <p
            className="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>Task (Generation Conditions)</b>: We utilize a condition
            extraction function to define the task space with 256 dimensions:
            167 bits from the MACCS fingerprint and 89 bits from the Morgan
            fingerprint, with dimensions shuffled. Each dimension denotes the
            presence or absence of a specific structure.
          </p>
          <p
            className="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>Data for development</b>: The task has 11,595 polymers, each
            paired with a 256 dimensional bit vector. All data is provide by a
            CSV file. The data can be downloaded from:{" "}
            <a
              href="https://github.com/open-polymer-challenge/data-dev/raw/main/generation/data_dev.csv.gz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "red" }}
            >
              this link
            </a>
          </p>
          <p
            className="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>Test during development</b>: There are 1,330 polymers held out.
            The data is provided by a JSON from {"  "}
            <a
              href="https://github.com/open-polymer-challenge/data-dev/blob/main/generation/test_dev.json"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "red" }}
            >
              this link
            </a>{" "}
            with entries like:
            <pre className="bg-gray-100 rounded p-4">
              <code>{JSON.stringify(gen_test_dev_example, null, 2)}</code>
            </pre>
          </p>
          <p
            className="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>Test for final challenge evaluation </b>: Finally there are 2,568
            ground truth polymers, their conditions will be provided for final
            evaluation.
          </p>
        </div>
      </section> */}

      {/* <section
        class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8"
        id="rules"
      >
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Rules
          </h2>
          <div
            className="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <b>Participation Eligibility</b>
            <ul className="list-disc pl-5">
              <li className="py-1">
                Team: Each team can have 1 to 3 members, and each participant
                can only join one team.
              </li>
              <li className="py-1">
                Submission must follow th JSON templates.
              </li>
              <li className="py-1">
                Limitations of submission: Once a day, up to five times a week.
                The most recent submission counts for multiple submissions.
              </li>
            </ul>
          </div>
          <div
            className="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <p>
              <b>Award Eligibility</b>
            </p>
            <ul className="list-disc pl-5">
              <li className="py-1">
                Reproducibility: Results must be reproducible as claimed in the
                submission.
              </li>
              <li className="py-1">
                Conflict of Interest: Participants with conflicts of interest
                with organizers may not be eligible for awards.
              </li>
              <li className="py-1">
                Performance: In the final evaluation, the top three valid
                results in each track, meeting the specified rules, and extra
                top submissions from minority groups are eligible for awards.
                <ul className="list-disc pl-5">
                  <li className="py-1">
                    Track 1: Model training on the test-dev set is prohibited.
                  </li>
                  <li className="py-1">
                    Track 1: Participants require organizer approval to use
                    extra data.
                  </li>
                  <li className="py-1">
                    Track 1: Utilizing pretrained models for generating new
                    polymer representations is permitted, but providing code and
                    instructions for their implementation is necessary for final
                    evaluation.
                  </li>
                  <li className="py-1">
                    Track 1: Utilizing large language models are permissible,
                    but providing code and instructions for their implementation
                    is necessary for final evaluation.
                  </li>
                  <li className="py-1">
                    Track 2: Model training on the test-dev set is prohibited.
                  </li>
                  <li className="py-1">
                    Track 2: Final evaluation result file should containsvalid
                    chemical structures. Any non-valid structures will
                    automatically be assigned zero similarity to the ground
                    truth.
                  </li>
                  <li className="py-1">
                    Track 2: Repeated generation will only be considered once.
                    Replicating polymer structures from the development sets and
                    known polymer datasets will also be automatically assigned
                    zero similarity to the ground truth.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div
            className="mt-4 text-lg text-neutral-800"
            style={{ fontFamily: "Khula, sans-serif" }}
          >
            <div>
              <b>Prize Eligibility</b>
            </div>
            <ul className="list-disc pl-5">
              <li className="py-1">
                Background: Cash or gift card prizes may not be transferable to
                certain regions or to minor participants, depending on sponsor
                requirements;
              </li>
              <li className="py-1">
                Prize Usage: The awarded prize(s) cannot be transferred to
                another individual;
              </li>
              <li className="py-1">
                Special rules may apply to minority groups such as high school
                and undergraduate students.
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      <section
        class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8"
        id="news"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Update and News
          </h2>
          <div className="mt-4 text-lg text-neutral-800">
            <div
              className="flex items-center gap-2"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <span className="inline-block w-36 font-bold">
                April 5, 2025
              </span>
              <span>
                - Get ready of preparation for {"  "}
                <a
                  className="text-red-500"
                  href="https://github.com/open-polymer-challenge/challenge-code/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Baselines and Python Package
                </a>
                ,{"  "}
                <a
                  className="text-red-500"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
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
            Team
          </h2>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>Gang Liu </b> is a PhD student of Computer Science and Engineering at the University of Notre Dame. He received his B.S. degree from Southwest University in 2021. His interests include generative methods for scientific discovery. He has publications in venues such as KDD, NeurIPS, ICML, and ICLR, and has served as a reviewer for NeurIPS/ICML since 2022. His work has been recognized with the 2024–2025 IBM PhD Fellowship.
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>Jiaxin Xu </b> is a PhD student of Mechanical Engineering at the University of Notre Dame. He received his B.S. degree at Huazhong University of Science and Technology in 2020. His research interests lie in polymer informatics combining computational simulation and machine learning for various energy and mass transport applications. He has publications in top journals like Energy Conversion and Management, Materials Today Physics, ES Energy \& Environment, as well as top machine learning conferences like KDD and NeurIPS. He has served as a reviewer for Chemical Physics and Journal of Chemical Information and Modeling since 2023.
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>Eric Inae </b> is a PhD student of Computer Science and Engineering at the University of Notre Dame. He received his B.S. degreeat Andrews University in 2022. His research interests lie in graph machine learning with applications in material science. He was awarded the Dean's Fellowship of the University of Notre Dame in 2022. He has publications in top venues such as KDD and NeuIPS and has served as a reviewer for AAAI since 2023.
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>Yihan Zhu </b> is a PhD student of Computer Science and Engineering at the University of Notre Dame. She received her B.S. degree at Southeast University in 2021 and her Master's degree at Columbia University in 2023. Her research interests lie in AI for science, especially graph machine learning on polymer data.
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>Addison Howard </b> leads Program Management for Competitions at Kaggle, the largest community of data scientists in the world with over 23 million users. His role in the challenge includes coordinators, and platform administrators.
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>Ying Li </b> joined the University of Wisconsin-Madison in
              August 2022 as an Associate Professor of Mechanical Engineering.
              From 2015 to 2022, he was an Assistant Professor of Mechanical
              Engineering at the University of Connecticut and was promoted to
              Associate Professor. He received his Ph.D. in 2015 from
              Northwestern University, focusing on the multiscale modeling of
              soft matter and related biomedical applications. His current
              research interests are: multiscale modeling, computational
              materials design, mechanics and physics of polymers, and machine
              learning-accelerated polymer design. Dr. Li's achievements in
              research have been widely recognized by fellowships and awards,
              including ACS Polymeric Material Science and Engineering (PMSE)
              Young Investigator Award (2023), NSF CAREER Award (2021), Air
              Force's Young Investigator Award (2020), 3M Non-Tenured Faculty
              Award (2020), ASME Haythornthwaite Young Investigator Award
              (2019), NSF CISE Research Initiation Initiative Award (2018) and
              multiple best paper awards from major conferences. He has authored
              and co-authored more than 130 peer-reviewed journal articles,
              including Science Advances, Physical Review Letters, ACS Nano,
              Journal of Mechanics and Physics of Solids, and Macromolecules,
              etc. He has been invited as a reviewer for more than 100
              international journals, such as Nature Communications and Science
              Advances. Dr. Li's lab is currently supported by
              multi-million-dollar grants and contracts from NSF, AFOSR, AFRL,
              ONR, DOE/National Nuclear Security Administration, DOE/National
              Alliance for Water Innovation, and industries.
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>Tengfei Luo </b> is the Dorini Family Professor and Associate
              Chair in the Department of Aerospace and Mechanical Engineering
              (AME) with a concurrent appointment in the Department of Chemical
              and Biomolecular Engineering (CBE) at the University of Notre Dame
              (UND). Before joining UND, he was a postdoctoral associate at
              Massachusetts Institute of Technology (2009-2011) after obtaining
              his PhD from Michigan State University (2009). At UND, Dr. Luo's
              group focuses on nanoscale thermal transport, electronics thermal
              management, novel material design and manufacturing, space
              technology, and water treatment. Since joining UND in 2012, he has
              won many awards as an independent researcher, such as the Japan
              Society for the Promotion of Science (JSPS) Invitational Fellow
              (2019), DuPont Young Professor Award (2016), the DARPA Young
              Faculty Award (2015), ASME Fellow, the ACS PRF New Doctoral
              Investigator Award (2013), the Air Force Summer Faculty Fellowship
              (2015), the Best Paper Award of the Society-Wide
              Micro/Nanotechnology Forum of ASME (2015).
            </p>
          </div>
          <div className="flex mb-4 mt-4">
            <p
              className="text-lg w-3/4"
              style={{ fontFamily: "Khula, sans-serif" }}
            >
              <b>Meng Jiang </b> is an Associate Professor of Computer Science
              and Engineering at the University of Notre Dame. He received B.E.
              and PhD from Tsinghua University. He was a visiting scholar at CMU
              and a postdoc at UIUC. He is interested in data mining, machine
              learning, and natural language processing. His research focuses on
              graph and text data for applications such as material discovery,
              question answering, user modeling, and mental health. He received
              the NSF CAREER Award and multiple best paper awards.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Challenge;
