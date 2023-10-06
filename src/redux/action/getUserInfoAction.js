import {GETNAME,GETEMAIL}from './actionTypes'

export const getName=(name)=>{
    return{
        type:GETNAME,
        payload:name
    }
}
export const getEmail=(email)=>{
    return{
        type:GETEMAIL,
        payload:email
    }
}
