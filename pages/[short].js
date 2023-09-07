import React from "react";

function Short() {
  return <div></div>;
}

export default Short;

export async function getServerSideProps(context) {
  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_KEY = process.env.GRAPHQL_KEY;

  const options = {
    method: "POST",
    headers: {
      "x-api-key": GRAPHQL_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };
  
  const res = await fetch(GRAPHQL_ENDPOINT, options);
  const data = await res.json();
  const url = data.data.listURLS.items[0];
  console.log(url.long);
  return {
    redirect: {
      destination: url.long,
    },
  };
}
