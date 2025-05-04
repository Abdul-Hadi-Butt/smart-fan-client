import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export default function FanSpeed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setData(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const latest = data[data.length - 1] || { Temperature: 0, Fan_Speed: 0 };

  return (
    <div className='min-h-screen bg-green-50 flex flex-col items-center justify-center p-6'>
      <h2 className='text-3xl font-bold text-green-800 mb-6'>Fan Speed Monitor</h2>

      <div className='space-y-6 w-full max-w-md mb-8'>
        <motion.div initial={{ width: 0 }} animate={{ width: `${latest.Temperature * 3}%` }} className='bg-green-300 text-white py-2 px-4 rounded-lg'>
          Temperature: {latest.Temperature}°C
        </motion.div>
        <motion.div initial={{ width: 0 }} animate={{ width: `${latest.Fan_Speed * 20}%` }} className='bg-green-500 text-white py-2 px-4 rounded-lg'>
          Fan Speed: {latest.Fan_Speed}
        </motion.div>
      </div>

      <div className='w-full max-w-4xl h-96 bg-white shadow-lg rounded-lg p-4'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Temperature" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Fan_Speed" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <Link to='/' className='mt-8 text-green-600 underline'>Back to Dashboard</Link>
    </div>
  );
}
