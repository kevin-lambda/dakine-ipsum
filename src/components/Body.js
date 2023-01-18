import React from "react"
import GenerateIpsum from "./GenerateIpsum"
import { useState } from "react"

function Body() {
  const [numSentence, setnumSentence] = useState(5)
  const [numGraph, setnumGraph] = useState(3)
  const [check, setCheck] = useState(false)
  const [count, setCount] = useState(0)

  const handleSubmit = (event) => {
    setCount(count + 1) //hacky way to get submit to work everytime by changing something in the state
    setCheck(event.target.startWith.checked)
    setnumSentence(event.target.numSentences.value)
    setnumGraph(event.target.numParagraphs.value)

    event.preventDefault()
  }

  return (
    <div className="comp-body">
      <form onSubmit={handleSubmit}>
        <label>
          check box here: <input type="checkbox" name="startWith" />
        </label>
        <br />

        <label>
          Sentences:
          <input
            type="number"
            name="numSentences"
            max="99"
            placeholder="# sentences"
          />
        </label>
        <br />
        <label>
          Paragraphs:
          <input
            type="number"
            name="numParagraphs"
            max="99"
            placeholder="# paragraphs"
          />
        </label>
        <br />

        <input type="submit" />
      </form>

      <div>
        {count ? (
          <GenerateIpsum
            numGraph={numGraph}
            numSentence={numSentence}
            startWith={check}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Body
