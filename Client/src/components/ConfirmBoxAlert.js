import React, { useContext, useRef, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

export default function ConfirmBoxAlert(props) {
    const { confirmAlert, setconfirmAlert } = props
    const context = useContext(noteContext)
    const { deleteNote } = context
    const ref = useRef('')
    useEffect(() => {
        ref.current.click()
        // eslint-disable-next-line
    }, [])
    let deletingNote=()=>{
        deleteNote(confirmAlert.id)
        setconfirmAlert({alert:false,id:''})
    }
    return (
        <div >
            <button type="button" className="btn btn-primary d-none" ref={ref} data-toggle="modal" data-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" style={{ overflow: 'hidden' }} id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered " role="document">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h5 className="modal-titl h5 px-3 text-center " id="staticBackdropLabel">Are you sure to delete this note? </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setconfirmAlert({ alert: false })} style={{outline:'none'}}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-footer p-3 d-flex justify-content-center">
                            <button type="button"   className="btn mdb-color lighten-1 white-text rounded" data-dismiss="modal" onClick={() => setconfirmAlert({ alert: false })}>cancel</button>
                            <button type="button"  className="btn btn-danger rounded" data-dismiss="modal"  onClick={deletingNote} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
