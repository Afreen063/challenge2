import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";
import urls from "./Constants/constants"; //Contain an array of object [{url:string,thumbnail:string}]

function App() {
  const [currentUrl, setCurrentUrl] = useState(
    "https://www.youtube.com/watch?v=CsOsmgUmT9U"
  );
  const [hover, setHover] = useState(false); //to add the hover Effect

  return (
    <div
      className="App"
      style={{
        display: "flex",
        width: "57%",
        margin: "auto",
        flexDirection: "column",
        alignItems: "center",
        border: "4px solid #764646",
        borderRadius: "20px",
      }}
    >
      <h1 style={{ fontWeight: "bold", color: "#545421" }}>Video Player</h1>
      {/** Video player from react-players */}
      <ReactPlayer url={currentUrl} />

      <div
        className="thumbnail"
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        style={{
          marginTop: "10px",
          width: "650px",
          display: "flex",
          flexDirection: "row",
          cursor: "pointer",
          overflowX: hover ? "scroll" : "auto",
        }}
      >
        {hover ? (
          urls.map((item, index) => {
            return (
              <img
                key={String(index)}
                alt="thumbnail"
                src={item.thumbnail}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  margin: "5px",
                }}
                onClick={() => {
                  setCurrentUrl(item.url);
                }}
              />
            );
          })
        ) : (
          <div
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            style={{ color: "#FFFF" }}
          >
            {".."}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
