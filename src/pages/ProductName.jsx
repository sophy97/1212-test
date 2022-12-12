// Product 페이지로부터 params값(상품명)을 받아 그대로 출력하는 페이지

import { useParams } from "react-router-dom";

const ProdcutName = () => {
    const {name} = useParams();
    return ( 
        <div>
            <br />
            <h2>{name}</h2>
            <h4>상품의 이름으로 상품 페이지를 출력하고 있습니다</h4>
        </div>
    );
}

export default ProdcutName;