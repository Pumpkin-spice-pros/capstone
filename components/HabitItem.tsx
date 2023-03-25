import Image from 'next/image';
import habitImage from '../assets/habit.png';

type HabitItemProps = {
    name: string;
    description: string;
}

export default function HabitItem({ name, description}: HabitItemProps) {
  return (
    <div className='flex justify-between h-20 w-9844 '>
        <Image 
            src={habitImage}
            height={250}
            width={250}
            alt='wellness'
        />
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}
