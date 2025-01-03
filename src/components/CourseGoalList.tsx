import { type ReactNode } from 'react';
import { type CourseGoal as CGoal } from '../App';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode='hint'>No goals found. Maybe add one?</InfoBox>;
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning' severity='high'>
        Warning: You have too many goals!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal
                title={goal.title}
                onDelete={onDeleteGoal}
                id={goal.id}
              >
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </>
  );
}
