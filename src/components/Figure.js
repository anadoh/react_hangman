import React from 'react'

const Figure = () => {
    return (
        <svg height="250" width="200" class="figure-container">
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="60" />
            <line x1="60" y1="20" x2="60" y2="220" />
            <line x1="20" y1="220" x2="100" y2="220" />
            <circle class="figure-part" cx="140" cy="80" r="20" />
            <line class="figure-part" x1="140" y1="100" x2="140" y2="150" />
            <line class="figure-part" x1="140" y1="100" x2="120" y2="130" />
            <line class="figure-part" x1="140" y1="100" x2="160" y2="130" />
            <line class="figure-part" x1="140" y1="150" x2="130" y2="190" />
            <line class="figure-part" x1="140" y1="150" x2="150" y2="190" />
        </svg>
    )
}

export default Figure
