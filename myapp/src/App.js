import React, { useState } from "react";
// import './App.css';
import "./index.css";

var flags={
// "â" : "Winter",
// "â": "Summer",
// "ð": "Autumn",
// "ðŧ" : "Spring",
"ð": "Grinning Face",
"ð": "Grinning Face with Big Eyes",
"ð" :"Grinning Face with Smiling Eyes",
"ð": "Beaming Face with Smiling Eyes",
"ð" :"Grinning Squinting Face",
"ð": "Grinning Face with Sweat",
"ðĪĢ": "Rolling on the Floor Laughing",
"ð": "Face with Tears of Joy",
"ð": "Slightly Smiling Face",
"ð":  "Upside-Down Face",
"ð": "Winking Face",
"ð": "Smiling Face with Smiling Eyes",
"ð": "Smiling Face with Halo",
"ðĨ°": "Smiling Face with Hearts",
"ðĪĐ":  "Star-Struck",
"ð": "Face Blowing a Kiss",
"ð": "Face Savoring Food",
"ð": "Winking Face with Tongue",
"ðĪŠ":  "Zany Face",
"ð": "Squinting Face with Tongue",
"ðĪ": "Money-Mouth Face",
"ðŽ": "Grimacing Face",
"ðĪ§":  "Sneezing Face",
"ðĨĩ": "Hot Face",
"ðĨķ": "Cold Face",
"ðĨī": "Woozy Face",
"ðĩ": "Face with Spiral Eyes",
"ðĪŊ": "Exploding Head",
"ðĪ ": "Cowboy Hat Face",
"ðĨģ" :"Partying Face",
"ð" : "Smiling Face with Sunglasses",
"ðĪ" : "Nerd Face",
"ð§" :  "Face with Monocle",
"ð": "Confused Face",
"ð" : "Worried Face",
"ð": "Slightly Frowning Face",
"âđïļ": "Frowning Face",
"ðŪ": "Face with Open Mouth",
"ðŊ" :"Hushed Face",
"ðē": "Astonished Face",
"ðģ": "Flushed Face",
"ðĨš" :"Pleading Face",
"ðĶ" : "Frowning Face with Open Mouth",
"ð§": "Anguished Face",
"ðĻ": "Fearful Face"

};

var flagkeys= Object.keys(flags);
 function App() {

  const [userInputMeaning, flagmeaning] = useState("");

  function flagInput(e) {
    var Input = e.target.value;
    var meaning = flags[Input];
    if (meaning === undefined) {
      meaning = "Not found in our database";
    }
    
flagmeaning(meaning);
  }

  function ClickHandler(flag) {
    var meaning = flags[flag];
    flagmeaning(meaning);
  }

  return (
 <div className="container">
  <body>
 

 <h1 className="Heading">GUESS THE RIGHT EMOJIð</h1>
 
 
 <input onChange={flagInput} />
			<h2>{userInputMeaning}</h2>
			<h2>What we know</h2>
   
			{flagkeys.map(function (keys) {
				return (
      
					<span onClick={() => ClickHandler(keys)}>{keys}</span>
         
				);
			})}

</body>
 </div>
  );
}
export default App;



