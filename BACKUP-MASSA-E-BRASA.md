# BACKUP --- Projeto Massa & Brasa

**Data do backup:** 02/09/2026\
**Objetivo:** permitir continuar o desenvolvimento em uma nova conversa
sem depender de todo o histórico anterior.

------------------------------------------------------------------------

## 1. Visão geral

Projeto de landing page profissional/comercial para uma pizzaria e
esfiharia chamada **Massa & Brasa**.

Objetivo principal do site: apresentar produtos e gerar pedidos pelo
**WhatsApp**.

O desenvolvimento está sendo feito de forma didática e gradual, usando:

-   HTML
-   CSS
-   JavaScript
-   VS Code
-   Git

A intenção é que o projeto possa servir tanto como portfólio quanto,
após substituir dados fictícios pelos reais, como site comercial.

------------------------------------------------------------------------

## 2. Identidade visual

**Nome:** Massa & Brasa\
**Segmento:** Pizzaria & Esfiharia\
**Estilo:** artesanal, moderno, escuro, elegante e acolhedor.

### Cores principais

-   Fundo principal: `#171311`
-   Fundo secundário: `#211B18`
-   Creme/texto: `#F4E8D5`
-   Laranja/brasa: `#D95F24`
-   Vermelho: `#A62C23`
-   Cinza claro: `#B9B0A8`

### Fontes

Google Fonts:

-   **Cormorant Garamond 700** --- títulos e logo
-   **Inter** --- textos e interface

------------------------------------------------------------------------

## 3. Estrutura do projeto

Estrutura pretendida:

``` text
massa-e-brasa/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── hero-pizza.png.png
    ├── calabresa.png
    ├── pizza-marguerita.png
    ├── esfiha-carne.png
    ├── pizza-frango-catupiry.png
    ├── esfiha-queijo.png
    ├── esfiha-frango-catupiry.png
    ├── pizza-calabresa-tradicional.png
    ├── pizza-bacon.png
    ├── esfiha-cheddar.png
    ├── combo-brasa.png
    └── sobre-massa-brasa.png
```

**Observação:** durante a configuração do JavaScript foi descoberto que
o nome real do arquivo JS estava incorreto. O usuário corrigiu e a
integração passou a funcionar.

O script deve ser carregado no final do `index.html`, imediatamente
antes de `</body>`:

``` html
<script src="js/script.js"></script>

</body>
</html>
```

------------------------------------------------------------------------

## 4. Seções já desenvolvidas

O site possui:

1.  Header
2.  Hero
3.  Favoritos/Cardápio
4.  Combos
5.  Sobre
6.  Contato
7.  Footer

Menu:

-   Início
-   Cardápio
-   Combos
-   Sobre
-   Contato

------------------------------------------------------------------------

## 5. Hero

Texto principal:

> Sabor que começa na massa e termina na brasa.

Subtexto:

> Pizzas e esfihas artesanais preparadas com ingredientes selecionados
> para transformar cada pedido em uma experiência especial.

CTA:

> Pedir pelo WhatsApp

Destaques:

-   🔥 Forno artesanal
-   🧀 Ingredientes selecionados
-   🛵 Entrega rápida

------------------------------------------------------------------------

## 6. Produtos atuais

Há **9 produtos**.

### 1. Pizza Calabresa Especial

Imagem: `assets/calabresa.png`\
Ingredientes: Mussarela, calabresa artesanal, cebola roxa e orégano.\
Preço: **R\$ 49,90**

### 2. Pizza Marguerita da Casa

Imagem: `assets/pizza-marguerita.png`\
Ingredientes: Mussarela, tomate fresco, manjericão e molho artesanal.\
Preço: **R\$ 44,90**

### 3. Esfiha Carne Artesanal

Imagem: `assets/esfiha-carne.png`\
Ingredientes: Carne temperada, tomate, cebola e especiarias da casa.\
Preço: **R\$ 4,90**

### 4. Pizza Frango com Catupiry

Imagem: `assets/pizza-frango-catupiry.png`\
Ingredientes: Frango temperado, mussarela, Catupiry e orégano.\
Preço: **R\$ 52,90**

### 5. Esfiha Queijo Especial

Imagem: `assets/esfiha-queijo.png`\
Ingredientes: Mussarela, queijo cremoso e um toque de orégano.\
Preço: **R\$ 4,90**

### 6. Esfiha Frango com Catupiry

Imagem: `assets/esfiha-frango-catupiry.png`\
Ingredientes: Frango temperado, Catupiry cremoso e especiarias da casa.\
Preço: **R\$ 5,90**

### 7. Pizza Calabresa Tradicional

