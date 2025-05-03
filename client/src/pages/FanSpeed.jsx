import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FanSpeed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/fan-data')
      .then(res => res.json())
      .then(setData);
  }, []);

  const latest = data[data.length - 1] || { Temperature: 0, Fan_Speed: 0 };

  return (
    <div className='min-h-screen bg-green-50 flex flex-col items-center justify-center p-6'>
      <h2 className='text-3xl font-bold text-green-800 mb-6'>Fan Speed Monitor</h2>
      <div className='space-y-6 w-full max-w-md'>
        <motion.div initial={{ width: 0 }} animate={{ width: `${latest.Temperature * 3}%` }} className='bg-green-300 text-white py-2 px-4 rounded-lg'>
          Temperature: {latest.Temperature}°C
        </motion.div>
        <motion.div initial={{ width: 0 }} animate={{ width: `${latest.Fan_Speed * 20}%` }} className='bg-green-500 text-white py-2 px-4 rounded-lg'>
          Fan Speed: {latest.Fan_Speed}
        </motion.div>
      </div>
      <Link to='/' className='mt-8 text-green-600 underline'>Back to Dashboard</Link>
    </div>
  );
}
