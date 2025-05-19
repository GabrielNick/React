import Profile from "./Profile";

const people = [
    {
        id: 1,
        name: "Ada Lovelace",
        imageUrl: "https://i.imgur.com/yXOvdOSs.jpg"
    },
    {
        id: 2,
        name: "Marie Curie",
        imageUrl: "https://i.imgur.com/s1wX4bC.jpg"
    },
    {
        id: 3,
        name: "Katsuko Saruhashi",
        imageUrl: "https://i.imgur.com/MK3eW3Am.jpg"
    }
];

const Gallery = () => {
    return (
        <section>
            <h2>Galeria de Cientistas</h2>
            {people.map(person => (
                <Profile key={person.id} person={person} />
            ))}
        </section>
    );
};

export default Gallery;