Imagem: `assets/pizza-calabresa-tradicional.png`\
Ingredientes: Massa artesanal, quantidade reduzida de molho de tomate,
calabresa, cebola e orégano. **Sem mussarela.**\
Preço: **R\$ 47,90**

### 8. Pizza Bacon Especial

Imagem: `assets/pizza-bacon.png`\
Ingredientes: Mussarela, bacon crocante, cebola roxa e orégano.\
Preço: **R\$ 54,90**

### 9. Esfiha Cheddar Especial

Imagem: `assets/esfiha-cheddar.png`\
Ingredientes: Massa artesanal, cheddar cremoso, orégano e tempero
especial da casa.\
Preço: **R\$ 5,90**

------------------------------------------------------------------------

## 7. Estrutura dos cards e WhatsApp

Os 9 botões dos produtos já foram configurados para usar a classe:

``` html
class="btn-whatsapp-produto"
```

e o atributo:

``` html
data-produto="Nome do produto"
```

Exemplo:

``` html
<a
    href="#"
    class="btn-whatsapp-produto"
    data-produto="Pizza Calabresa Especial"
>
    Pedir
</a>
```

O JavaScript lê `data-produto` e cria uma mensagem personalizada.

------------------------------------------------------------------------

## 8. JavaScript atual do WhatsApp

O `js/script.js` contém a lógica dos produtos:

``` js
const numeroWhatsApp = "5521999999999";

const botoesProduto = document.querySelectorAll(".btn-whatsapp-produto");

botoesProduto.forEach(function(botao) {

    botao.addEventListener("click", function(evento) {

        evento.preventDefault();

        const produto = botao.dataset.produto;

        const mensagem = `Olá! Gostaria de pedir ${produto}.`;

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

});
```

**IMPORTANTE:** `5521999999999` é apenas um número fictício. Antes de
publicar comercialmente, substituir pelo número real no formato
internacional, somente números:

``` text
55 + DDD + número
```

------------------------------------------------------------------------

## 9. Botão geral do WhatsApp

Em 02/09/2026 começamos a configurar também os CTAs gerais.

O botão **Fazer pedido**, no Header, já recebeu:

``` html
<a href="#" class="btn-pedido btn-whatsapp-geral">
    Fazer pedido
</a>
```

E foi acrescentado ao final do `script.js`:

``` js
const botoesWhatsAppGeral = document.querySelectorAll(".btn-whatsapp-geral");

botoesWhatsAppGeral.forEach(function(botao) {

    botao.addEventListener("click", function(evento) {

        evento.preventDefault();

        const mensagem = "Olá! Gostaria de fazer um pedido na Massa & Brasa.";

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

});
```

**O usuário testou e confirmou que está funcionando.**

------------------------------------------------------------------------

## 10. PONTO EXATO ONDE PARAMOS

Este é o ponto mais importante para a próxima conversa.

### Concluído

-   Layout principal
-   Responsividade básica
-   9 produtos
-   Imagens
-   Combo
-   Sobre
-   Contato
-   Footer
-   WhatsApp individual dos 9 produtos
-   WhatsApp geral no botão **Fazer pedido** do Header

### Próximo passo

Adicionar:

``` html
btn-whatsapp-geral
```

aos demais CTAs gerais, começando pelo botão **"Pedir pelo WhatsApp" do
Hero**.

Depois conectar:

1.  Hero --- `Pedir pelo WhatsApp`
2.  Combo Brasa --- `Pedir agora` (pode posteriormente receber mensagem
    específica do combo)
3.  Contato --- `Fazer pedido`
4.  Footer --- `Pedir pelo WhatsApp`

Como `.btn-whatsapp-geral` já está programada no JavaScript, os CTAs
gerais podem reutilizar a mesma lógica.

------------------------------------------------------------------------

## 11. Combo Brasa

Conteúdo:

**Combo Brasa --- R\$ 79,90**

Inclui:

-   1 Pizza grande
-   4 Esfihas
-   1 Refrigerante 2L

Imagem:

``` text
assets/combo-brasa.png
```

O botão atualmente é:

``` html
<a href="#" class="combo-button">Pedir agora</a>
```

Ainda precisa ser conectado ao WhatsApp.

Pode ser interessante futuramente dar ao Combo uma mensagem própria, em
vez da mensagem geral:

> Olá! Gostaria de pedir o Combo Brasa.

------------------------------------------------------------------------

## 12. Sobre

Título:

> Feito com cuidado.\
> Servido com sabor.

Texto:

> Na Massa & Brasa, cada pizza e esfiha é preparada com ingredientes
> selecionados, massa artesanal e aquele cuidado que transforma uma
> refeição em um momento especial.

