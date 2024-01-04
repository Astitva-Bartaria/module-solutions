import React from "react";

// component for home-cover
export default function Homecover() {

    return (
        <>
            <section className="homesection1">
                <div className="homediv1 text-center">
                    <div className="row container-fluid">
                        <div className="col">
                            <img src="https://i.imgur.com/uYow5ly.png" alt="logo" className="homelogo" />
                        </div>
                    </div>
                    <div className="row container-fluid">
                        <p id="homebrandname">Vallée De Lyon</p>
                    </div>
                    <div className="row container-fluid">
                        <p id="brandslogan">Fashion as unique as you are.</p>
                    </div>
                </div>
            </section>
        </>
    )
}