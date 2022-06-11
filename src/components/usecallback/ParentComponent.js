import React, { useState, useCallback } from 'react';
import Count from './components/Count';
import Button from './components/Button';
import Title from './components/Title';

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(10000);

  // const incrementAge = () => {
  //   setAge(age + 1);
  // };

  // const incrementSalary = () => {
  //   setSalary(salary + 1000);
  // };

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
