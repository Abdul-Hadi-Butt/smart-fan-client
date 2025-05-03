import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='min-h-screen bg-green-100 flex flex-col items-center justify-center p-8'>
      <h2 className='text-3xl font-bold text-green-900 mb-4'>About Smart Fan</h2>
      <p className='text-lg text-green-800 max-w-xl text-center'>
        A Smart Fan automatically adjusts its speed based on the surrounding temperature.
        When the temperature rises, the fan increases its speed to cool the room faster.
        As the temperature drops, the fan speed decreases to save energy.
      </p>
      <Link to='/' className='mt-6 text-green-700 underline'>Back to Dashboard</Link>
    </div>
  );
}
