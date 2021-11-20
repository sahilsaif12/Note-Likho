import React from 'react'

export default function Noteitem(props) {
    const { title, desc, tag, date, num } = props
    let d = new Date(date)
    return (

        <div class="card card-cascade wider rounded" style={{ width: '250px' }}>
            <div class="view view-cascade gradient-card-header  rounded p-2 text-white" style={{ backgroundColor: "#345B63" }}>
                <h3 class="card-header-title mb-3">{title}</h3>
                <p class="mb-0"><ion-icon name="pricetags-outline" ></ion-icon> {tag}</p>
            </div>

            <div class="card-body  ">
                <p class="card-text text-center">{desc}</p>
                <a href="#!" class="card-text text-left d-flex">
                    <p class="text-left "><i class="fas fa-calendar mr-2"></i>{`created on ${d.toLocaleDateString(undefined, { "month": "short", "day": "numeric", "year": "numeric" })}`}</p>
                </a>
                <li class="list-inline-item">
                    <a class=" btn-floating btn-fb mx-1" onClick={() => document.querySelector(`#colorPalate_${num}`).click()}>
                        <ion-icon name="color-palette-outline" color="black"></ion-icon>
                        <input type="color" style={{ width: "0", height: "0", visibility: "hidden" }} name="" id={`colorPalate_${num}`} />
                    </a>
                    <a href="#"><i class="lni lni-pencil" style={{color:"black",fontSize:"20px"}}></i></a>
                </li>
            </div>

        </div>

    )
}
