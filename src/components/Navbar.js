import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <navbar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/examples">Examples</Link>
        </li>
      </ul>
    </navbar>
  )
}

export default Navbar
