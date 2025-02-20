class Heroi {

    nome: string;
    poder: string;
    velocidade: number;
    forca: number;
    resistencia: number;

    constructor(nome: string, poder: string, velocidade: number, forca: number, resistencia: number) {
        this.nome = nome;
        this.poder = poder;
        this.velocidade = velocidade;
        this.forca = forca;
        this.resistencia = resistencia;
    }

}

const ironMan = new Heroi("Homem de Ferro", "Tecnologia avançada", 7, 6, 5);
const captainAmerica = new Heroi("Capitão América", "Super soldado", 6, 7, 6);
const thor = new Heroi("Thor", "Deus do Trovão", 8, 9, 8);
const hulk = new Heroi("Hulk", "Força sobre-humana", 5, 10, 9);
const blackWidow = new Heroi("Viúva Negra", "Espionagem", 7, 5, 4);
const hawkeye = new Heroi("Gavião Arqueiro", "Mestre arqueiro", 7, 5, 4);

const vingadores: Heroi[] = [ironMan, captainAmerica, thor, hulk, blackWidow, hawkeye];
const heroisComparados: { maisForte: any, heroi: any }[] = [];
const heroiMaisForte = vingadores.reduce((maisForte, heroi) => {
    const mediaMaisForte = (maisForte.velocidade + maisForte.forca + maisForte.resistencia) / 3;
    const mediaHeroi = (heroi.velocidade + heroi.forca + heroi.resistencia) / 3;

    heroisComparados.push({ maisForte, heroi });
    return mediaHeroi > mediaMaisForte ? heroi : maisForte;
});

console.log(`O herói mais forte é ${heroiMaisForte.nome} com uma média de ${(heroiMaisForte.velocidade + heroiMaisForte.forca + heroiMaisForte.resistencia) / 3}`);
heroisComparados.forEach(par => {
    console.log(`Comparando: ${JSON.stringify(par.maisForte)} com ${JSON.stringify(par.heroi)}`);
});