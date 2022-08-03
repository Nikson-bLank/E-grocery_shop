import React from 'react'

const Navbar = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="header__logo">
                    <a href="#" className="logo">V-Shop</a>
                </div>
            </div>
            <div className="col-lg-6">
                <nav className="header__menu">
                    <ul>
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Pages</a>
                            <ul className="header__menu__dropdown">
                                <li><a href="#">Shop Details</a></li>
                                <li><a href="#">Shoping Cart</a></li>
                                <li><a href="#">Check Out</a></li>
                                <li><a href="#">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="col-lg-3">
                <div className="header__cart">
                    <ul>
                        <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                        <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                    </ul>
                    <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
            </div>
        </div>
        <div className="humberger__open">
            <i className="fa fa-bars"></i>
        </div>
    </div>
  )
}

export default Navbar