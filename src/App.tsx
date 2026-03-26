import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* ... other content ... */}
      {/* English Project Entry */}
      <div>
        <h2>Project Name</h2>
        <a href="https://institution-office-task-reminder.github.io">Project Link</a>
      </div>
      {/* Bengali Project Entry */}
      <div>
        <h2>প্রকল্পের নাম</h2>
        <a href="https://institution-office-task-reminder.github.io">প্রকল্প লিংক</a>
      </div>
      {/* ... other content ... */}
    </div>
  );
};

export default App;