import { useNavigate } from 'react-router-dom';
import axios from "axios";

const useLogout = () => {
    const navigate = useNavigate(); // Hook must be called inside the custom hook

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:5000/api/v1/logout");
            localStorage.removeItem('authToken');
            navigate("/login");
        } catch (error) {
            console.log("Error in logging out:", error);
        }
    };

    return handleLogout;
};

export default useLogout;
