import { useState } from "react";
import { OpenAI } from "openai";
import { ColorRing } from "react-loader-spinner";
import {AiOutlineSend,AiFillFileImage } from 'react-icons/ai'

const apiKey = process.env.REACT_APP_OPEN_AI_KEY;

function ChatOpenAI() {
  const [command, setCommand] = useState(""); // Input User
  const [loading, setLoading] = useState(false); // Loader wait response
  const [result, setResult] = useState([]); // Save response from OpenAI

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: command },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 150,
      presence_penalty: 0.6,
      frequency_penalty: 0.6,
      top_p: 0.7,
    });

    setResult(res.choices);
    setLoading(false);
  };

  const handleSubmitWithImage = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imageResponse = await openai.images.generate({ prompt: command });
    setResult(imageResponse.data);
    setLoading(false);
  };

  return (
    <div className="bg-black-secondary border-b-2 text-gray h-screen flex flex-col max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl rounded-3xl my-10">
      <div className="flex-1 overflow-y-scroll">
        {loading ? (
          <ColorRing
            visible={true}
            height={80}
            width={80}
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        ) : (
          <div>
            {result.length > 0 &&
              result.map((item, index) => (
                <div key={index} className="flex justify-end mt-2 mr-2">
                  <div className="bg-green-500 rounded-lg px-4 py-2 text-black max-w-sm">
                    {item.message ? (
                      item.message.content
                    ) : (
                      // Display the generated image
                      <img
                        src={item.url}
                        alt="Generated Image"
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center m-2">
          <input
            type="text"
            className="w-full border rounded-lg py-2 px-4 text-black"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Type a message"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2 text-white ml-2"
          >
            <AiOutlineSend />
          </button>
          <button
            onClick={handleSubmitWithImage}
            className="bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2 text-white ml-2"
          >
            <AiFillFileImage />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatOpenAI;
