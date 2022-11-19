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
//  the form has a title *
//  the form has a total length *
//  the form has an interval list *
//    the interval list has at least one element *
//      each element has a title *
//      each element has a minute counter *
//    the interval list has a button to add more elements *
// and there is a print preview *
//  the preview has a title *
//  the preview has a render *
//  the preview has a print button

function Schedule() {
  return (
    <section id="schedule">
      <ScheduleTitle />
      <ScheduleLength />
      <ScheduleIntervals />
    </section>
  );
}

function ScheduleTitle() {
  return <h2>Me Schedule Title!</h2>;
}

function ScheduleLength() {
  return <h3>Me Schedule Length!</h3>;
}

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

function AddIntervalButton() {
  return <button>Me Add Interval Button!</button>;
}

function Interval() {
  return (
    <li>
      Me Sample Interval!
      <input type="number"></input>
    </li>
  );
}

function Preview() {
  return (
    <section id="preview">
      <h1>Me Print Preview!</h1>
      <PreviewRender />
      <PrintPreviewButton />
    </section>
  );
}

function PreviewRender() {
  return <div>I HAVE NO CLUE - FRAMES OR SOMETHING I GUESS</div>;
}

function PrintPreviewButton() {
  return <button>Me Print Preview Button!</button>;
}
