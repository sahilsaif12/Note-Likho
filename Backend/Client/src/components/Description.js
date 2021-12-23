import React from 'react'

export default function Description(props) {
    const { content } = props
    let checkLink=(word)=>{
        if (word.startsWith("http")) {
            return 	<a className="teal-text" target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }} href={word}>&nbsp;{word}&nbsp;</a>
        }
        return word + " "
    
    }
// let link=content.slice(indexOf("http"))
    return (
            <span>
                {content.split(" ").map((word)=> checkLink(word))} 
                
                <br/>
            </span>
    )
}
