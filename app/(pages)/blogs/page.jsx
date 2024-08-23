import React from "react";
import Card from "./_components/Card";
import prisma from "@/lib/prisma";

const getBlogs = async ()=>{
  const blogs = await prisma.blog.findMany({
    where: {published : true},
  })
  return blogs;
}

async function page() {
  
  const blogs = await getBlogs();
  return (
    <div>
      {blogs.map((blog)=>{
        return(
          <Card key={blog.id} link={`/blogs/${blog.id}`} heading={blog.title} subheading={blog.content} />
        )
      })}
      {/* <Card link={"/blogs/123"} heading={"First Blog Post"} subheading={"This is the starting post for my blogging webpage"} /> */}
    </div>
  );
}

export default page;
