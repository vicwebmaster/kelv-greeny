import React from 'react'
import {Link} from 'react-router-dom'
const WalletBody = () => {
  return (
    <>
     <section className="inner-section wallet-part">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="account-card">
                        <h3 className="account-title">My Wallet</h3>
                        <div className="my-wallet">
                            <p>current balance</p>
                            <h3>$575.00</h3>
                        </div>
                        <div className="wallet-card-group">
                            <div className="wallet-card">
                                <p>total credit</p>
                                <h3>$2347.76</h3>
                            </div>
                            <div className="wallet-card">
                                <p>total debit</p>
                                <h3>$2174.89</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="account-card">
                        <h3 className="account-title">Add Wallet</h3>
                        <form className="wallet-form"><input type="text" placeholder="$00.00"/>
                            <div className="wallet-suggest">
                                <h6>suggested:</h6>
                                <ul>
                                    <li><Link to="/Wallet">$50</Link></li>
                                    <li><Link to="/Wallet">$100</Link></li>
                                    <li><Link to="/Wallet">$300</Link></li>
                                    <li><Link to="/Wallet">$500</Link></li>
                                    <li><Link to="/Wallet">$800</Link></li>
                                    <li><Link to="/Wallet">$1000</Link></li>
                                    <li><Link to="/Wallet">$3000</Link></li>
                                    <li><Link to="/Wallet">$5000</Link></li>
                                </ul>
                            </div><button type="submit">add to wallet</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="account-card">
                        <h3 className="account-title">Wallet Transaction</h3>
                        <div className="top-filter">
                            <div className="filter-show"><label className="filter-label">Show :</label><select
                                    className="form-select filter-select">
                                    <option value="1">12</option>
                                    <option value="2">24</option>
                                    <option value="3">36</option>
                                </select></div>
                            <div className="filter-short"><label className="filter-label">Short by :</label><select
                                    className="form-select filter-select">
                                    <option selected>default</option>
                                    <option value="1">paid</option>
                                    <option value="2">due</option>
                                    <option value="3">cancel</option>
                                    <option value="4">return</option>
                                </select></div>
                        </div>
                        <div className="table-scroll">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">SL.</th>
                                        <th scope="col">transaction date</th>
                                        <th scope="col">payment method</th>
                                        <th scope="col">document type</th>
                                        <th scope="col">recieved amount</th>
                                        <th scope="col">order amount</th>
                                        <th scope="col">status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>02 February 2021</td>
                                        <td>Order Altered</td>
                                        <td>Order <Link to="/Wallet">(26881)</Link></td>
                                        <td>$345.89</td>
                                        <td>$345.89</td>
                                        <td className="fw-bold text-success">paid</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>02 march 2021</td>
                                        <td>Order Altered</td>
                                        <td>Order <Link to="/Wallet">(26881)</Link></td>
                                        <td>$345.89</td>
                                        <td>$345.89</td>
                                        <td className="fw-bold text-warning">due</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>02 april 2021</td>
                                        <td>Order Altered</td>
                                        <td>Order <Link to="/Wallet">(26881)</Link></td>
                                        <td>$345.89</td>
                                        <td>$345.89</td>
                                        <td className="fw-bold text-danger">cancel</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>02 may 2021</td>
                                        <td>Order Altered</td>
                                        <td>Order <Link to="/Wallet">(26881)</Link></td>
                                        <td>$345.89</td>
                                        <td>$345.89</td>
                                        <td className="fw-bold text-dark">return</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>02 june 2021</td>
                                        <td>Order Altered</td>
                                        <td>Order <Link to="/Wallet">(26881)</Link></td>
                                        <td>$345.89</td>
                                        <td>$345.89</td>
                                        <td className="fw-bold text-info">process</td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                        </div>
                        <div className="bottom-paginate">
                            <p className="page-info">Showing 12 of 60 Results</p>
                            <ul className="pagination">
                                <li className="page-item"><Link className="page-link" to="#"><i
                                            className="fas fa-long-arrow-alt-left"></i></Link></li>
                                <li className="page-item"><Link className="page-link active" to="/Wallet">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="/Wallet">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="/Wallet">3</Link></li>
                                <li className="page-item">...</li>
                                <li className="page-item"><Link className="page-link" to="/Wallet">60</Link></li>
                                <li className="page-item"><Link className="page-link" to="/Wallet"><i
                                            className="fas fa-long-arrow-alt-right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WalletBody
