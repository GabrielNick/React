const Profile = ({ name, image, online }) => {
    return (
        <div className="profile">
            <img src={image} alt={name} className="avatar" />
            <p>{name}</p>
            {online ? (
                <p style={{ color: 'green' }}>Online</p>
            ) : (
                <p style={{ color: 'gray' }}>Offline</p>
            )}
        </div>
    );
};

export default Profile;
