import React from "react";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
// import cover from "../imgs/cover.png"; // Tell webpack this JS file uses this image
import bg from "../imgs/bg.png"; // Tell webpack this JS file uses this image

function MainContent() {
  const navigate = useNavigate();

  const handleSubmit = (event, path) => {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;
    navigate(`/${path}/${inputValue}`);
  };
  return (
    <main>
      <section
        class="w-full mx-auto px-4 sm:px-6 lg:px-8 py-60 mt-16 top-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "top left",
        }}
      >
        <div class="pt-0">
          <div class="text-5xl font-bold mb-6 text-white ">
            AI-integrated Platform for Accelerated Polymer-by-design
          </div>
          <div class="flex grid grid-cols-2 gap-4 font-sans">
            <p class="text-white mb-6 mr-4">
              A pinnacle aspiration in polymer science and engineering.
              <p class="text-white mb-6 mr-4">
                We dedicated to advancing polymer-by-design by our project
                PolyCI, which stands as an interactive platform, enabling users
                to design novel polymers tailored to their target properties for
                a wide spectrum of applications.{" "}
              </p>
              <p
                class="font-bold text-lg text-white hover:text-blue-800 self-center"
                href="/#"
              >
                Read about more features &gt;
              </p>
            </p>
          </div>
        </div>
      </section>

      <section class="bg-gray-200 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 class="text-3xl font-bold mb-3">Latest News</h3>
          <ul class="text-gray-600 space-y-4">
            <li>
              <a class="hover:text-blue-600" href="/#">
                News 3
              </a>
              <p class="text-sm text-gray-500">March 2023</p>
            </li>
            <li>
              <a class="hover:text-blue-600" href="/#">
                News 2
              </a>
              <p class="text-sm text-gray-500">March 2023</p>
            </li>
            <li>
              <a class="hover:text-blue-600" href="/#">
                News 1
              </a>
              <p class="text-sm text-gray-500">June 2022</p>
            </li>
          </ul>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-3xl font-bold mb-3">Polymer Property Prediction</h3>
            <p class="text-gray-600 mb-6">
              Type SMILES string of the polymer you want to predict the property
              of
            </p>
            <form onSubmit={(event) => handleSubmit(event, "polymer-property")}>
              <input
                name="input"
                class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto block mb-2 w-full"
                placeholder="e.g., [H]C(*)=C(*)C(C)(C)C"
              />
              <button
                type="submit"
                class="text-blue-600 hover:text-blue-800 bg-transparent border-none"
              >
                Submit and see results &gt;
              </button>
            </form>
          </div>
          <div>
            <h3 class="text-3xl font-bold mb-3">Inverse Polymer Design</h3>
            <p class="text-gray-600 mb-6">
              Type oxygen permeability number (Barrier) you want to condition on
            </p>
            <form onSubmit={(event) => handleSubmit(event, "inverse-design")}>
              <input
                name="input"
                class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto block mb-2 w-full"
                placeholder="106."
              />
              <button
                type="submit"
                class="text-blue-600 hover:text-blue-800 bg-transparent border-none"
              >
                Submit and see results &gt;
              </button>
            </form>
          </div>
        </div>
      </section>

      <section class="bg-gray-200 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 class="text-3xl font-bold mb-3">How it works</h3>
          <p class="text-gray-600 mb-6">How it works</p>
          <a class="text-blue-600 hover:text-blue-800" href="/#">
            Learn more &gt;
          </a>
        </div>
      </section>

      <section class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 class="text-3xl font-bold mb-3">Join a community of millions</h3>
          <p class="mb-6">
            You're not alone. Millions of developers from all over the world use
            React every day. React is more than a library or a technology, it's
            an ecosystem that's constantly growing. This ecosystem includes
            educators, creators, maintainers, and more. They all make React what
            it is, and they're all welcoming to new developers. Our beginners
            may be very different, but they all start at our starter series
            together. Reactively.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <img
              alt="A placeholder representing a React community member"
              class="rounded-full"
              height="150"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ymcVO9HMTGpqt9uyyaTl5xRh/user-H5AhfrSEXbSR7TeuHocr07XG/img-skPmJ82zX6kRridcUsYWvFbZ.png?st=2024-01-04T19%3A06%3A13Z&amp;se=2024-01-04T21%3A06%3A13Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-03T21%3A30%3A28Z&amp;ske=2024-01-04T21%3A30%3A28Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=JZVEvZG32OkTMG5bJiHntHfpTECEcxxIsZMlkojmNH0%3D"
              width="150"
            />
            <img
              alt="A placeholder representing a React community member"
              class="rounded-full"
              height="150"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ymcVO9HMTGpqt9uyyaTl5xRh/user-H5AhfrSEXbSR7TeuHocr07XG/img-skPmJ82zX6kRridcUsYWvFbZ.png?st=2024-01-04T19%3A06%3A13Z&amp;se=2024-01-04T21%3A06%3A13Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-03T21%3A30%3A28Z&amp;ske=2024-01-04T21%3A30%3A28Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=JZVEvZG32OkTMG5bJiHntHfpTECEcxxIsZMlkojmNH0%3D"
              width="150"
            />
            <img
              alt="A placeholder representing a React community member"
              class="rounded-full"
              height="150"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ymcVO9HMTGpqt9uyyaTl5xRh/user-H5AhfrSEXbSR7TeuHocr07XG/img-skPmJ82zX6kRridcUsYWvFbZ.png?st=2024-01-04T19%3A06%3A13Z&amp;se=2024-01-04T21%3A06%3A13Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-03T21%3A30%3A28Z&amp;ske=2024-01-04T21%3A30%3A28Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=JZVEvZG32OkTMG5bJiHntHfpTECEcxxIsZMlkojmNH0%3D"
              width="150"
            />
            <img
              alt="A placeholder representing a React community member"
              class="rounded-full"
              height="150"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ymcVO9HMTGpqt9uyyaTl5xRh/user-H5AhfrSEXbSR7TeuHocr07XG/img-skPmJ82zX6kRridcUsYWvFbZ.png?st=2024-01-04T19%3A06%3A13Z&amp;se=2024-01-04T21%3A06%3A13Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-03T21%3A30%3A28Z&amp;ske=2024-01-04T21%3A30%3A28Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=JZVEvZG32OkTMG5bJiHntHfpTECEcxxIsZMlkojmNH0%3D"
              width="150"
            />
          </div>
          <a class="text-blue-400 hover:text-blue-300" href="/#">
            Welcome to the React community &gt;
          </a>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
