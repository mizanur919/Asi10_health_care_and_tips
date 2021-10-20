import React from 'react';
import './Subscription.css'

const Subscription = () => {
    return (
        <div className="subscription-section">
            <div className="row d-flex justify-content-center align-items-center rows">
                <div className="col-md-6">
                    <div className="card my-card">
                        <div className="text-center"> <img src="https://i.imgur.com/Dh7U4bp.png" width="200" />
                            <h5 className="mt-3 px-4">Subscribe to our newsletter in order not to miss new health tips</h5>
                            <div className="mx-5">
                                <div className="input-group mb-3 mt-4">
                                    <input type="text" className="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-primary border-rad" type="button" id="button-addon2">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;