import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <main>
    <Schedule />
    <Preview />
  </main>
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
      class="react-cyclette-input"
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
      <ol>
        <Interval />
        <Interval />
        <Interval />
      </ol>
    </section>
  );
}

//    the interval list has a button to add more elements *
function AddIntervalButton() {
  return <button>+</button>;
}

//    the interval list has at least one element *
function Interval() {
  //      each element has a title *
  //      each element has a minute counter *
  return (
    <li>
      Me Sample Interval!
      <input type="number"></input>
    </li>
  );
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
