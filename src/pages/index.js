import React from 'react';

export const query = graphql`
  query LocationQuery {
    hasura {
      locations {
        id
        name
        description
      }
    }
  }
`

const IndexPage = ({data}) => (
  <div>
    <ul>
    	{data.hasura.locations.map((location) => (
	      <li>{location.name}</li>
    	))}
    </ul>
  </div>
)

export default IndexPage;