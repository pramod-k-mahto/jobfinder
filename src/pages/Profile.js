import './Profile.css'
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
// import '..../Backend/uploads'
function Profile() {
    
    const [userData, setUserData] = useState();

  const naviagate=useNavigate();
    async function getProfileInfo() {
        const res = await fetch("http://localhost:9000/profile", {
            method: "get",
            headers: {

                'content-type': "application/json"
            },
            credentials: 'include'


        })
        const data = await res.json();

        console.log("--------->Profile",data)
        // console.log(data.status);
        if(data.status===400){
            alert("You are not Login Plz login to vist this page.")
            
            naviagate('/Login');


        }else{
            setUserData([data]);


        }



    }

    useEffect(() => {
        getProfileInfo();

    }, [])
    return (
        <> {
            // console.log("from p",userData)
                

            userData && userData.length >= 0 ? (
                // {console.log(userData)}


                userData.map((item ,i)=>{
                    return (  
                    <div className='profile' key={i}>
                    <div className="profile-img">
                        <img className="image" src={"/uploads/"+item.image} alt=""/>
                    </div>
                    <div className='profile-content'>
                        <p>Name:{item.name}</p>
                        <p>Address:{item.address}</p>
                        <p>Email:{item.email}</p>
                        <p>Phone Number:{item.phoneNumber}</p>
                    </div>
                </div>)

                })

              


            ) : <h1>
                    {/* {
                        // console.log(userData);
                        userData.map((i)=>{
                            console.log(i.name)
                        })
                    } */}
                    Loading...
                </h1>


        } </>
    )
}

export default Profile;
