import React from "react";
import Card from "./_components/Card";

function page() {
  return (
    <div>
      <Card link={"/blogs/123"} heading={"First Blog Post"} subheading={"This is the starting post for my blogging webpage"} />
    </div>
  );
}

export default page;
