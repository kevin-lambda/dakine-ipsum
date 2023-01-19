import React from "react"

function AboutMain() {
  return (
    <div className="comp-body2">
      <h1>About</h1>
      <p>
        Made by{" "}
        <span>
          <a href="https://kevin-lambda.github.io/">Kevin Lam</a>
        </span>{" "}
        who can't get enough spam musubis.
      </p>
      <p>
        This lorem ipsum text project uses a{" "}
        <span>
          <a href="https://brilliant.org/wiki/context-free-grammars/ ">
            Context Free Grammar
          </a>
        </span>{" "}
        (CFG) developed and configured by me. The CFG creates a language that
        attempts to make grammatically logical sentences relative to english
        grammar rules. The database of words for the CFG were manually collected
        by me.
      </p>
      <h1>Acknowledgements & Key Technology</h1>
      <p>
        <span>
          <a href="https://www.lester-lee.com/">Lester Lee</a>
        </span>{" "}
        for early project guidance,{" "}
        <span>
          <a href="https://www.galaxykate.com/">Kate Compton</a>
        </span>{" "}
        for the Tracery CFG creation library,
        <span>
          {" "}
          <a href="https://v21.io/">v buckenham</a>
        </span>{" "}
        for porting Tracery to nodejs,
        <span>
          {" "}
          <a href="https://rafaelpedicini.com/">Rafael Pedicini</a>
        </span>{" "}
        for single page app functionality in github pages.
      </p>
      <h1>Contact</h1>
      <p>
        You want to get in touch? Here's the
        <span>
          {" "}
          <a href="mailto:kevin.quoct.lam+dakineIpsum@gmail.com">email</a>
        </span>{" "}
      </p>

      <a id="back-button" href="/dakine-ipsum">
        Back
      </a>
    </div>
  )
}

export default AboutMain
