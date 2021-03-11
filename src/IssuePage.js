import React from 'react'
import './App.css';
function IssuePage({data}) {
    return (
        <div className="issue-details">
            <img src={data.user.avatar_url} alt="git_img" />
            <h5>User Name : {data.user.login}</h5>
            <h5>User Id : {data.user.id}</h5>
               <p>{data.body}</p>
            <h5>Comments : {data.comments}</h5>
        </div>
    )
}

export default IssuePage;