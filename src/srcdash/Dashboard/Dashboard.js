import React, { useState } from 'react';
import './Dashboard.css';
import logo from "../logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../sidebardash/sidebardash';
import Modal from '../Modal/Modal';
import Insights from '../Insights/Insights';
import Charts from '../charts/charts'
import Table from '../Table/Table';
import Profile from '../Profile/Profile';

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", email: "", phone: "", age: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const addStudent = () => {
    if (!newStudent.name || !newStudent.email || !newStudent.phone || !newStudent.age) {
      toast.error("Please fill all fields");
      return;
    }
    setStudents([...students, newStudent]);
    setNewStudent({ name: "", email: "", phone: "", age: "" });
    toggleModal();
    toast.success("Student added successfully!");
  };

  const [isSideMenuVisible, setSideMenuVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSideMenu = () => setSideMenuVisible(!isSideMenuVisible);
  const toggleTheme = () => setDarkMode(!isDarkMode);

  return (
    <div className={`container ${isDarkMode ? 'dark-theme-variables' : ''}`}>
      <Sidebar isSideMenuVisible={isSideMenuVisible} toggleSideMenu={toggleSideMenu} />
      <Sidebar onAddStudentClick={() => setIsModalOpen(true)} />
      <main>
        <h1>School Management</h1>
        <Insights />
        <Charts />
        <Table students={students} />
        <ToastContainer />
      </main>
      <Profile toggleTheme={toggleTheme} isDarkMode={isDarkMode} toggleSideMenu={toggleSideMenu} />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} onAddStudent={addStudent} />}
    </div>
  );
}

export default Dashboard;
