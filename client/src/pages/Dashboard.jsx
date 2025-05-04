import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div className='min-h-screen bg-green-50 flex flex-col items-center justify-center p-4'>
      <h1 className='text-4xl font-bold text-green-800 mb-8 animate-pulse'>Smart Fan Control</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <motion.div whileHover={{ scale: 1.05 }} className='bg-white rounded-2xl shadow-xl p-6 text-center'>
          <Link to='/about' className='text-2xl text-green-700 font-semibold'>About Smart Fan</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className='bg-white rounded-2xl shadow-xl p-6 text-center'>
          <Link to='/fan-speed' className='text-2xl text-green-700 font-semibold'>Check Fan Speed</Link>
        </motion.div>
      </div>
    </div>
  );
}
