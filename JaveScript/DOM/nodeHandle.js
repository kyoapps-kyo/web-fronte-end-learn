//又是有为了兼容性，需要自己手动编写古老浏览器可以兼容的节点获取方法，这里封装了替代children,previousElementChild,nextElementChild三个节点的方法
"use strict";

window.onload = function () {
  const box = document.getElementById("box");

  const para = document.getElementById("para");
  const fpara = document.getElementById("fpara");

  console.log(getChildren(box));

  console.log(getElementPrevSibling(para));
  console.log(getElementPrevSibling(fpara));
  console.log(getAllElementSibling(para));
};

// 封装一个函数，这个函数可以返回元素的所有子元素节点（兼容到IE6），类似children的功能
function getChildren(node) {
  const children = [];
  for (let i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes[i].nodeType == 1) {
      children.push(node.childNodes[i]);
    }
  }
  return children;
}

// 封装一个函数，这个函数可以返回元素的前一个元素节点，类似于previousElementSibling
function getElementPrevSibling(node) {
  let o = node;
  while (o.previousSibling != null) {
    if (o.previousSibling.nodeType == 1) {
      return o.previousSibling;
    }

    // 让o成为它的前一个节点
    o = o.previousSibling;
  }
  return null;
}

// 封装第三个函数，这个函数可以返回元素的所有兄弟节点

function getAllElementSibling(node) {
  const result = [];
  let o = node;
  while (o.previousSibling != null) {
    if (o.previousSibling.nodeType == 1) {
      result.unshift(o.previousSibling);
    }
    o = o.previousSibling;
  }
  o = node;
  while (o.nextSibling != null) {
    if (o.nextSibling.nodeType == 1) {
      result.push(o.nextSibling);
    }
    o = o.nextSibling;
  }
  return result;
}
