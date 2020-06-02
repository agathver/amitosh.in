import React from 'react'

export default function Footer() {
  return (
    <footer>
      <p className="copyright">
        &copy;{' '}
        <time dateTime={new Date().toISOString()}>
          {new Date().getFullYear()}
        </time>{' '}
        Amitosh Swain Mahapatra. Content available under{' '}
        <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
      </p>
      <p className="imprint">
        Powered by Gatsby. <a href="{{ site.repository_url }}">Source</a>
      </p>
    </footer>
  )
}
