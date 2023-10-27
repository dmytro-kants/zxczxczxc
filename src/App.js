import React, { useState } from "react";
import "./App.css";
import Editor from "./Editor";
import edjsParser from "editorjs-parser";
// Initial Data
const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
  ],
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const customParsers = {
    customBlock: function(data, config) {
        // parsing functionality
        // the config arg is user provided config merged with default config
    },
    image: function(data, config){
        return `<img src="${data.file.url}" alt="${data.caption}" />`;
    }
}
  const parser = new edjsParser(undefined, customParsers);
  
  return (
    <div className="editor">
      <Editor data={data} onChange={setData} editorblock="editorjs-container" />
      <button
        className="savebtn"
        onClick={() => {
          alert(JSON.stringify(data));
          console.log(parser.parse(data));
        }}
      >
        Save
      </button>
      <>
      <h1>This is my awesome editor!</h1><img src="http://res.cloudinary.com/dlbsa9dgi/image/upload/v1698335471/itoe0kd0ut1zq9nbkxrr.jpg" alt="" /><p class="paragraph"> gucci prada </p><img src="http://res.cloudinary.com/dlbsa9dgi/image/upload/v1698335494/jkabdt4745443vosj7j1.jpg" alt="" />
      </>
    </div>
  );
}

export default App;