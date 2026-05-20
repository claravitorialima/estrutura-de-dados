const alunos = [
    {nome: "Luiza", idade: 16, disciplinaPreferida: "Geografia"},
    {nome: "Bruno", idade: 16, disciplinaPreferida: "História"},
    {nome: "João", idade: 17, disciplinaPreferida: "Educação Física"},
    {nome: "Livia", idade: 16, disciplinaPreferida: "Matemática"},
    {nome: "Pedro", idade: 17, disciplinaPreferida: "Português"},
];

const primeiroAlunoNome = alunos[0].nome;
alert("Nome do primeiro aluno: " + primeiroAlunoNome);

//alunos [4] pois começa a contar do 0, então o último aluno é o 4. Se fosse o 5, daria erro pois não existe.
const ultimaDisciplina = alunos[4].disciplinaPreferida;
alert("Disciplina preferida do último aluno: " + ultimaDisciplina);