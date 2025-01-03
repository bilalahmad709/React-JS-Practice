import React from "react";

function Main(props){
    return(
        <>
            <h5>
                This is main section. {props.name} will write his code here in {props.language}. His age is {props.age}
            </h5>
        </>
    );
}
export default Main;