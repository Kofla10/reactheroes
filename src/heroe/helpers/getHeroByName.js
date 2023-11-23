import { heroes } from "../data/heroes";


export const getHeroByName = (name = '') => {
    //we validate that the name is not empty and doesn't have spaces
    name = name.toLocaleLowerCase().trim();

    if(name.length === 0) return;

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    )

}
