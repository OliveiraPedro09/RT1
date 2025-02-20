var Heroi = /** @class */ (function () {
    function Heroi(nome, poder, velocidade, forca, resistencia) {
        this.nome = nome;
        this.poder = poder;
        this.velocidade = velocidade;
        this.forca = forca;
        this.resistencia = resistencia;
    }
    return Heroi;
}());
var ironMan = new Heroi("Homem de Ferro", "Tecnologia avançada", 7, 6, 5);
var captainAmerica = new Heroi("Capitão América", "Super soldado", 6, 7, 6);
var thor = new Heroi("Thor", "Deus do Trovão", 8, 9, 8);
var hulk = new Heroi("Hulk", "Força sobre-humana", 5, 10, 9);
var blackWidow = new Heroi("Viúva Negra", "Espionagem", 7, 5, 4);
var hawkeye = new Heroi("Gavião Arqueiro", "Mestre arqueiro", 7, 5, 4);
var vingadores = [ironMan, captainAmerica, thor, hulk, blackWidow, hawkeye];
var heroisComparados = [];
var heroiMaisForte = vingadores.reduce(function (maisForte, heroi) {
    var mediaMaisForte = (maisForte.velocidade + maisForte.forca + maisForte.resistencia) / 3;
    var mediaHeroi = (heroi.velocidade + heroi.forca + heroi.resistencia) / 3;
    heroisComparados.push({ maisForte: maisForte, heroi: heroi });
    return mediaHeroi > mediaMaisForte ? heroi : maisForte;
});
console.log("O her\u00F3i mais forte \u00E9 ".concat(heroiMaisForte.nome, " com uma m\u00E9dia de ").concat((heroiMaisForte.velocidade + heroiMaisForte.forca + heroiMaisForte.resistencia) / 3));
heroisComparados.forEach(function (par) {
    console.log("Comparando: ".concat(JSON.stringify(par.maisForte), " com ").concat(JSON.stringify(par.heroi)));
});
