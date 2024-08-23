import React from "react";

function ShiftSync() {
  return (
    <div>
      <h2 className="text-center mt-4 text-5xl font-bold">Shift Sync</h2>
      <div className="container mx-auto p-4">
        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-lg">
            <strong>Shift Sync</strong> is an intelligent and dynamic employee
            scheduling solution designed to simplify the complex task of
            workforce management. By leveraging cutting-edge technologies like
            Next.js, Firebase, and OR-Tools, Shift Sync automates schedule
            generation based on employee preferences while allowing managers to
            make final adjustments with ease. Whether you need to accommodate
            full-time and part-time staff or prioritize supervisors, Shift Sync
            has you covered.
          </p>
          <a className="mt-3 font-bold text-xl" href="https://github.com/Raiyan03/shift-sync">
            GitHub Link: <span className="font-mono text-base underline">https://github.com/Raiyan03/shift-sync</span>
          </a>
        </section>

        <section id="index" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Index</h2>
          <ul className="list-disc ml-6">
            <li >
              <a href="#video-demo" className="text-gray-500 hover:underline">
                Video Demo
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-500 hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#tech-stack" className="text-gray-500 hover:underline">
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="#system-design"
                className="text-gray-500 hover:underline"
              >
                System Design
              </a>
            </li>
            <li>
              <a href="#installation" className="text-gray-500 hover:underline">
                Installation
              </a>
            </li>
            <li>
              <a href="#usage" className="text-gray-500 hover:underline">
                Usage
              </a>
            </li>
            <li>
              <a
                href="#microservices"
                className="text-gray-500 hover:underline"
              >
                Microservices
              </a>
            </li>
          </ul>
        </section>

        <section id="video-demo" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Video Demo</h2>
          <video controls className="w-3/4">
            <source
              src="https://github.com/user-attachments/assets/e5476976-f99e-4447-b05e-c7018af8a68e"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </section>

        <section id="features" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Employee Portal</strong>: Employees can log in, set their
              working preferences, and view published schedules.
            </li>
            <li>
              <strong>Manager Portal</strong>: Managers can set available
              schedules, generate optimized schedules, make final adjustments,
              and publish the schedule.
            </li>
            <li>
              <strong>Automated Scheduling</strong>: Utilizes OR-Tools in a
              FastAPI microservice to create optimal schedules based on various
              constraints.
            </li>
            <li>
              <strong>Real-Time Updates</strong>: Firebase is used to store and
              update schedules in real-time as they are published.
            </li>
          </ul>
        </section>

        <section id="tech-stack" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <img
            src="https://github.com/user-attachments/assets/47f6fb96-65c4-4a5e-84c7-8c0b9db14adf"
            alt="Tech Stack"
            className="w-full mb-4"
          />
          <ul className="list-disc ml-6">
            <li>
              <strong>Frontend</strong>: Next.js (React)
            </li>
            <li>
              <strong>Backend</strong>: Next.js API Routes
            </li>
            <li>
              <strong>Microservice</strong>: FastAPI (Python) with OR-Tools
            </li>
            <li>
              <strong>Database</strong>: Firebase
            </li>
          </ul>
        </section>

        <section id="system-design" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">System Design</h2>
          <img
            src="https://github.com/user-attachments/assets/851c1e58-3fb8-4f9e-bb59-85e66b5be3fa"
            alt="System Design"
            className="w-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">System Workflow</h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>Employee Portal</strong>: Employees log in and set their
              working preferences.
            </li>
            <li>
              <strong>Manager Portal</strong>: Managers define available
              schedules.
            </li>
            <li>
              <strong>Schedule Generation</strong>: Manager clicks 'Generate,'
              triggering an API call to the Next.js backend.
            </li>
            <li>
              <strong>Data Processing</strong>: Next.js backend sends employee
              data to the FastAPI microservice.
            </li>
            <li>
              <strong>Optimization</strong>: FastAPI microservice generates an
              optimized schedule considering constraints.
            </li>
            <li>
              <strong>Final Adjustments</strong>: The generated schedule is
              returned to the frontend, where managers can make final tweaks.
            </li>
            <li>
              <strong>Publishing</strong>: Once finalized, the schedule is saved
              to Firebase and shared with employees in real-time.
            </li>
          </ul>
        </section>

        <section id="installation" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Installation</h2>
          <ol className="list-decimal ml-6">
            <li>
              Clone the repository:
              <pre className="bg-black p-2 rounded">
                <code>
                  git clone https://github.com/Raiyan03/shift-sync.git
                </code>
              </pre>
            </li>
            <li>
              Install dependencies:
              <pre className="bg-black p-2 rounded">
                <code>npm install</code>
              </pre>
            </li>
            <li>
              Set up environment variables in a <code>.env.local</code> file:
              <pre className="bg-bg-black p-2 rounded">
                <code>{`
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=shift-sync.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=shift-sync
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=shift-sync.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
              `}</code>
              </pre>
            </li>
            <li>
              Start the Next.js development server:
              <pre className="bg-bg-black p-2 rounded">
                <code>npm run dev</code>
              </pre>
            </li>
          </ol>
        </section>

        <section id="usage" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Usage</h2>
          <ol className="list-decimal ml-6">
            <li>
              <strong>Employee Login</strong>: Employees log in and update their
              work preferences.
            </li>
            <li>
              <strong>Manager Setup</strong>: Managers log in to view available
              schedules and click 'Generate' to create a new schedule.
            </li>
            <li>
              <strong>Schedule Adjustment</strong>: Managers can adjust
              individual shifts before publishing.
            </li>
            <li>
              <strong>Publishing</strong>: Finalized schedules are saved and
              shared with employees via Firebase.
            </li>
          </ol>
        </section>

        <section id="microservices" className="mb-24">
          <h2 className="text-2xl font-semibold mb-2">Microservices</h2>
          <p>
            Shift Sync is composed of multiple microservices. Here’s a link to
            the{" "}
            <a 
              href="https://github.com/Raiyan03/OR"
              className="text-gray-500 hover:underline"
            >
              Scheduling Microservice
            </a>
            , which is responsible for generating optimized schedules using
            OR-Tools.
          </p>
        </section>
      </div>
    </div>
  );
}

export default ShiftSync;
