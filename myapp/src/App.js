import React, { useState } from "react";
// import './App.css';
import "./index.css";

var flags={
// "❄" : "Winter",
// "☀": "Summer",
// "🍂": "Autumn",
// "🌻" : "Spring",
"😀": "Grinning Face",
"😃": "Grinning Face with Big Eyes",
"😄" :"Grinning Face with Smiling Eyes",
"😁": "Beaming Face with Smiling Eyes",
"😆" :"Grinning Squinting Face",
"😅": "Grinning Face with Sweat",
"🤣": "Rolling on the Floor Laughing",
"😂": "Face with Tears of Joy",
"🙂": "Slightly Smiling Face",
"🙃":  "Upside-Down Face",
"😉": "Winking Face",
"😊": "Smiling Face with Smiling Eyes",
"😇": "Smiling Face with Halo",
"🥰": "Smiling Face with Hearts",
"🤩":  "Star-Struck",
"😘": "Face Blowing a Kiss",
"😋": "Face Savoring Food",
"😜": "Winking Face with Tongue",
"🤪":  "Zany Face",
"😝": "Squinting Face with Tongue",
"🤑": "Money-Mouth Face",
"😬": "Grimacing Face",
"🤧":  "Sneezing Face",
"🥵": "Hot Face",
"🥶": "Cold Face",
"🥴": "Woozy Face",
"😵": "Face with Spiral Eyes",
"🤯": "Exploding Head",
"🤠": "Cowboy Hat Face",
"🥳" :"Partying Face",
"😎" : "Smiling Face with Sunglasses",
"🤓" : "Nerd Face",
"🧐" :  "Face with Monocle",
"😕": "Confused Face",
"😟" : "Worried Face",
"🙁": "Slightly Frowning Face",
"☹️": "Frowning Face",
"😮": "Face with Open Mouth",
"😯" :"Hushed Face",
"😲": "Astonished Face",
"😳": "Flushed Face",
"🥺" :"Pleading Face",
"😦" : "Frowning Face with Open Mouth",
"😧": "Anguished Face",
"😨": "Fearful Face"

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
 

 <h1 className="Heading">GUESS THE RIGHT EMOJI😋</h1>
 
 
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



