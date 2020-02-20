
import React from 'react';
export default function Photo(props) {
    console.log("Profile props: ", props)
    return (
        <div>
            <img src={props.details.photo} alt="" />
            <h1>{props.details.name.firstName} {props.details.name.lastName} </h1>
            <a href={props.details.profileLink} target="_blank">my profile </a>

        </div>
    );
}