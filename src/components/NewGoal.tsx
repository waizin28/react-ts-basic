import React, { useRef, type FormEvent } from 'react';

const NewGoal = () => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // extractin balue of form data
    // we can extract input data using this
    // new FormData(event.currentTarget)

    // to express never be null with !
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input id='goal' type='text' ref={goal} />
      </p>

      <p>
        <label htmlFor='summary'>Short summary</label>
        <input id='summary' type='text' ref={summary} />
      </p>

      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
