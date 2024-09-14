import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Issue } from "../components/Issue";
import { baseURL } from '../App';

export function ListIssues() {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${baseURL}/issues`);
            const data = await res.json();
            setIssues(data);
        })();
    }, []);

    return (
        <div className='issue-container'>
            {issues.map(issue => (
                <Link key={issue.id} to={`/issues/${issue.id}`}>
                    <Issue key={issue.id} issue={issue} />
                </Link>
            ))} 
        </div>
    );
}