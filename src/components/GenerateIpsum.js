import React from "react"
import { pidgin } from "./grammarDatabases/index.js"
import tracery from "tracery-grammar"
// const tracery = require("tracery-grammar")

function capFirstLetter(s) {
  return s[0].toUpperCase() + s.slice(1)
}

function makeLorem(numSentence, numGraph, startWith) {
  const grammar = tracery.createGrammar(pidgin)
  let arrayGraph = []

  for (let j = 0; j < numGraph; j++) {
    let oneGraph = ""
    for (let i = 0; i < numSentence; i++) {
      let sentence = grammar.flatten("#S#")
      oneGraph += capFirstLetter(sentence) + " "
    }
    arrayGraph.push(oneGraph)
  }

  if (startWith) {
    arrayGraph[0] = "Dakine ipsum dolor sit amet. " + arrayGraph[0]
  }

  return arrayGraph.map((curGraph, index) => <p key={index}>{curGraph}</p>)
}

function GenerateIpsum(props) {
  let lorem = makeLorem(props.numSentence, props.numGraph, props.startWith)
  return <div>{lorem}</div>
}

export default GenerateIpsum
