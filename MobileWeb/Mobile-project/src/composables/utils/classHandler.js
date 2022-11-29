import { HTML_ELEMENT_TYPE } from "./config";

const removeActive = (el, className) => {
  if (!isHTMLCollection(el)) throw new Error("el is not a HTMLCollection");

  if (el.length > 1)
    for (const item of el) {
      item.classList.remove(className);
    }
  else {
    el.classList.remove(className);
  }
};

const addActive = (el, className) => {
  if (!isHTMLElement(el)) throw new Error("el is not a HTMLElement");
  el.classList.add(className);
};

const setActiveItem = (index, els, className) => {
  removeActive(els, className);
  addActive(els[index], className);
};

const isTargetElement = (target, className) => {
  if (!isHTMLElement(target)) throw new Error("el is not a HTMLElement");
  return target.classList.contains(className);
};

function isHTMLElement(el) {
  return el.nodeType === HTML_ELEMENT_TYPE ? true : false;
}

function isHTMLCollection(el) {
  return el instanceof HTMLCollection;
}

function isNodeList(el) {
  return el instanceof NodeList;
}

export { setActiveItem, isTargetElement };
