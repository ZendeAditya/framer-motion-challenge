"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
interface TODO {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  taskStatus: "Pending" | "In Progress" | "Completed";
}

const TODOS: TODO[] = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, Bread, Eggs, Butter",
    dueDate: "2024-07-25",
    taskStatus: "Pending",
  },
  {
    id: 2,
    title: "Workout",
    description: "30-minute run and strength training",
    dueDate: "2024-07-23",
    taskStatus: "Completed",
  },
  {
    id: 3,
    title: "Call mom",
    description: "Catch up and discuss weekend plans",
    dueDate: "2024-07-24",
    taskStatus: "Pending",
  },
  {
    id: 4,
    title: "Read a book",
    description: "Finish reading 'Atomic Habits'",
    dueDate: "2024-07-29",
    taskStatus: "Pending",
  },
];

type Props = {
  title: string;
  description: string;
  dueDate: string;
  taskStatus: "Pending" | "In Progress" | "Completed";
};

const TaskCard = (props: Props) => {
  return (
    <div className="w-52 h-52 rounded-lg  bg-blue-400 text-white  shadow-lg shadow-gray-300 m-2">
      <div className="px-2 py-1">
        <h3 className="text-lg text-center py-2 px-2">{props.title}</h3>
        <p className="py-2">{props.description}</p>
        <p className="py-2">{props.dueDate}</p>
        <p className="py-2">{props.taskStatus}</p>
      </div>
    </div>
  );
};
const Day8DrapAndDrop = () => {
  const divref = useRef(null);
  return (
    <div ref={divref}>
      <div className="flex items-center justify-center min-h-screen relative bg-gray-400 overflow-hidden">
        <h2 className=" absolute text-8xl text-gray-700 select-none z-[2] text-center">
          Drag & Drop
        </h2>
        <motion.div className="z-[3] flex gap-2 flex-wrap">
          {TODOS.map((todo, idx) => (
            <motion.div
              whileTap={{ scale: 0.95 }}
              initial={{ x: 100, y: 0, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 0.5 * idx,
                ease: "easeInOut",
                delay: 0.5 * idx,
                type: "spring",
                stiffness: 150,
                damping: 20,
                mass: 1.5,
                precision: 0.01,
                velocityStiffness: 1000,
              }}
              drag
              dragConstraints={divref}
              dragElastic={0.2}
              className=""
              key={todo.id}
            >
              <TaskCard
                title={todo.title}
                description={todo.description}
                dueDate={todo.dueDate}
                taskStatus={todo.taskStatus}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Day8DrapAndDrop;
