import React from "react";
import Card from "./_components/Card";

function page() {
  return (
    <div>
      <h2 className="text-center mt-4 text-5xl font-bold">Projects</h2>
      <Card
        link={"/projects/shiftSync"}
        heading={"Shift-Sync"}
        subheading={
          "Shift Sync is an intelligent and dynamic employee scheduling solution designed to simplify the complex task of workforce management. By leveraging cutting-edge technologies like Next.js, Firebase, and OR-Tools, Shift Sync automates schedule generation based on employee preferences while allowing managers to make final adjustments with ease. Whether you need to accommodate full-time and part-time staff or prioritize supervisors, Shift Sync has you covered."
        }
        tags={["React", "Nextjs", "Firebase", "Authjs"]}
      />
    </div>
  );
}

export default page;
