import Avatar from "./Avatar";

const Profile = ({ person }) => {
    return (
        <div className="profile">
            <Avatar person={person} size={100} />
            <p>{person.name}</p>
        </div>
    );
};

export default Profile;
