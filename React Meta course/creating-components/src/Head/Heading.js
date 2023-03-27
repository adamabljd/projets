import Card from "./Card";
import { useState } from "react";

function Heading(props){
    const [image, setImage] = useState(props.logo);

    function changeImage(){
        if(image === props.logo){
            setImage(props.image2);
        }else{
            setImage(props.logo);
        }
    }
    return (
        <div>
            <h1>Hello, {props.firstName}</h1>
            <Card h2="First card's h2" h3="First card's h3"/>
            <Card h2="Second card's h2" h3="Second card's h3"/>
            <Card h2="Third card's h2" h3="Third card's h3"/>
            <button onClick={changeImage}>Change image</button>
            <br/>
            <img src={image} alt="Logo"></img>
        </div>
    )
  }

export default Heading;
