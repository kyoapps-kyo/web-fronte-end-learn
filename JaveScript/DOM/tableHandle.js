"use strict";

window.onload = function () {
  const cols = 9,
    rows = 9;
  const oTable = document.getElementById("oTable");
  for (let i = 0; i < rows; i++) {
    const oTr = document.createElement("tr");
    oTable.appendChild(oTr);
    for (let j = 0; j < cols; j++) {
      const oTd = document.createElement("td");
      oTd.innerText = i + 1;
      oTd.innerText *= j + 1;
      oTr.appendChild(oTd);
    }
  }
};
