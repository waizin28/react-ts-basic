import React, { type FC, type PropsWithChildren, type ReactNode } from 'react';

// interface CourseGoalProps {
//   title: string;
//   children?: ReactNode;
// }

// automatically included children
// PropsWithChildren is generic type
// include other props type
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

// If define like const, we can use FC
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>DELETE</button>
//     </article>
//   );
// };

// export default CourseGoal;

export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
}
