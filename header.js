"use strict";
/*
============================================
 Title:  header.js
 Author: Jeremy Lates
 Original Author: Professor Richard Krasso
 Date:   11/23/2023
 Description:  

    1. Code adapted from https://github.com/buwebdev/web-330/blob/master/portfolio/header.js



===========================================
*/
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div id="header">
            <div id="banner">
                <h1>Jeremy Lates Portfolio</h1>
            </div>

            <div id="nav-container">
                <ul id="nav-list">
                    <li>
                        <a id="home" href="index.html">Home</a>
                    </li>
                    <li>
                        <a id="about" href="about.html">About</a>
                    </li>
                    <li>
                        <a id="resume" href="resume.html">Resume</a>
                    </li>
                    <li>
                        <a  id="projects" href="projects.html">Projects</a>
                    </li>
                    <li>
                        <a  id="database" href="database.html">Database Diagrams</a>
                    </li>
                    <li>
                        <a id="apitests" href="apitests.html">API Unit Tests</a>
                    </li>
                    <li>
                    <a  id="bucketlist" href="bucketlist.html">Bucket List</a>
                </li>
                </ul>
            </div>
            </div>
        `;
  }
}

customElements.define("header-component", Header);
