import "./Activity.css";
const Activity = ({ activity }) => {

    return (
        <li className="activity">
            <h3 className="activity__label">{activity.label || "----"}</h3>
            <p className="activity__description">{activity.description || "Placeholder Description"}</p>
        </li>)
}

export default Activity;
