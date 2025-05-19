const Avatar = ({ person, size }) => {
    return (
        <img
            className="avatar"
            src={person.imageUrl}
            alt={person.name}
            width={size}
            height={size}
        />
    );
};

export default Avatar;
