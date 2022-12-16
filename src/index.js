import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <main>
    <Schedule />
    <Preview />
  </main>
  </React.StrictMode>
);

// ===================================

// there is a form-like structure *
function Schedule() {
  return (
    <section id="schedule">
      <ScheduleTitle />
      <ScheduleLength />
      <ScheduleIntervals />
    </section>
  );
}

//  the form has a customizable title *
function ScheduleTitle() {
  return (
    <input
      type="text"
      id="schedule-title"
      className="react-cyclette-input"
      placeholder="Me Schedule Title!"
    />
  );
}

//  the form has a total length *
function ScheduleLength() {
  return <h3>Me Schedule Length!</h3>;
}

//  the form has an interval list *
function ScheduleIntervals() {
  return (
    <section>
      <h4>Me Intervals List!</h4>
      <AddIntervalButton />
      <ol id="schedule-list">
        <Interval />
        <Interval />
        <Interval />
      </ol>
    </section>
  );
}

//    the interval list has a button to add more elements *
class AddIntervalButton extends React.Component {
  addElement() {
    // https://stackoverflow.com/questions/58328048/is-there-a-way-to-append-dynamically-to-a-ul-ul-in-reactjs
    console.log("wow such advancements");
  }

  render() {
    return <button onClick={this.addElement}>+</button>;
  }
}

//    the interval list has at least one element *
class Interval extends React.Component {
  //      each element has a title *
  //      each element has a minute counter *
  render() {
    return (
      <li>
        Me Sample Interval!
        <input type="number"></input>
      </li>
    );
  }
}

// ===================================

// ...and there is a print preview *
//  the preview has a title *
function Preview() {
  return (
    <section id="preview">
      <h1>Me Print Preview!</h1>
      <PreviewRender />
      <PrintPreviewButton />
    </section>
  );
}

//  the preview has a render *
function PreviewRender() {
  return <div>I HAVE NO CLUE - FRAMES OR SOMETHING I GUESS</div>;
}

//  the preview has a print button *
function PrintPreviewButton() {
  return <button>Me Print Preview Button!</button>;
}
