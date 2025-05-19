import Profile from "./Profile";

const Gallery = () => {
    return (
        <section>
            <h2>Galeria de Perfis</h2>
            <Profile 
                name="Katsuko Saruhashi" 
                image="https://i.imgur.com/MK3eW3Am.jpg" 
                online={true}
            />
            <Profile 
                name="Marie Curie" 
                image="https://i.imgur.com/s1wX4bC.jpg" 
                online={false}
            />
            <Profile 
                name="Ada Lovelace" 
                image="https://i.imgur.com/yXOvdOSs.jpg" 
                online={true}
            />
        </section>
    );
};

export default Gallery;
