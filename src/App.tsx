import CourseGoal from './components/CourseGoal.tsx';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header.tsx';
import { useState } from 'react';

type CourseGoals = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  function handleAddGoal() {
    const newGoal: CourseGoals = {
      title: 'New Goal',
      description: 'This is a description',
      id: Math.random(),
    };

    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
