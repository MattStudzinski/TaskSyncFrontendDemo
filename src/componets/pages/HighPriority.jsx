import React from 'react';
import { useIssuesContext } from '../../hooks/useIssuesContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useEffect, useState, useContext } from 'react';
import fetchIssues from '../../fetch/fetchIssues';

const HighPriority = () => {

    const { issues, dispatch} = useIssuesContext()
    const { user } = useAuthContext()
    console.log(issues)
    useEffect(() => {
        if (user){
            fetchIssues(dispatch, user.token)
        }
    }, [dispatch, user])
    return (
        <div>
            High Priority
        </div>
    );
};

export default HighPriority;