> Da nossa cozinha até a sua mesa, buscamos unir sabor, qualidade e
> praticidade em cada pedido.

Imagem:

``` text
assets/sobre-massa-brasa.png
```

------------------------------------------------------------------------

## 13. Contato

Dados atualmente fictícios/genéricos:

**Local:** Rio de Janeiro - RJ\
**Funcionamento:** terça a domingo\
**Horário:** 18h às 23h

O botão:

``` html
<a href="#" class="contato-button">Fazer pedido</a>
```

ainda precisa ser conectado ao WhatsApp.

------------------------------------------------------------------------

## 14. Footer

O Footer contém:

-   Logo Massa & Brasa
-   Texto institucional
-   Links de navegação
-   Local
-   Horário
-   CTA WhatsApp
-   Copyright

Copyright:

> © 2026 Massa & Brasa. Todos os direitos reservados.

O botão:

``` html
<a href="#" class="footer-button">Pedir pelo WhatsApp</a>
```

ainda precisa ser conectado.

------------------------------------------------------------------------

## 15. Correções importantes já realizadas

### JavaScript não funcionava

Inicialmente o botão `Pedir` voltava ao topo porque `href="#"` era
executado e o JS não estava interceptando o clique.

Foram encontrados dois problemas durante o diagnóstico:

1.  O `<script>` estava antes do `<body>`, fazendo o JavaScript procurar
    os botões antes de eles existirem.
2.  Depois descobrimos que havia um erro no **nome do arquivo
    JavaScript**.

O usuário corrigiu o nome e colocou o script no final da página. Depois
disso, o WhatsApp passou a funcionar.

### Estrutura do Footer/Main

O fechamento:

``` html
</main>
```

deve acontecer **antes** do início do `<footer>`.

Estrutura correta:

``` html
</main>

<footer class="footer">
    ...
</footer>

<script src="js/script.js"></script>

</body>
</html>
```

### Combo/Sobre

Anteriormente a seção Sobre havia ficado acidentalmente dentro do grid
do Combo por falta de tags de fechamento. Isso já foi corrigido.

------------------------------------------------------------------------

## 16. Pequena pendência no CSS

Foi detectado anteriormente um possível erro de digitação dentro do
`@media (max-width:768px)`:

``` css
.produto-imagem {
    height: 23X 0px;
}
```

Se ainda existir, corrigir para:

``` css
.produto-imagem {
    height: 230px;
}
```

Não foi confirmado no histórico se essa correção específica já foi
feita.

------------------------------------------------------------------------

## 17. Direção das imagens

O estilo escolhido para as imagens dos alimentos é:

-   fotografia natural
-   aparência realista
-   evitar aspecto excessivamente artificial
-   texturas naturais
-   formatos não perfeitamente uniformes
-   iluminação quente/rústica
-   aparência artesanal

O usuário fez várias iterações até chegar às imagens atuais.

------------------------------------------------------------------------

## 18. Desenvolvimento futuro sugerido

Após terminar os CTAs do WhatsApp, continuar gradualmente com:

-   substituir número fictício pelo WhatsApp real
-   dados reais de endereço e horários, se o site virar comercial
-   revisar responsividade completa
-   menu mobile
-   acessibilidade
-   SEO básico
-   favicon
-   metadados
-   validação do HTML
-   possíveis efeitos/animações discretas
-   Git/GitHub
-   publicação (por exemplo, Vercel)
-   domínio próprio
-   revisão final para uso comercial

Não implementar tudo de uma vez. O usuário prefere aprender **passo a
passo**.

------------------------------------------------------------------------

## 19. Forma de trabalhar com o usuário

Na nova conversa:

-   responder em português;
-   explicar de forma simples e didática;
-   fazer uma alteração por vez;
-   indicar exatamente **qual arquivo** editar;
-   indicar exatamente **onde no código** colocar a alteração;
-   evitar despejar grandes quantidades de código sem necessidade;
-   quando o usuário colar código, analisar o código exato antes de
    sugerir mudanças;
-   tratar o projeto como algo potencialmente comercial e profissional.

------------------------------------------------------------------------

# INSTRUÇÃO PARA A PRÓXIMA CONVERSA

Ao iniciar uma nova conversa, anexar este arquivo e dizer algo como:

> **"Quero continuar o projeto Massa & Brasa usando este backup. Vamos
> continuar do ponto onde paramos."**

O próximo passo é configurar o botão **Pedir pelo WhatsApp do Hero** com
a classe `btn-whatsapp-geral`, aproveitando a lógica que já está
funcionando no `script.js`.
