import { useState } from "react";

const UpdateForm = ({ onUpdate }) => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedWorkout = { title, load, reps };



    if (title) updatedWorkout.title = title;
    if (load) updatedWorkout.load = load;
    if (reps) updatedWorkout.reps = reps;

        onUpdate(updatedWorkout); // Call the passed function with the updated data


        setTitle('');
        setLoad('');
        setReps('');
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Update Workout</h3>

            <label>Exercise Title</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Load (in kg): </label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Reps: </label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            
            <button>Update</button>
        </form>
    );
}

export default UpdateForm;
