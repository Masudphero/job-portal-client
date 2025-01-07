import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";


const Google = () => {
    const {signInWithGoogle}= useContext(AuthContext);
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn">Google</button>
        </div>
    );
};

export default Google;