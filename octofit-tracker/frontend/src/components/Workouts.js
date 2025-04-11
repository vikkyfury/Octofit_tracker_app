import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://solid-acorn-pv9qvpwp59635wg-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Workouts</h1>
      <div className="row">
        {workouts.map(workout => (
          <div key={workout._id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title text-primary">{workout.name}</h5>
                <p className="card-text">{workout.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;