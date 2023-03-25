import { useState } from 'react';

interface AddHabitButtonProps {
  onClick: () => void;
}

export default function AddHabitButton({ onClick }: AddHabitButtonProps) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      Add Habit
    </button>
  );
}
