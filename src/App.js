import "./App.css";
import Card from "./Card";
import Navbar from "./Navbar";
import { useState } from "react";
import Spinner from "./Spinner";

function App() {
    let [userData, setUserData] = useState([]);
    let [showLoader, setShowLoader] = useState(false);
    const getdata = () => {
        setShowLoader(true);

        setTimeout(() => {
            fetch("https://reqres.in/api/users?page=1")
                .then((response) => response.json())
                .then((user) => {
                    console.log(user.data);
                    setUserData(user.data);
                    setShowLoader(false);
                });
        }, 500);
    };

    return (
        <div className="App">
            <Navbar getdata={getdata} />
            {showLoader ? (
                <Spinner />
            ) : (
                <div className="Box">
                    {userData.map((ele, index) => {
                        return <Card ele={ele} key={index} />;
                    })}
                </div>
            )}
        </div>
    );
}

export default App;
