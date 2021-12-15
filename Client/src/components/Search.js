import React from 'react'

export default function Search() {
    return (
        <div>

            <form className=" form-inline d-flex justify-content-center md-form form-sm  mt-1 py-2">
                <i className="fas fa-search" aria-hidden="true" style={{color:"#46b6c5"}}></i>
                <input className="form-control form-control-sm mr-3 w-50 px-3" type="text" placeholder="Search your notes"
                    aria-label="Search" />
                    
            </form>
        </div>
    )
}
