import "./App.css";
import ListItem from "./components/ListItem/ListItem.tsx";
function App() {
    const testItem = {
        name: "Rozen Maiden",
        status: "aired",
        description: `Traumatized by school, Jun Sakurada spends his days at home as a shut-in, purchasing things online, only to send them back before the free trial period ends. So when a note appears on his desk, asking whether or not he would wind something, he assumes it was something he ordered and carelessly circles "yes," changing his life forever.

        A box arrives with a wind up doll inside, but this is no ordinary toy: after Jun winds her up, she begins walking and talking as if a normal person. With a haughty attitude, she introduces herself as Shinku, the fifth doll in the Rozen Maiden collection, a group of special dolls made by the legendary dollmaker Rozen. These sisters must battle each other in a competition called the Alice Game with the help of a human to ensure victory. The winner becomes Alice, a real girl who is worthy of meeting their creator.
        
        As more sentient dolls end up taking residence in Jun's house, and a foe from Shinku's past makes her appearance, Jun's life becomes far more complicated than he ever thought possible.
        `,
        src: "https://cdn.myanimelist.net/images/anime/1424/108431l.jpg",
        genres: ["action", "comedy", "drama"],
        index: 0,
    };

    return (
        <div>
            <p>Robert</p>
            <ListItem details={testItem} />
        </div>
    );
}

export default App;
