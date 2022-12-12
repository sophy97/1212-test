import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return ( 
        <div>
            <br />
            <h3>아래 버튼을 누르면 Home으로 돌아갑니다</h3>
            <button onClick={()=>{navigate('/')}}>Home으로 이동</button>
        </div>
    );
}

export default About;