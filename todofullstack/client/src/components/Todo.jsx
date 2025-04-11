import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus, FaSave } from "react-icons/fa";

const Todo = () => {
  const [todolist, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoTitle, setEditTodoTitle] = useState("");

  
  useEffect(() => {
    const getTodo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8989/api/v1/users/todo/get",
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        setTodoList(response.data.allTodo);
      } catch (error) {
        console.log("Error fetching tasks:", error);
      }
    };
    getTodo();
  }, []);

  
  const addTodo = async () => {
   
    try {
      const response = await axios.post(
        "http://localhost:8989/api/v1/users/todo/add",
        { title: newTodo },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      setTodoList([...todolist, response.data.newTodo]);
      setNewTodo("");
    } catch (error) {
      console.log("Error adding task:", error);
    }
  };

  
  const DeleteTodo = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8989/api/v1/users/todo/delete/${id}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      setTodoList(todolist.filter((todo) => todo._id !== id));
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };

  
  const handleEditTodo = (id, title) => {
    setEditTodoId(id);
    setEditTodoTitle(title);
  };

  
  const updateTodo = async () => {
   
    try {
      const response = await axios.put(
        `http://localhost:8989/api/v1/users/todo/update/${editTodoId}`,
        { title: editTodoTitle },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      setTodoList(
        todolist.map((todo) =>
          todo._id === editTodoId
            ? { ...todo, title: response.data.updatedTodo.title }
            : todo
        )
      );
      setEditTodoId(null);
      setEditTodoTitle("");
    } catch (error) {
      console.log("Error updating task:", error);
    }
  };

  return (
    <div className="min-h-[80vh] text-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl backdrop-blur-sm bg-black/20 p-8 rounded-xl shadow-purple-500/40 shadow-md">
        <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Taskflow Todo App
        </h2>
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="w-full px-4 py-2 rounded bg-transparent border border-purple-500/40 focus:outline-none text-white"
          />
          <button
            onClick={addTodo}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded text-white font-medium transition flex items-center space-x-2"
          >
            <FaPlus /> <span>Add</span>
          </button>
        </div>
        <ul className="space-y-4">
          {todolist.map((todo) => (
            <li
              key={todo._id}
              className="flex items-center justify-between bg-zinc-800 px-4 py-2 rounded"
            >
              {editTodoId === todo._id ? (
                <div className="flex items-center space-x-4 w-full">
                  <input
                    type="text"
                    value={editTodoTitle}
                    onChange={(e) => setEditTodoTitle(e.target.value)}
                    className="w-full px-4 py-2 rounded bg-transparent border border-purple-500/40 focus:outline-none text-white"
                  />
                  <button
                    onClick={updateTodo}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded text-white font-medium transition flex items-center space-x-2"
                  >
                    <FaSave /> <span>Save</span>
                  </button>
                </div>
              ) : (
                <>
                  <span>{todo.title}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEditTodo(todo._id, todo.title)}
                      className="text-blue-500 hover:text-blue-400 transition flex items-center space-x-2"
                    >
                      <FaEdit className="w-9 h-5" /> 
                    </button>
                    <button
                      onClick={() => DeleteTodo(todo._id)}
                      className="text-red-500 hover:text-red-400 transition flex items-center space-x-2"
                    >
                      <FaTrash className="w-9 h-5"/>
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
