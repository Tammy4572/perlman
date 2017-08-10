import React, { Component } from 'react';

export default class Contact extends Component{
     render() {
          return (
               <section id="contact">
                    <div className="section-content">
                         <h1 className="section-header">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
                         <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                    </div>
                    <div className="contact-section">
                         <div className="container">
                              <form >
                                   <div className="form-group row">
                                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                             <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                                        </div>
                                   </div>
                                   <div className="form-group row">
                                        <label for="inputPassword3" className="col-sm-2 col-form-label">Message</label>
                                        <div className="col-sm-10">
                                             <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                                        </div>
                                   </div>
                                   <button type="submit" className="form-submit btn btn-primary">Submit Message</button>
                              </form>
                         </div>
                    </div>
               </section>
          )
     }
}
