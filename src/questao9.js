function resultadoAlunos(alunos) {
  alunos.forEach(aluno => {
    const status = aluno.nota >= 7 ? 'Aprovado' : 'Reprovado';
    console.log(`${aluno.nome}: ${status}`);
  });
}

const alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Carlos', nota: 5 },
  { nome: 'João', nota: 7 }
];

resultadoAlunos(alunos);
