import React from "react"
import a from "assets/a.png"
import curly from "assets/curly_bracet.png"
import and from "assets/and.png"

class App extends React.Component {

  render() {
    return (
      <div>
        <ul className="grid-container">
          <li className="helvetica wide2">

            <h1>Helvetica</h1>
            <p><strong>DESIGNED BY</strong>
              <br />
              Max Miedinger 1957
            </p>
          </li>
          <li className="tall2 wide2 a" style={{ backgroundImage: `url(${a})` }} alt="a" />
          <li className="tall2 curly" style={{ backgroundImage: `url(${curly}` }} alt="curly" />
          <li className="and" style={{ backgroundImage: `url(${and})` }} alt="and" />
          <li>
            <h2>USAGE</h2>
            <p>/Apples iOS interface
              /NYCs MTA & Chicagos
              Transit Autority signature
              /NASA Space Shuttle orbiter
            </p>
          </li>
          <li>
            <h2>WIDTHS & HEIGHTS</h2>
            <p>/ weigths
              /three widths (normal,condensed, extended)
              /51 fonts total
            </p>
          </li>
          <li className="tall wide">
            <h2>STROKES</h2>
            <p>/ cut horizontally or vertically
              / distinguishes Helvetica from
            dupes like Arial
            </p>
          </li>
          <li>
            <h2>PUNCTUATION</h2>
            <p>/heavier punctuation marks than Helvetica
            </p>
          </li>
          <li className="wide2">
            <h1>I dont care what it says, as
            long as its in Helvetica
            </h1>
          </li>
          <li className="wide2">
            <h1>ABCDEFGHIJK <br />
              LMNOPQRSTU <br />
              VWXYZ
            </h1>
          </li>
          <li>
            <h2>HELVETICA -THE MOVIE</h2>
            <p>/ docimentation by Gary Hustwit
                / resleased for Helveticas 50th birthday 2007
            </p>
          </li>
        </ul>
      </div>
    )
  }

}

export default App
