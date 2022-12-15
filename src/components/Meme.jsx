import React from "react";

import memesData from "../memesData";
// console.log(memesData);

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImages() {
    const memesArray = allMemeImages.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArray.length);
    console.log(randomMeme);
    const url = memesArray[randomMeme].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main className="p-8 mt-8 md:mt-0 md:p-20">
      <div className="grid grid-cols-2  items-center jusify-center md:w-9/12 mx-auto gap-4 ">
        <input
          type="text"
          placeholder="Top Text"
          className="border border-3 p-3 md:p-4 text-lg font-Karla rounded-lg"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="border border-3 p-3 md:p-4 text-lg font-Karla rounded-lg "
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          onClick={getMemeImages}
          className="col-span-full border border-3 p-3 md:p-4 font-Karla rounded-lg text-white text-lg bg-gradient-to-r from-btnLeft to-btnRight"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="md:w-9/12 mx-auto relative flex items-start justify-center">
        <img
          src={meme.randomImage}
          alt=""
          className="w-full mt-8 object-cotain rounded-lg shadow-xl"
        />
        <h3 className="text-center text-white shadow text-3xl md:text-5xl uppercase font-Inter font-extrabold absolute  top-9 md:top-20">
          {meme.topText}
        </h3>
        <h3 className="text-center text-white shadow text-3xl md:text-5xl uppercase font-Inter font-extrabold absolute top-3/4 md:top-3/4">
          {meme.bottomText}
        </h3>
      </div>
    </main>
  );
}
