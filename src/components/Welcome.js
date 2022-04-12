import { Route } from "react-router-dom";

const welcome = () => {
  return (
    <section>
      
      <h2>Welcome</h2>
      <Route path='/welcome/new-user'>
        <p>Hello new user!</p>
      </Route>
    </section>
  );
};

export default welcome;
