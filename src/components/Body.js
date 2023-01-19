import React from "react"
import GenerateIpsum from "./GenerateIpsum"
import { useState } from "react"

function Body() {
  const [numSentence, setnumSentence] = useState(5)
  const [numGraph, setnumGraph] = useState(3)
  const [check, setCheck] = useState(false)
  const [count, setCount] = useState(0)

  const handleSubmit = (event) => {
    setCount(count + 1) // /hacky way to get submit to work everytime by changing something in the state
    setCheck(event.target.startWith.checked)
    setnumSentence(event.target.numSentences.value)
    setnumGraph(event.target.numParagraphs.value)

    event.preventDefault()
  }

  return (
    <div className="comp-body">
      <h2 className="body-heading">Like da kine ipsum words fo wan design?</h2>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-items">
          <label>
            <input className="form-checkbox" type="checkbox" name="startWith" />{" "}
            Start With "Dakine Ipsum Dolor Sit Amet"
          </label>
        </div>
        <div className="form-items">
          <input
            className="input-number"
            type="number"
            name="numSentences"
            max="99"
            placeholder="#"
            size="10"
            defaultValue={8}
          />
          <label> Sentences Per</label>
        </div>
        <div className="form-items">
          <input
            className="input-number"
            type="number"
            name="numParagraphs"
            max="99"
            placeholder="#"
            defaultValue={3}
          />
          <label> Paragraphs</label>
        </div>
        <div className="form-submit">
          <input
            className="form-submit-button"
            type="submit"
            value="Chaj em!"
          />
        </div>
      </form>

      <section className="ipsum-container">
        {count ? (
          <GenerateIpsum
            numGraph={numGraph}
            numSentence={numSentence}
            startWith={check}
          />
        ) : (
          <></>
        )}
      </section>
    </div>
  )
}

export default Body
