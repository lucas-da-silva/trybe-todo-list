# Bem vindo ao projeto Color Guess

## Comentários
Projeto bem interessante, onde foi utilizado bastante JavaScript para movimentar, adicionar e remover tarefas criadas pelo usuário, e essas tarefas ficam salvas no navegador, para quando a página carregar novamente, elas aparecerem.

---

## Instalação do projeto localmente:

1. No terminal, em um diretório de sua escolha, clonar o repositório:

```
git clone git@github.com:lucas-da-silva/trybe-todo-list.git
```

2. Dentro do reposítorio, basta abrir o arquivo index.html para visualizar o projeto no navegador. :rocket:

--- 

## Requisitos

## 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag `<header>`

<strong>Adicione uma tag <code>header</code> com o conteúdo "Minha Lista de Tarefas"</strong>

## 2 - Adicione abaixo do título um parágrafo com o texto "Clique duas vezes em um item para marcá-lo como completo"

<strong>Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"</strong>

</details>

## 3 - Adicione um input onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

<strong>Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista</strong>

## 4 - Adicione uma lista ordenada de tarefas

<strong>Adicione uma lista ordenada de tarefas com o id="lista-tarefas"</strong>

## 5 - Adicione um botão e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

<strong>Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo</strong>

## 6 - Ordene os itens da lista de tarefas por ordem de criação

<strong>Você deve garantir que os itens adicionados à lista não apareçam em uma ordem diferente da que foram criados. Por exemplo, ao adicionar os itens `Fazer exercícios do bloco 4`, `Segunda tarefa` e `Anotar dicas de JS`, eles devem constar na lista exatamente nessa ordem.</strong>

## 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza

<strong>A cor deve ser alterada para para o nome da cor (gray) e não qualquer outro padrão de cores.</strong>

## 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

<strong>Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo</strong>

## 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completado. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

<strong>Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through". Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.</strong>

## 10 - Adicione um botão que quando clicado deve apagar todos os itens da lista

<strong>Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista</strong>

## 11 - Adicione um botão que quando clicado remove **somente** os elementos finalizados da sua lista

<strong>Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista</strong>
---

## Requisitos Bônus

## 12 - Adicione um botão que salva o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

<strong>Adicione um botão com id="salvar-tarefas" que salva o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava</strong>

## 13 - Adicione dois botões, que permitam mover o item selecionado para cima ou para baixo na lista de tarefas

<details><summary><strong>Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas</strong></summary><br />

:warning: Pontos importantes sobre este requisito bônus: :warning:

- Antes de começar a desenvolver essa funcionalidade, pare e pense: </br>

O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? :thinking: </br>

:bulb: Você já possui todas as habilidades necessárias para fazer isso :smiley:.

- Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?

</details>

## 14 - Adicione um botão que, quando clicado, remove o item selecionado

<strong>Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado</strong>
