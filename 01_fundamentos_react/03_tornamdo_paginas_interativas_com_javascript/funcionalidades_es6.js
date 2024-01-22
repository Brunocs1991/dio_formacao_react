const alunos = [
    {
        nome: 'Pablo',
        idade: 25
    },
    {
        nome: 'José',
        idade: 19
    }, {
        nome: 'Roberto',
        idade: 20
    }
]


const alunosFiltrados = alunos.filter(aluno => aluno.idade >= 18)
console.table(alunosFiltrados)

const alunoRoberto = alunos.find(aluno => aluno.nome === 'Roberto')
console.log(alunoRoberto)

const alunoRobertoIndex = alunos.findIndex(aluno => aluno.nome === 'Roberto')
console.log(alunoRobertoIndex)


const idades = alunos.reduce((acc, aluno) => {
    return acc + aluno.idade
}, 0)
console.table(idades)

const acimaDeNome = alunos.some(alunos => alunos.idade < 10);
console.log(acimaDeNome)
const menorQueNove = alunos.every(alunos => alunos.idade < 90);
console.log(menorQueNove)
