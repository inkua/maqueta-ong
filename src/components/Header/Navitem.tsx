import React from 'react';
import Link from 'next/link';
import PropTypes from "prop-types"

const Navitem = ({ href, text, active }) => {
  return (
    <Link href = { href } legacyBehavior>
        <a className = { `nav__link ${active ? "active" : ""}` }>
            { text }
        </a>
    </Link>
  )
}
Navitem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}
export default Navitem;
