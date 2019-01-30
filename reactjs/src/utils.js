import React from 'react';

export default function fix_new_lines(text) {
    return text.split('\n').map((paragraph, i) => (
        <p key={i}>{paragraph}&nbsp;</p>
    ))
}