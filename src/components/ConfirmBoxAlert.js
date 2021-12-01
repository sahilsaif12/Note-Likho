import React, { useContext, useRef, useEffect, useState } from 'react'
import noteContext from '../context/notes/noteContext'

export default function ConfirmBoxAlert(props) {
    const { confirmAlert, setconfirmAlert } = props
    const context = useContext(noteContext)
    const { deleteNote } = context
    const ref = useRef('')
    useEffect(() => {
        ref.current.click()
    }, [])
    let deletingNote=()=>{
        deleteNote(confirmAlert.id)
        setconfirmAlert({alert:false,id:''})
    }
    return (
        <div >
            <button type="button" class="btn btn-primary d-none" ref={ref} data-toggle="modal" data-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div class="modal fade" style={{ overflow: 'hidden' }} id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered " role="document">
                    <div class="modal-content">
                        <div class="modal-header ">
                            <h5 class="modal-titl h5 px-3 text-center " id="staticBackdropLabel">Are you sure to delete this note? </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setconfirmAlert({ alert: false })} style={{outline:'none'}}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-footer p-3 d-flex justify-content-center">
                            <button type="button"   class="btn mdb-color lighten-1 white-text rounded" data-dismiss="modal" onClick={() => setconfirmAlert({ alert: false })}>cancel</button>
                            <button type="button"  class="btn btn-danger rounded" data-dismiss="modal"  onClick={deletingNote} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    //         <div className='  '   >
    //             <button type="button" ref={ref} class="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalCenter">
    //     Launch demo modal
    //   </button>

    //   <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-labelledby="staticBackdropLabel"  aria-hidden="true">
    //     <div class="modal-dialog modal-dialog-centered" role="document">
    //       <div class="modal-content">
    //         <div class="modal-header">
    //           <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
    //           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //           </button>
    //         </div>
    //         <div class="modal-body">
    //           ...
    //         </div>
    //         <div class="modal-footer">
    //           <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={()=>setconfirmAlert({alert:false})}>Close</button>
    //           <button type="button" class="btn btn-primary">Save changes</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //         </div>
    //     )
}
