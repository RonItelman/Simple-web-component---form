
wc.util.appendText = (elem=null, text=null) => {
  if (elem && text) {
    elem.appendChild(document.createTextNode(text));
  }
};

wc.util.appendChildren = (elem=null, children=null) => {
  if (elem && children) {
    for (child in children) {
      elem.appendChild(children[child]);
    }
  }
};

wc.util.setAttributes = (elem=null, attrs=null) => {
  if (elem && attrs) {
    for (prop in attrs) {
      elem.setAttribute(prop, attrs[prop]);
    }
  }
};

wc.util.setStyle = (elem=null, style=null) => {
  if (elem && attrs) {
    for (prop in style) {
      elem.style[prop] = style[prop];
    }
  }
};

wc.util.getElem = (tag, style=null, attrs=null, text=null, children=null) => {
  let elem = document.createElement(tag);
  wc.util.setStyle(elem, style);
  wc.util.setAttributes(elem, attrs);
  wc.util.appendText(elem, text);
  wc.util.appendChildren(elem, children);
  return elem;
};
