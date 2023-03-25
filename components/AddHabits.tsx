import { useState, FormEvent } from 'react';

interface AddHabitFormProps {
  onSubmit: (formData: { name: string; description: string; frequency: string }) => void;
}

export default function AddHabitForm({ onSubmit }: AddHabitFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name, description, frequency });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="frequency">Frequency:</label>
        <select
          id="frequency"
          className="form-control"
          value={frequency}
          onChange={(event) => setFrequency(event.target.value)}
        >
          <option value="">Select Frequency</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Habit
      </button>
    </form>
  );
}
