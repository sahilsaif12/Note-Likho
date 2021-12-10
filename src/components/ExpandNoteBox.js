// import React,{useRef,useState} from 'react'

// export default function ExpandNoteBox(props) {
//     const [ setexpand,expand]=props
//     const ref = useRef('')
//     const [show, setShow] = useState(false);
//     useEffect(() => {
//         ref.current.click()
//     }, [])
//     return (
//         <>
//             <Button ref={ref} variant="primary" className="d-none" onClick={() => setShow(true)}>
//                 Custom Width Modal
//             </Button>

//             <Modal
//                 show={show}
//                 onHide={() => setShow(false)}
//                 dialogClassName="modal-90w"
//                 aria-labelledby="example-custom-modal-styling-title"
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="example-custom-modal-styling-title">
//                         Custom Modal Styling
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <a className="position-absolute " style={{ top: "5px", right: "15px" }} onClick={handleAnimation} href={null} ><ion-icon name="close-outline" size="large" ></ion-icon></a>

//                     <MDBInput className="text-white" label="Note Title" name="title" labelClass="text-white-50 " valueDefault={update.update ? notes[update.noteIndex].title : ''} onChange={handleOnChange} />

//                     <MDBInput className="my-2 text-white note-desc" valueDefault={update.update ? notes[update.noteIndex].description : ''} onChange={handleOnChange} type="textarea" label="Take a note" labelClass=" text-white-50" name="description" rows="5" />

//                     <MDBInput className="text-white" label="Tags" icon="tags" labelClass="text-white-50 " name="tag" valueDefault={update.update ? notes[update.noteIndex].tag : ''} onChange={handleOnChange} />

//                     <button disabled={note.title === "" && note.description === "" && note.tag === ""} className="btn  align-middle rounded z-depth-3 align-self-center text-white note-save-btn" onClick={() => {
//                 noteSavedOrCancel("Saved ✔")
//             }}>{saveBtn}</button>

//                 </Modal.Body>
//             </Modal>
//         </>

//     )
// }
 