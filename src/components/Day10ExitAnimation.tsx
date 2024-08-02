"use client";
import React, { FormEvent, useState } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { TODOS } from "../../utils/todo";
interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}
const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    x: -100, // Moves the item 100 pixels to the left
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Day10ExitAnimation = () => {
  const [toggleInput, setToggleInput] = useState<boolean>(false);
  const [addTodo, setAddTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([...TODOS]);
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: todos.length + 1,
      name: addTodo,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setToggleInput(false);
    setAddTodo("");
  };
  const handleCheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <section>
      {/* Render todos */}
      <div className="text-white">
        <motion.ul initial="hidden" animate="visible" variants={listVariants}>
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.li
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                key={todo.id}
                className={`flex items-center justify-between gap-4 border-2 py-2 m-2 rounded-lg px-3 bg-black/60 border-gray-500 ${
                  todo.isCompleted ? "bg-green-500" : "bg-black/60"
                }`}
              >
                <div>
                  <input
                    type="checkbox"
                    name="checkBoxName"
                    id="CheckBoxId"
                    checked={todo.isCompleted}
                    onChange={() => handleCheck(todo.id)}
                  />
                </div>
                <div>
                  <p>{todo.name}</p>
                </div>
                <div>
                  <Button onClick={() => handleDelete(todo.id)}>
                    <BiTrash size={24} />
                  </Button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
      {/* Add todos */}
      <div className="absolute bottom-10">
        <div>
          {toggleInput && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className=""
            >
              <form onSubmit={handleSubmit} className="">
                <textarea
                  name="textareaName"
                  id="textareaId"
                  className="w-80 h-40 rounded-lg text-white bg-black outline-none px-2 py-3 resize-none"
                  placeholder="Add a new Todo..."
                  required
                  value={addTodo}
                  onChange={(e) => setAddTodo(e.target.value)}
                ></textarea>
                <div className="absolute bottom-3 px-2">
                  <Button type="submit" className="w-52 text-white">
                    Add Todo
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
        <div className="bottom-0 fixed py-2">
          <Button className="w-60" onClick={() => setToggleInput(!toggleInput)}>
            <BiPlus size={28} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Day10ExitAnimation;
