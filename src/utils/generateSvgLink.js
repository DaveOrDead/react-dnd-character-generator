import React from 'react';

/**
 * We dump all of the SVG icons directly after the `<body>` element with each
 * SVG icon having a unique identifier, passing this unique identifier into
 * this function will render the SVG icon.
 *
 * @param {string} [path] - The name of the SVG icon.
 * @param {string} classList - Optional class to assign to the `svg` element.
 * @param {object} [attributes] - Object of attributes
 * @return {string} - The SVG icon.
 */
export default function generateSvgLink(path, classList, attributes) {
    return (
        <svg {...attributes} className={classList}>
            <use xlinkHref={'#' + path} />
        </svg>
    );
}
