import React from 'react'
import '../App.css';
export default function Footer() {
    return (
        <div>
            <footer class=" text-center text-white footer"  >
                <div class="d-flex justify-content-center align-items-center pb-0" style={{backgroundColor:'#00000033'}}>
                <div class="text-center p-3 blue-grey-text h6 mr-4" >
                    <span style={{color:'black'}}>©</span>  Made with Passion <ion-icon name="trending-up-outline" style={{color:'black'}} ></ion-icon> by <span className=' creditName'>Sahil</span>
                </div>
                    <section >
                        <a
                            class="m-1"
                            href="https://www.facebook.com/sahil.saif.9659283/" target="_blank" rel="noreferrer"
                            role="button"
                        ><ion-icon style={{color:"#3b5998"}} size="large" name="logo-facebook"></ion-icon></a>

                        <a
                            class="m-1"
                            href="https://twitter.com/Sahilsaif2002" target="_blank" rel="noreferrer"
                            role="button"
                        ><ion-icon  style={{color:"#55acee"}} size="large" name="logo-twitter"></ion-icon></a>

                        <a
                            class=" m-1"
                            href="https://github.com/sahilsaif12" target="_blank" rel="noreferrer"
                            role="button"
                            ><ion-icon style={{color:"#333333"}} size="large" name="logo-github"></ion-icon></a>


                        <a
                            class=" m-1"
                            href="https://www.linkedin.com/in/sk-saifuddin-8593411b4/" target="_blank" rel="noreferrer" 
                            role="button"
                        ><ion-icon style={{color:"#0082ca"}} size="large" name="logo-linkedin"></ion-icon></a>
                        <a
                            class=" m-1"
                            href="https://www.instagram.com/me_sahil_saif/" target="_blank" rel="noreferrer"
                            role="button"
                            ><ion-icon style={{color:"#ac2bac"}} size="large" name="logo-instagram"></ion-icon></a>
                    </section>
                
                </div>

            </footer>
        </div>
    )
}
