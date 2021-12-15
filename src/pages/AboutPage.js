import Card from "../components/shared/Button";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div>
        <h1>About this project</h1>
        <p> This is a React app to leave a feedback on our service</p>
        <p>Version: 1.0.0</p>
        <Link to='/'>Back to home</Link>
      </div>
      ;
    </Card>
  );
}

export default AboutPage;
