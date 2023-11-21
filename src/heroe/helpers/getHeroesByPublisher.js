import { heroes } from '../data/heroes'

export const getHeroesByPulisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    //con este codigo validamos si existe
    if (!validPublishers.includes(publisher)){
        throw new Error(`${ publisher } is not valid publisher, try again`);
    }

    return heroes.filter(heroe => heroe.publisher  === publisher )
}