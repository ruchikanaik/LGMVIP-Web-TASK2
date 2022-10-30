import React from "react";

function Card(props) {
    return (
        <div>
            <div className="card area1" >
                <div className="row">
                    <div className="col-lg-12">
                        <p className="label"><b>NAME</b></p>
                        <p>{props.fName} {props.lName}</p>
                        <p className="label"><b>EMAIL</b></p>
                        <p>{props.email}</p>
                    </div>
                    <div className="col-lg-3">
                        <img src={props.avatar} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card