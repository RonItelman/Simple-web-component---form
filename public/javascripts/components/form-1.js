customElements.define('form-1', class extends HTMLElement {
  constructor() {
    // Always call parent constructor first
    super();

    let elem = document.createElement('div');
    elem.setAttribute('id', 'wrapper')

    // Create new Shadow Root
    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(elem);
  }
  // Called when the element is first connected to the DOM
  connectedCallback() {
    // `this` will always reference the custom element instance (which extends from HTMLElement, in this case)
    // First, get timer span reference
    const wrapper = this.shadowRoot.getElementById("wrapper");
    initWrapper(wrapper);
  }

  // Called when custom element is removed
  disconnectedCallback() {
    console.log('elem removed');
  }
});

let initWrapper = (wrapper) => {
  wrapper.innerHTML = 'test';
};
