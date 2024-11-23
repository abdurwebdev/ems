import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [employee, setEmployee] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [userData, setUserData] = useContext(AuthContext); 

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskDesign: category,
      taskTitle: title,
      taskDescription: description,
      taskDate: date,
      category: category,
    };


    const updatedUserData = userData.map((emp) => {
      if (emp.firstName === employee) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask], // Add the new task to tasks array
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1, // Update new task count
          },
        };
      }
      return emp;
    });

    // Update userData with new task and updated taskCounts
    setUserData(updatedUserData);

    // Clear form fields after submission
    setCategory('');
    setDate('');
    setDescription('');
    setEmployee('');
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="flex items-start mt-10 gap-10 justify-between">
        <div className="w-[50%]">
          <h3>Task Title</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent rounded-lg border border-white px-4 py-2 mt-[9px] placeholder:text-white"
            type="text"
            placeholder="Make a UI design"
          />
          <h3>Date</h3>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent rounded-lg border border-white px-4 py-2 mt-[9px] placeholder:text-white"
            type="date"
          />
          <h3>Assign To</h3>
          <input
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            className="w-full bg-transparent rounded-lg border border-white px-4 py-2 mt-[9px] placeholder:text-white"
            type="text"
            placeholder="Employee Name"
          />
          <h3>Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent rounded-lg border border-white px-4 py-2 mt-[9px] placeholder:text-white"
            type="text"
            placeholder="design, dev etc"
          />
        </div>
        <div className="w-[50%] flex flex-col">
          <h3>Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-transparent px-5 border rounded-xl border-white"
            rows={9}
          ></textarea>
          <button className="bg-green-400 rounded-xl mt-5 px-4 py-2">Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
