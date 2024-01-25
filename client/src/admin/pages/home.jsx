import PredictionForm from "../components/form";
import '../../admin.css';
import '../../login.css';
import AvailablePredictions from "../components/predictions";

const AdminIndexPage = () => {
  return (
    <div className="page-wrapper">
        <div className="admin-home">
            <PredictionForm />
            <AvailablePredictions />
        </div>
    </div>
  );
}

export default AdminIndexPage;
