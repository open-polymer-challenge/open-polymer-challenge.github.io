import React, { useState } from "react";

const Predict = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const properties = [
    { name: "o2", description: "O\u2082 Permeability" },
    { name: "n2", description: "N\u2082 Permeability" },
    { name: "h2", description: "H\u2082 Permeability" },
    { name: "co2", description: "CO\u2082 Permeability" },
    { name: "ch4", description: "CH\u2084 Permeability" },
  ];

  const [selectedProperties, setSelectedProperties] = useState([]);
  const handleButtonClick = (property) => {
    setSelectedProperties((prevProperties) => {
      if (prevProperties.includes(property)) {
        return prevProperties.filter((prop) => prop !== property);
      } else {
        return [...prevProperties, property];
      }
    });
  };

  const [selectedModel, setSelectedModel] = useState("rf");
  const models = [{ name: "rf", description: "Random Forest" }];
  // Define your click handler for the model buttons
  const handleModelClick = (modelName) => {
    setSelectedModel(modelName);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedSmiles, setSubmittedSmiles] = useState("");
  const [submittedProperties, setSubmittedProperties] = useState([]);
  const [submittedModel, setSubmittedModel] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue || selectedProperties.length === 0) {
      // Do nothing
    } else {
      setIsSubmitted(true);
      setSubmittedSmiles(inputValue);
      setSubmittedProperties(selectedProperties);
      setSubmittedModel(selectedModel);
      setError(null);

      // Construct the payload
      const payload = {
        smiles: inputValue,
        properties: selectedProperties,
        model: selectedModel,
      };
      // Make the POST request to the backend
      fetch("http://localhost:3001/predict", {
        // Replace with your actual backend URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log("Prediction Results:", data);
          setPrediction(data['prediction']);
          // Process the prediction results here
          // You might want to update the state to display the results in your component
        })
        .catch((error) => {
          console.error("Error:", error);
          setError(error.message);
        });

      setInputValue(""); // clear input value
      setSelectedProperties([]); // clear selected properties
      setSelectedModel("rf"); // clear selected properties
    }
  };

  // const [isModelSelectionExpanded, setIsModelSelectionExpanded] =
  //   useState(false);

  return (
    <main>
      <section className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 w-full mx-auto px-4 sm:px-6 lg:px-8 py-40 mt-16 top-20">
        <h1 className="text-5xl font-bold text-white text-center">
          Property Prediction AI Tools
        </h1>
      </section>
      <section className="my-8 container mx-auto px-4">
        <div className="bg-white p-8 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Type a SMILES</h3>
          {!(inputValue && selectedProperties.length > 0) && (
            <p className="text-red-500 mt-2">
              Please enter a SMILES and select at least one property.
            </p>
          )}
          <div className="flex items-center mb-4">
            <form onSubmit={handleSubmit} className="flex w-full">
              <input
                type="text"
                placeholder="e.g., [H]C(*)=C(*)C(C)(C)C"
                className="border border-gray-300 rounded p-2 flex-grow"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className={`${
                  inputValue && selectedProperties.length > 0
                    ? "bg-blue-500 hover:bg-blue-400 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                } text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center ml-4`}
                disabled={!(inputValue && selectedProperties.length > 0)}
              >
                NEXT
              </button>
            </form>
          </div>
          <div className="mt-8 flex items-center flex-wrap">
            <h3 className="text-xl mb-4 mr-4">Select Properties</h3>
            {properties.map((property) => (
              <button
                key={property.name}
                onClick={() => handleButtonClick(property.name)}
                className={`border border-gray-300 rounded p-2 mb-2 mr-2 ${
                  selectedProperties.includes(property.name)
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
              >
                {property.description}
              </button>
            ))}
          </div>
          <div className="mt-8 flex items-center flex-wrap">
            <h3 className="text-xl mb-4 mr-4">Select Model</h3>
            {models.map((model) => (
              <button
                key={model.name}
                onClick={() => handleModelClick(model.name)}
                className={`border border-gray-300 rounded p-2 mb-2 mr-2 ${
                  selectedModel === model.name ? "bg-blue-500 text-white" : ""
                }`}
              >
                {model.description}
              </button>
            ))}
          </div>
          <p className="mt-8 text-sm">
            {" "}
            Note: The inference would be slower with more properties are
            selected for predict{" "}
          </p>
        </div>
      </section>
      {isSubmitted && (
        <section className="my-8 container mx-auto px-4">
          {/* <h2>Predicting and visualizing the results...</h2> */}
          <p className="mt-4">You have entered the SMILES: {submittedSmiles}</p>
          <p className="mt-4">
            You have selected the following properties:{" "}
            {submittedProperties.join(", ")}
          </p>
          <p className="mt-4">You have selected the model: {submittedModel}</p>
          {prediction && (
            <p className="mt-4">The prediction result is: {prediction}</p>
          )}
          {error && <p className="mt-4">An error occurred: {error}</p>}
        </section>
      )}
    </main>
  );
};

export default Predict;
