import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import UpdateForm from '../components/UpdateForm';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const updateWorkoutData = async (updatedData) => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    
    const json = await response.json();
    
    if (response.ok) {
      dispatch({ type: "UPDATE_WORKOUT", payload: json });
    } else {
      console.log("Error updating workout: ", json.error);
    }
  };

  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    } else {
      console.log("Error deleting workout: ", json.error);
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleDelete}>Delete</span>
      <UpdateForm onUpdate={updateWorkoutData} />
    </div>
  );
};

export default WorkoutDetails;
