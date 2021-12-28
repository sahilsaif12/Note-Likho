import React, { useContext, useState } from 'react'
import Description from './Description'
import noteContext from '../context/notes/noteContext'
import '../App.css'

export default function Noteitem(props) {
    const context = useContext(noteContext)
    const { updateNote, setcreateNote, setupdate, render, setexpandNoteBox} = context
    const { title, desc, tag, edited, date, stared, color, id, num, setconfirmAlert } = props
    
    let d = new Date(date)
    let updatingNote = (event) => {
        event.stopPropagation()
        setcreateNote(true)
        setupdate({
            update: true,
            noteIndex: num,
            updateId: id,
        })

    }
    const [star, setstar] = useState(stared) // for fast experience on client side
    const [titleColor, setTitleColor] = useState(color) // for fast experience on client side

    let markedStar = async (event) => {
        event.stopPropagation()
        let s = await star ? false : true
        setstar(s)
        updateNote(id, title, desc, tag, edited, date, s, color)
    }

    let changingColor =  (c) => {
        setTitleColor(c)
        updateNote(id, title, desc, tag, edited, date, star, c)
    }
    return (
        <div className={`card card-cascade wider rounded animated ${render === id ? "slideInLeft" : ""} faster`} style={{ width: '250px', maxHeight: "430px" }} onClick={() => setexpandNoteBox({ expand: true, title: title, desc: desc, tag: tag, edited: edited, date: d })}>

            <div className="view view-cascade gradient-card-header  rounded p-2 text-white" style={titleColor ? { backgroundColor: titleColor } : { backgroundColor: "#345B63" }}>
                <h3 className="card-header-title mb-3 title">{title}</h3>
                <span className="position-absolute" style={{ top: "5px", right: "10px", cursor: "pointer" }} onClick={markedStar} ><i className={`lni ${star ? 'lni-star-filled' : 'lni-star'} `} style={{ color: "white" }}></i></span>
                <p className="mb-0"><ion-icon name="pricetags-outline" ></ion-icon> {tag}</p>
            </div>

            <div className="card-body pb-1  ">
                <p className="card-text description">
                    {desc.split("\n").map(function (item, id) {
                        return <Description content={item} key={id} />
                    })}
                </p>
                <span className="card-text text-left d-flex">
                    <p><i className="fas fa-calendar mr-2"></i>{`${edited ? "Last edited" : "created"} on ${d.toLocaleDateString(undefined, { "month": "short", "day": "numeric", "year": "numeric" })}`}</p>
                </span>
                <li className="list-inline-item d-flex justify-content-center">
                    <span className=" btn-floating btn-fb ml-1 colorIcon" onClick={(event) => event.stopPropagation()}  >
                        <div className="colorContainer" >
                            <div className="row">

                                <div className={`colorBoxes md-col-4 ${titleColor === '#b71c1c' && 'tick'} `} onClick={() => changingColor('#b71c1c')} style={{ backgroundColor: "#b71c1c" }}></div>
                                <div className={`colorBoxes md-col-4 ${titleColor === '#4a148c' && 'tick'} `} onClick={() => changingColor('#4a148c')} style={{ backgroundColor: "#4a148c" }}></div>
                                <div className={`colorBoxes md-col-4 ${titleColor === '#1565c0' && 'tick'} `} onClick={() => changingColor('#1565c0')} style={{ backgroundColor: "#1565c0" }}></div>
                                <div className={`colorBoxes md-col-4 ${titleColor === '#1b5e20' && 'tick'} `} onClick={() => changingColor('#1b5e20')} style={{ backgroundColor: "#1b5e20" }}></div>
                            </div>
                            <div className="row">
                                <div className={`colorBoxes md-col-4 ${titleColor === '#9e9d24' && 'tick'} `} onClick={() => changingColor('#9e9d24')} style={{ backgroundColor: "#9e9d24" }}></div>
                                <div className={`colorBoxes md-col-4 ${titleColor === '#ef6c00' && 'tick'} `} onClick={() => changingColor('#ef6c00')} style={{ backgroundColor: "#ef6c00" }}></div>
                                <div className={`colorBoxes md-col-4 ${titleColor === '#4e342e' && 'tick'} `} onClick={() => changingColor('#4e342e')} style={{ backgroundColor: "#4e342e" }}></div>
                                <div className={`colorBoxes md-col-4 ${titleColor === '#fdd835' && 'tick'} `} onClick={() => changingColor('#fdd835')} style={{ backgroundColor: "#fdd835" }}></div>
                            </div>
                            <div className="row">
                                <div className={`colorBoxes md-col-4 ${titleColor === '#880e4f' && 'tick'} `} onClick={() => changingColor('#880e4f')} style={{ backgroundColor: "#880e4f" }}></div>
                                <div className={`colorBoxes md-col-4 ${titleColor === '#00c853' && 'tick'} `} onClick={() => changingColor('#00c853')} style={{ backgroundColor: "#00c853" }}></div>
                                <div className={`colorBoxes md-col-4 ${titleColor === '#9933CC' && 'tick'} `} onClick={() => changingColor('#9933CC')} style={{ backgroundColor: "#9933CC" }}></div>
                                <div className={`colorBoxes md-col-4 ${titleColor === '#345B63' && 'tick'} `} onClick={() => changingColor('#345B63')} style={{ backgroundColor: "#345B63" }}></div>
                            </div>
                        </div>
                        <ion-icon name="color-palette-outline" style={{ color: "black", cursor: "pointer" }}></ion-icon>
                        {/* <input type="color" style={{ width: "0", height: "0", visibility: "hidden" }} name="" id={`colorPalate_${num}`} /> */}
                    </span>
                    <span className=" btn-floating btn-fb mx-2" onClick={updatingNote}  ><i className="lni lni-pencil" style={{ color: "black", fontSize: "20px", cursor: "pointer" }}></i></span>
                    <span className=" btn-floating btn-fb " onClick={(event) => {
                        setconfirmAlert({ alert: true, id: id })
                        event.stopPropagation()
                    }} ><ion-icon name="trash-outline" style={{ color: "black", cursor: "pointer" }}></ion-icon></span>

                </li>
            </div>
        </div>

    )
}
