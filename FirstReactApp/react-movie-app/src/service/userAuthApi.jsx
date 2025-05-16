import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const url = "http://localhost:5000/"

// localhost:8080 is the url for the backend, and it is the url that is used to make the requests to the backend
// the port has to correspond to the one in the backend
export const userAuthApiSlice = createApi({
    reducerPath: "userAuth",
    //the reducerPath is the path for the reducer, and it is the path that is used to make the requests to the backend
    //it is also known as the slice name
    baseQuery: fetchBaseQuery({baseUrl:`${url}`}), //this is the base url for the backend
//the port has to correspond to the one in the backend
//the fetchBaseQuery is a function that takes in an object with the base url and the headers
//the base url is the url for the backend, and it is the url that is used to make the requests to the backend
    endpoints: (builder)=>({
        signUP: builder.mutation({
            //query is a function takes in the data that is passed to the function and returns an object with the method and the body of the request
            //mutation is an inbuilt function that is used to make a post request to the backend
            //the query takes an object, and the first thing is the url, 
            //the method refers to the http method type e.g. post, get, put, delete
            //the body is the data that is passed to the backend, and it is the data that is passed to the function
            //if not mutation, it will be a query, and the query is used to make a get request to the backend
            //if not mutation and query, it will be a subscription, and the subscription is used to make a request to the backend that is not a get or post request


            query: (data) => ({
                url: "/register_patient",
                method: "POST",
                headers: {"Content-Type": "application/json"},
                //the header is the header for the request, and it is the header that is used to make the requests to the backend
                body: JSON.stringify(data)

            })
            
        })
    })

})
export const {useSignUPMutation} = userAuthApiSlice;
//the useSignUPMutation is a hook that is used to make the request to the backend, and it is the hook that is used to make the request to the backend