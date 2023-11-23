"use strict";
/*
============================================
 Title:  footer.js
 Author: Jeremy Lates
 Original Author: Professor Richard Krasso
 Date:   11/23/2023
 Description:  

    1. Code adapted from https://github.com/buwebdev/web-330/blob/master/portfolio/footer.js



===========================================
*/
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div id="footer">
                <p>
                    Copyright &copy; 2023 Lates Consulting
                </p>
            </div>
        `;
  }
}

customElements.define("footer-component", Footer);
