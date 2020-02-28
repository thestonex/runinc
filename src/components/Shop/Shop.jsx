import React from 'react'
import Shoe1 from '../../gfx/img/shoe_01.jpg'
import Shoe2 from '../../gfx/img/shoe_02.jpg'
import Shoe3 from '../../gfx/img/shoe_03.jpg'
import Shoe4 from '../../gfx/img/shoe_04.jpg'

import './shop.scss'

const Shop = () => {
    return (
        <div className="shopcontainergrid">
            <div className="shopyellow">
                <h1>SHOP</h1>
                <h2>RUNNIC SHOP</h2>
                <p>gratis fragt ved køb over kr 500,-</p>
                <p>Nike</p>
                <p>Adidas</p>
                <p>Puma</p>
                <p>Asics</p>
                <p>Hummel</p>
            </div>
            <div className="shopwhite">
                <div className="topshop"> 
                <div className="topshoptekst">
                    <h1>Shop</h1> 
                </div>    
                </div>

                <div className="bottomshop">
                    <img src={Shoe1} alt="puma highland 3000 - brown"  title="puma highland 3000 - brown" />
                    <img src={Shoe2} alt="asics free street" title="asics free street" />
                    <img src={Shoe3} alt="new balance runner bounce"  title="new balance runner bounce" />
                    <img src={Shoe4} alt="new balance new york 2018" title="new balance new york 2018" />
                    <img src={Shoe1} alt="puma highland 3000 - brown"  title="puma highland 3000 - brown" />
                    <img src={Shoe2} alt="asics free street"  title="asics free street" />

                </div>
               
            </div>
        </div>
    )
}

export default Shop
