import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ecdb3d94-fc65-4c93-8013-29008379d0db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="h-[100vh] container ">
      <h1 className="text-white text-3xl py-8 text-center">
        Contact <span className="text-blue-700">Me</span>
      </h1>
      <div className="flex justify-between items-center w-full">
        <div className="flex-grow flex justify-center">
          <form className="w-full max-w-md p-8" onSubmit={onSubmit}>
            <div className="border border-gray-300 rounded-2xl p-6 flex flex-col">
              <div className="mb-4 flex flex-col sm:flex-row">
                <input
                  className="w-full border rounded-lg py-2 px-3 text-white"
                  placeholder="Enter your Name"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4 flex flex-col sm:flex-row">
                <input
                  className="w-full border rounded-lg py-2 px-3 text-white"
                  placeholder="Enter your Email"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-6 flex flex-col sm:flex-row">
                <textarea
                  className="w-full border rounded-lg py-2 px-3 text-white"
                  placeholder="Description"
                  id="description"
                  name="description"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white rounded-xl bg-black hover:bg-blue-700 py-2 px-4 transition duration-300"
              >
                Submit
              </button>
            </div>
            {result && (
              <p className="text-white text-lg mt-4 text-center">{result}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
