import React from "react"
import { basicEnglish } from "./grammarDatabases/index.js"
import tracery from "tracery-grammar"
// const tracery = require("tracery-grammar")

console.log("==================")
console.log(basicEnglish)

// const grammar = tracery.createGrammar({
//   animal: ["panda", "fox", "capybara", "iguana"],
//   emotion: ["sad", "happy", "angry", "jealous"],
//   origin: ["I am #emotion# #animal#."],
// })

const grammar = tracery.createGrammar(basicEnglish)

let a = grammar.flatten("#S#")
console.log(a)

function GenerateIpsum() {
  return (
    <div>
      GenerateIpsum
      <p>{a}</p>
    </div>
  )
}

export default GenerateIpsum
