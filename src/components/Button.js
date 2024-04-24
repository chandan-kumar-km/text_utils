import React from 'react'

export default function Button(props) {
    return (
        <>
            <button type="button" className="btn btn-primary mx-3" onClick={props.onClick}>{props.buttonName}</button>
        </>
    )
}
