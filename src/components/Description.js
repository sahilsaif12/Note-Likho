import React from 'react'

export default function Description(props) {
    const { content } = props
    return (
            <span>
                {content}
                <br/>
            </span>
    )
}
