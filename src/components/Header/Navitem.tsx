import React from 'react';
import Link from 'next/link';

const Navitem = ({ href, texto, active }) => {
  return (
    <Link href = { href } legacyBehavior>
        <a className = { `nav__link ${active ? "active" : ""}` }>
            { texto }
        </a>
    </Link>
  )
}

export default Navitem