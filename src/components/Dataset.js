import React from "react";
import TableComponent from "./Dataset_Table";

const Update = () => (
  <main>
    <section className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 w-full mx-auto px-4 sm:px-6 lg:px-8 py-40 mt-16 top-20">
      <h1 className="text-5xl font-bold text-white text-center">Datasets</h1>
    </section>

    <section class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Overview of Polymer Datasets
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          tortor nec lectus aliquet aliquam. Vivamus interdum urna eu urna
          tempus, vel vehicula mi facilisis. Quisque vitae enim quis ipsum
          commodo gravida. In hac habitasse platea dictumst. Integer ut nunc nec
          nisi fermentum tincidunt et nec velit. Aliquam erat volutpat. Proin
          malesuada dolor sed elit congue, id ultricies tortor eleifend. Sed
          vitae risus vel lorem varius semper. Curabitur non hendrerit nisl, nec
          suscipit justo. Maecenas et elit ut turpis tincidunt bibendum eget nec
          urna. Donec in nisi ac metus faucibus vestibulum. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Morbi nec augue fermentum, convallis eros sit amet, congue
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
      </div>
    </section>

    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Summary of Polymer Datasets</h2>
        {/* Include the TableComponent */}
        <TableComponent />
      </div>
    </section>

    {/* <section className="py-8">
    <div>
      <button onClick={testAddUser}>Test Add User</button>
      <p>{message}</p>
    </div>
    </section> */}

    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-3xl font-bold mb-3">TODO</h3>
        <p className="text-black mb-6 mr-4 text-left">
          Problem 1: datasets we could use; <br />
          1. Experimental dataset (Polyinfo): split to train, validation, test;{" "}
          <br />
          2. Computational dataset (any?): split to train, validation, test;{" "}
          <br />
          3. Hypothetical dataset (Pi1M): used for training? <br />
          4. Any other related dataset? <br />
        </p>
        <p className="text-black mb-6 mr-4 text-left">
          Problem 2: What is the prediction problem we want to solve? and how
          should we evaluate the performance? <br />
          (1) Multi-task permeability prediction above the
          permeability-seletivity bound, the 2008 Robeson upper bound (or the
          2015 one) result in to limited test example, could we define a new one
          to leave out reasonable test data? (including balanced upper and below
          bound polymers for each gas pair). Final evaluation depends on Avg.
          MAE + upper bound binary error <br />
          (2) Prediction for the copolymer? In the work [Aldeghi, M., & Coley,
          C. W. (2022). A graph representation of molecular ensembles for
          polymer property prediction. Chemical Science, 13(35), 10486-10498.] A
          copolymer dataset built from 9 types of monomer A and 682 types of
          monomer B = 6138 copolymers. <br />
          The task is electron affinity (EA, eV) and ionization potential (IP,
          eV), could we use it or a similar one as a task? <br />
          (3) Prediction for other properties like thermal conductivity (may be
          in leaderboard, but not be used in challenges) <br />
        </p>
        <p>permeability, thermal conductivity </p>
        <p className="text-black mb-6 mr-4 text-left">
          Problem 3: What is the inverse design task <br />
          (1) Multi-Conditional Generation for gas permeability, quantitive
          metrics for all gases, relative importance on different metrics; plus:
          is it possible that each team provide 1~5 examples and finally rank
          them with domain expertise? <br />
          same data splitting could be used as prediction tasks <br />
          Conditional on ECFP and then evaluate the training data distribution.{" "}
          <br />
        </p>
        <p className="text-black mb-6 mr-4 text-left">
          Others: data permission; estimation of audience; incentives for
          participation; <br />
          The deadline is like middle of April, I will try to provide a few
          baselines in the leaderboard and online tools (those do not use GPU),
          and probably we should not release the test data when we make the data
          public in the datasets (although the test data may be obtained via
          other ways like querying the polyinfo) <br />
          I also may need to prepare the python package or other dataset
          download ways (some challenge host the competition via kaggle, or may
          follow rules from OGB large-Scale). <br />
        </p>
        <p>Note: competition for model selection and then use the model XXX </p>
      </div>
    </section>
  </main>
);

export default Update;
