import React, { useState } from 'react';

import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal';
import './App.css';

// Functional Component

const App = () => {
	const [courseGoals, setCourseGoals] = useState([
		{ id: 'cg1', text: 'Finish the course' },
		{ id: 'cg2', text: 'Learn all about the course material' },
		{ id: 'cg3', text: 'Help other students in the course Q&A' }
	]);

	const addNewGoalHandler = newGoal => {

    // Will work fine in this app =>

    // setCourseGoals(courseGoals.concat(newGoal));
    
    // Best way to ensure desired outcome =>

		setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
	};

	return (
		<div>
			<h2 className='course-goals'>Course Goals</h2>
			<NewGoal onAddGoal={addNewGoalHandler} />
			<GoalList goals={courseGoals} />
		</div>
	);
};

// Class Component Example

// class App extends React.Component {
//   render() {
//     return <h1 title="This works!">A React App!</h1>;
// Translates to =>
// React.createElement('h1', {title: 'This works'}, 'A React App!')
//   }
// }

export default App;
