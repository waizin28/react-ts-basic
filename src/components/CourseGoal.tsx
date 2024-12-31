import React, { type FC, type PropsWithChildren, type ReactNode } from 'react';

// interface CourseGoalProps {
//   title: string;
//   children?: ReactNode;
// }

// automatically included children
// PropsWithChildren is generic type
// include other props type
type CourseGoalProps = PropsWithChildren<{ title: string }>;

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

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>DELETE</button>
    </article>
  );
}
