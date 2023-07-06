/* eslint-disable */
import "bootstrap";
import "./styles.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//

window.onclick = function() {
  //elements of excuse
  let subject = ["the dog", "my grandma", "his turtle", "my bird"];
  let verb = ["ate", "spilled coffee on", "crushed", "broke"];
  let object = ["my homework", "the keys", "the car"];
  let dependentClause = [
    "before class.",
    "right on time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying."
  ];
  //random element in an array
  let randomSubject = Math.floor(Math.random() * subject.length);
  let randomVerb = Math.floor(Math.random() * verb.length);
  let randomObject = Math.floor(Math.random() * object.length);
  let randomDependentClause = Math.floor(
    Math.random() * dependentClause.length
  );
  //call the function onload and set the excuse to innerHTML
  document.getElementById("excuse").innerHTML =
    subject[randomSubject] +
    " " +
    verb[randomVerb] +
    " " +
    object[randomObject] +
    " " +
    dependentClause[randomDependentClause];
};
