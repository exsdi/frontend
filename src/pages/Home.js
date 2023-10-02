import { useEffect } from'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
// after creating hooks we no longer need useState

import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {

    // we create a state to update the local state
//using setWorkouts and the value of it is the array of data
//json from fetchWorkouts.
// const [workouts, setWorkouts] = useState(null);
const { workouts, dispatch } = useWorkoutsContext();

useEffect (() => {
    const fetchWorkouts = async () => {
        // will fetch the workouts from the backend API and store them in response
        //you don't have to explicitly pass local host 4000 because it is
        // being passed in the package.json file as proxy.
        const response = await fetch('/api/workouts');
        const json = await response.json();

        // the ok property is used to check if the response is ok or not
        if (response.ok) {
            //the reason its an array is because in the backend API
            //workoutController.js we store them in workouts.
            // and res.json(workouts), workouts is an array of objects
            // setWorkouts(json);
            dispatch({type: 'SET_WORKOUTS', payload: json});
        }
    }

    fetchWorkouts();
}, []);
// empty array will make it so it only runs once when the 
// component is loaded. it does not fetch every time the 
// component is loaded.

    return (
        //only if workouts has a value will it start to map
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home;