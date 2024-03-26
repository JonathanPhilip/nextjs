import TestCard from "./_components/TestCard";
import Link from "next/link";

const testDetails = [{
  topic: "Javascript Beginners",
  duration: 1.5,
  numberOfQuestions: 10,
  totalScore: 100,
}, {
  topic: "Java Development",
  duration: 1.5,
  numberOfQuestions: 10,
  totalScore: 100,
}, {
  topic: "HTML & CSS",
  duration: 1.5,
  numberOfQuestions: 10,
  totalScore: 100,
}, {
  topic: "ReactJS",
  duration: 1.5,
  numberOfQuestions: 10,
  totalScore: 100,
},
 {
  topic: "NodeJS",
  duration: 1.5,
  numberOfQuestions: 10,
  totalScore: 100,
}]

export default function Home() {
  return (
    <div className="container pt-3 bg-gray-100 h-screen">
      <div className="grid grid-cols-2">
        <div className="px-4 py-2 text-lg font-sans font-bold text-white"></div>
        <div className="flex justify-end pr-4">
          <Link href="./create">
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Create a new Test</button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-3">
        <div className="grid grid-cols-4">
          {
            testDetails.map((test, index) =>
              <TestCard key={index} testDetails={test}></TestCard>
            )
          }
        </div>
      </div>
    </div>
  );
}

