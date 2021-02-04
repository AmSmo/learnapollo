import React from 'react'
import { Query } from "react-apollo"
import gql from 'graphql-tag'

const FETCH_DOGS= gql`
    query FetchDogs {
        dogs {
            _id
            name
        }
    }
`;

const DogIndex = () => (
  <Query<Data, Variables> query={FETCH_DOGS}>
    {({ loading, error, data }) => {
      console.log(data);
      return (
        <div>
          <h1>DogIndex</h1>
        </div>
      );
    }}
  </Query>
);


function First(props: any){
    return(
        <div> 
            I'm a first
            {DogIndex()}
            </div>
    )
}

export default First