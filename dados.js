let dados = [
    {
        titulo: "Banco de Dados",
        descricao: "Um banco de dados é uma coleção organizada de dados, estruturada para facilitar o armazenamento, gerenciamento e recuperação de informações.",
        link: "https://pt.wikipedia.org/wiki/Banco_de_dados",
        imagem: "bd.png"// Substitua por um link para a sua imagem de um Diagrama Entidade-Relacionamento
    },
    
    {
        titulo: "Dados",
        descricao: "Dados são os valores individuais que ocupam os atributos de uma entidade. Por exemplo, 'João' é um dado do atributo 'nome' da entidade 'Pessoa'.",
        link : "https://www.bosontreinamentos.com.br/modelagem-de-dados/conceitos-de-dados-informacoes-e-bancos-de-dados/#:~:text=Dados%3A%20S%C3%A3o%20fatos%20em%20uma,ser%20armazenados%20em%20algum%20meio.&text=Informa%C3%A7%C3%A3o%3A%20S%C3%A3o%20os%20fatos%20organizados,seus%20n%C3%BAmeros%20de%20CPF%2C%20ordenados.",
        imagem: "dado.png"
        // Não é possível adicionar uma imagem para dados, pois são valores específicos
    },
    {
        titulo: "Informações",
        descricao: "A informação é o resultado da interpretação dos dados, conferindo-lhes significado dentro de um contexto. Por exemplo, saber que 'João' tem 30 anos e é cliente da empresa X é uma informação relevante para a empresa.",
        imagem: "informacao.png",
        link : "https://www.bosontreinamentos.com.br/modelagem-de-dados/conceitos-de-dados-informacoes-e-bancos-de-dados/#:~:text=Dados%3A%20S%C3%A3o%20fatos%20em%20uma,ser%20armazenados%20em%20algum%20meio.&text=Informa%C3%A7%C3%A3o%3A%20S%C3%A3o%20os%20fatos%20organizados,seus%20n%C3%BAmeros%20de%20CPF%2C%20ordenados.",
        // Não é possível adicionar uma imagem para informações, pois é um conceito abstrato
    },
    {
        titulo: "Modelo Conceitual",
        descricao: "O modelo conceitual representa uma visão abstrata do banco de dados, mostrando as entidades, atributos e relacionamentos entre elas. É utilizado para entender o domínio do problema e como os dados serão organizados.",
        link: "https://www.estrategiaconcursos.com.br/blog/modelo-conceitual-logico-sefaz-sp/",
        imagem: "https://leonardofonseca.com.br/wp-content/uploads/2021/04/image.png"// Substitua por um link para a sua imagem de um Diagrama Entidade-Relacionamento
    },
    {
        titulo: "Entidade",
        descricao: "Uma entidade representa um objeto do mundo real sobre o qual queremos armazenar informações, como um cliente, um produto ou um pedido.",
        link : "https://www.devmedia.com.br/modelagem-de-dados-1-entidades/4140",
        imagem: "entidade.png" // Substitua por uma imagem de uma entidade em um diagrama ER
    },
    {
        titulo: "Atributos",
        descricao: "Atributos são as características que descrevem uma entidade, como o nome de um cliente, o preço de um produto ou a data de um pedido.",
        link : "https://platzi.com.br/aulas/1588-bancos-dados/20757-conceito-e-tipos-de-atribut-2/#:~:text=Atributo%20%C3%A9%20uma%20caracter%C3%ADstica%20que,formados%20de%20um%20s%C3%B3%20valor.",
        imagem: "simples.png" // Substitua por uma imagem de um atributo dentro de uma entidade
    },
    {
        titulo: "Atributos Multivalorados",
        descricao: "Atributos multivalorados são aqueles que podem assumir múltiplos valores para uma única instância de uma entidade. Por exemplo, um cliente pode ter mais de um número de telefone.",
        link : "https://materialpublic.imd.ufrn.br/curso/disciplina/3/73/2/5",
        imagem: "multivalorado.png" // Substitua por uma imagem de um atributo com chaves {} indicando valores múltiplos
    },
    {
        titulo: "Atributos Compostos",
        descricao: "Atributos compostos são aqueles que podem ser divididos em partes menores, como um endereço que pode ser dividido em rua, número, bairro, cidade e estado.",
        link : "https://materialpublic.imd.ufrn.br/curso/disciplina/3/73/2/5",
        imagem: "composto.png" // Substitua por uma imagem de um atributo composto representado como um retângulo com sub-atributos
    },
    {
        titulo: "Atributos Derivados",
        descricao: "Atributos derivados são aqueles cujo valor é calculado a partir de outros atributos, não sendo armazenados diretamente no banco de dados. Por exemplo, a idade de uma pessoa é calculada a partir da data de nascimento.",
        link : "https://materialpublic.imd.ufrn.br/curso/disciplina/3/73/2/5",
        imagem: "derivado.png" // Substitua por uma imagem de um atributo derivado (linha pontilhada)
    },
    {
        titulo: "Chave Primária",
        descricao: "A chave primária é um atributo ou conjunto de atributos que identifica de forma única cada tupla (linha) em uma tabela. Ela garante a integridade dos dados e evita a duplicação de registros.",
        link :"https://pt.wikipedia.org/wiki/Chave_prim%C3%A1ria",
        imagem: "primaria.png" // Substitua por uma imagem de um atributo sublinhado dentro de uma entidade
    },
    {
        titulo: "Chave Estrangeira",
        descricao: "A chave estrangeira é um atributo em uma tabela que referencia a chave primária de outra tabela. Ela estabelece o relacionamento entre as tabelas e garante a integridade referencial.",
        link : "https://pt.wikipedia.org/wiki/Chave_estrangeira",
        imagem: "estrangeira.png" // Substitua por uma imagem de uma linha conectando duas entidades, com a chave estrangeira destacada
    },
    {
        titulo: "Relacionamento",
        descricao: "Um relacionamento estabelece a conexão entre duas ou mais entidades. É representado por uma linha que conecta os retângulos das entidades.",
        link : "https://www.devmedia.com.br/modelagem-de-dados-2-os-relacionamentos/4142",
        imagem: "relacionamento.png" // Substitua por uma imagem de uma linha conectando duas entidades
    },
    {
        titulo: "Cardinalidade",
        descricao: "A cardinalidade define a quantidade de ocorrências de uma entidade que podem estar relacionadas a outra entidade. É representada por números ou símbolos nas extremidades das linhas de relacionamento (1:1, 1:N, N:M).",
        link : "https://pt.wikipedia.org/wiki/Cardinalidade_(modelagem_de_dados)",
        imagem: "cardinalidade.png" // Substitua por uma imagem mostrando os diferentes tipos de cardinalidade
    }


];
