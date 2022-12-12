import { useState } from "react";
import { NavLink } from "react-router-dom";

const Product = () => {

    const [name, setName] = useState('');

    return ( 
        <div>
            <h1>값을 입력받아서 페이지를 이동합니다</h1>
            <br />
            <input type="text" onChange={(e)=>{ setName(e.target.value)}} />
            <p>받은 값: {name}</p>
            <NavLink to={`/product/${name}`}> 페이지이동 </NavLink>
        </div>
    );
}

export default Product;