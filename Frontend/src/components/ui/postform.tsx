import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

import axios from "axios";

const Createpost = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const imgRef = useRef(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/posts/create", { img, text });

      const Data = await res.data;
      if (Data.error) {
        throw new Error(Data.Error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImgChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        //@ts-ignore
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
      <textarea
        className="textarea w-full p-0 text-lg resize-none border-none focus:outline-none  border-gray-800"
        placeholder="What is happening?!"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {img && (
        <div className="relative w-72 mx-auto">
          <IoCloseSharp
            className="absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer"
            onClick={() => {
              setImg(null);
              //@ts-ignore
              imgRef.current.value = null;
            }}
          />
          <img
            src={img}
            className="w-full mx-auto h-72 object-contain rounded"
          />
        </div>
      )}

      <div className="flex justify-between border-t py-2 border-t-gray-700">
        <div className="flex gap-1 items-center">
          <CiImageOn
            className="fill-primary w-6 h-6 cursor-pointer"
            //@ts-ignore
            onClick={() => imgRef.current.click()}
          />
          <BsEmojiSmileFill className="fill-primary w-5 h-5 cursor-pointer" />
        </div>
        <input
          type="file"
          accept="image/*"
          hidden
          ref={imgRef}
          onChange={handleImgChange}
        />
        <button className="btn btn-primary rounded-full btn-sm text-white px-4"></button>
      </div>
    </form>
  );
};
export default Createpost;
