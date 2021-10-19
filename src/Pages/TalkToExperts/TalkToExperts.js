import React from 'react';

const TalkToExperts = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h4 className="mb-5">Send Us Your Details, <br /> We Will Contact With You Soon</h4>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Contact Email Address</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Address 2 (Optional)</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TalkToExperts;