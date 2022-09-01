import React from "react";
import custom from "./custom.module.css";
export default function Contactus() {

    return (
        <div className={`container contact  ${custom.contact}`}>
            <div className="row">
                <div className={`col-md-3 ${custom.col3}`}>
                    <div className={`contact-info ${custom.info}`}>
                        <img src={process.env.PUBLIC_URL + "photo4.jpg"} className={`${custom.img}`} alt="..." />
                        <h2 className={`${custom.contacth2}`}>Contact Us</h2>
                        <h4>We would love to hear from you !</h4>
                    </div>
                </div>
                <div className={`col-md-9 ${custom.col9}`}>
                    <div className={`contact-form ${custom.lable}`}>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className={`btn btn-default ${custom.button}`} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}