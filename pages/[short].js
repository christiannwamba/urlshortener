import React from "react";

function Short() {
  return <div></div>;
}

export default Short;

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/',
    },
  };
}
