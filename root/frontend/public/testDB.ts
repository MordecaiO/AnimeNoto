import { UserDocType } from "../src/vite-env";

export const userDoc:UserDocType = {
    userId: "qwerty",
    createdAt: 10923801231,
    lists: [
        {
            name: "Watched",
            // FIXME:listName: "Watched",
            dft: true,
            listDescription: "Anime I've already watched",
            src: "",
            numberOfItems: 2,
            lastUpdated: 1689789836682,
            listItems: [
                {
                    status: "aired",
                    name: "Rozen Maiden",
                    src: "some string",
                    genres: ["action", "comedy", "romance"],
                    description: `Traumatized by school, Jun Sakurada spends his days at home as a shut-in, purchasing things online, only to send them back before the free trial period ends. So when a note appears on his desk, asking whether or not he would wind something, he assumes it was something he ordered and carelessly circles "yes," changing his life forever.

                    A box arrives with a wind up doll inside, but this is no ordinary toy: after Jun winds her up, she begins walking and talking as if a normal person. With a haughty attitude, she introduces herself as Shinku, the fifth doll in the Rozen Maiden collection, a group of special dolls made by the legendary dollmaker Rozen. These sisters must battle each other in a competition called the Alice Game with the help of a human to ensure victory. The winner becomes Alice, a real girl who is worthy of meeting their creator.
            
                    As more sentient dolls end up taking residence in Jun's house, and a foe from Shinku's past makes her appearance, Jun's life becomes far more complicated than he ever thought possible.`,
                },
                {
                    status: "aired",
                    name: "The Familiar of Zero",
                    src: "string2",
                    genres: [
                        "action",
                        "adventure",
                        "comedy",
                        "fantasy",
                        "romance",
                        "ecchi",
                    ],
                    description: `Louise Françoise Le Blanc de La Vallière is a self-absorbed mage in a world of wands, cloaks, and royalty. Although she studies at Tristain Academy, a prestigious school for magicians, she has a major problem: Louise is unable to cast magic properly, earning her the nickname of "Louise the Zero" from her classmates.

                    When the first year students are required to perform a summoning ritual, Louise's summoning results in a catastrophic explosion! Everyone deems this to be yet another failure, but when the smoke clears, a boy named Saito Hiraga appears. Now Louise's familiar, Saito is treated as a slave, forced to clean her clothes and eat off the ground. But when an unfamiliar brand is found etched on Saito's hand from the summoning ritual, it is believed to be the mark of a powerful familiar named Gandalfr.
                    
                    Wild, adventurous, and explosive, Zero no Tsukaima follows Saito as he comes to terms with his new life and as Louise proves that there is more to her than her nickname suggests.`,
                },
            ],
        },
        {
            name: "A longer list name to test how the List name reacts",
            // FIXME: listName: "A longer list name to test how the List name reacts",
            dft: false,
            lastUpdated: 1902381029311,
            listDescription:
                "List description. This could be a long description, but it could also be short.",
            src: "",
            numberOfItems: 1,
            listItems: [
                {
                    status: "airing",
                    name: "Naruto",
                    src: "string3",
                    genres: ["action", "shounen", "ninja"],
                    description: "The nine-tailed fox",
                },
            ],
        },
    ],
};
