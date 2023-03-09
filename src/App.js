import "./App.css";
import { Parallax } from "react-parallax";

const image1 = "img/img1.jpg";
const image2 = "img/img4.jpg";
const image3 = "img/img8.jpg";
const image4 = "img/img42.jpg";

const inlineStyle = {
  background: "#fff",
  left: "50%",
  top: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%,-50%)",
};
function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 800 }}>
          <div style={inlineStyle}>HTML inside the parallax</div>
        </div>
      </Parallax>

      <h1>|||</h1>

      <Parallax bgImage={image2} blur={{ min: -1, max: 5 }}>
        <div style={{ height: 800 }}>
          <div style={inlineStyle}>Dynamic Blur</div>
        </div>
      </Parallax>

      <h1>|||</h1>

      <Parallax bgImage={image3} strength={-500}>
        <div style={{ height: 800 }}>
          <div style={inlineStyle}>Reverse Direction</div>
        </div>
      </Parallax>

      <h1>|||</h1>

      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percentage) => (
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius:"50%",
              background: `rgba(0,128,128,${percentage})`,
              left: "50%",
              top: "50%",
              transform: `translate(-50%,-50%) scale(${percentage*5})` ,
            }}
          >
            {console.log(percentage)}
          </div>
        )}
      >
        <div style={{ height: 800 }}>
          <div style={inlineStyle}>Render Prop</div>
        </div>
      </Parallax>

    

      <div style={{ height: "50vh" }}></div>
    </div>
  );
}

export default App;
