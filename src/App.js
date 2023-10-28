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
  const addUser = () => {
    fetch('https://asfasfasfasfasf-8xws.onrender.com/api/addUser', {
      method: 'POST', // или 'GET', в зависимости от вашего случая
      headers: {
        'Content-Type': 'application/json',
        // Дополнительные заголовки, если необходимо
      },
      body: JSON.stringify({
       email:"zxczxczxc@gmail.com"
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Обработка данных от сервера
        console.log(data);
      })
      .catch(error => {
        // Обработка ошибок
        console.error('Error:', error);
      });
  }
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
      <button onClick={addUser}></button>
      </>
    </div>
  );
}

export default App;