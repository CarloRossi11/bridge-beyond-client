import React from "react";


function Loader() {
    const delayer = {
      animationDelay: 2
    }
  return (
    <div className="loaderbod">
      <div class="wavy">
        <span id="one">L</span>
        <span id="two">O</span>
        <span id="three">A</span>
        <span id="four">D</span>
        <span id="five">I</span>
        <span id="six">N</span>
        <span id="seven">G</span>
        <span id="eight">.</span>
        <span id="nine">.</span>
        <span id="ten">.</span>
      </div>
    </div>
  );
}

export default Loader;
