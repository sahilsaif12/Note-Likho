import React, { useContext, useRef, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import Description from './Description'

export default function ExpandedNoteBox(props) {
    const context = useContext(noteContext)
    const {  setexpandNoteBox,expandNoteBox } = context
    const ref = useRef('')
    useEffect(() => {
        ref.current.click()
        // eslint-disable-next-line
        console.log(expandNoteBox)
    }, [])
    return (
        <div className="">
<button type="button" className="btn btn-primary d-none" ref={ref} data-toggle="modal" data-target="#exampleModal">
                Launch static backdrop modal
            </button>
            <div className="modal fade" style={{ overflow: '' }}  onClick={()=>setexpandNoteBox({expand:false})} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable  " role="document" onClick={(event)=>event.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h5 className="modal-tite h5 px-3 text-center " id="exampleModalLabel">{expandNoteBox.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>setexpandNoteBox({expand:false})} style={{outline:'none'}}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <p className="p-2 h6 brown-text"><ion-icon name="pricetags-outline" ></ion-icon> {expandNoteBox.tag}</p>
                        <div className="h6 px-4 grey-text overflow-auto" >
                            {expandNoteBox.desc.split("\n").map(function (item, id) {
                        return <Description content={item} key={id} />
                    })}
                        </div>
                        <p className="text-muted px-4"><i className="fas fa-calendar mr-2"></i>{`${expandNoteBox.edited ? "Last edited" : "created"} on ${expandNoteBox.date.toLocaleDateString(undefined, { "month": "short", "day": "numeric", "year": "numeric" })}`}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
