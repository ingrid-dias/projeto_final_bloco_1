import readlinesync = require("readline-sync");

import { colors } from './src/util/Colors';
import { ProdutoController } from "./src/controller/ProdutoController";
import { EdicaoEspecial } from "./src/model/EdicaoEspecial";
import { EdicaoPadrao } from "./src/model/EdicaoPadrao";

export function main() {

    let opcao, id, tipo, preco: number;
    let nome, especial, padrao: string;
    let tipoProduto = ['EdicaoEspecial', 'EdicaoPadrao'];

    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new EdicaoEspecial(produtoController.gerarId(),
        "Joel Miller - The Last Of Us", 1, 120.00, "Edicao Especial"));

    produtoController.cadastrar(new EdicaoPadrao(produtoController.gerarId(),
        "Jack Sparrow - Piratas do Caribe", 2, 80.00, "Edicao Padrao"));

    while (true) {

        console.log(colors.bg.white, colors.fg.cyanstrong,
                   "******************************************************");
        console.log("                                                     ");
        console.log("                Magix - Punko Fop                    ");
        console.log("           Não é o original, mas parece!             ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Dados da Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.magentastrong,
                "\nNÃO É O ORIGINAL, MAS PARECE!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Produto\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        especial = readlinesync.question("Digite a edicao do Punko Fop: ");
                        produtoController.cadastrar(new EdicaoEspecial(produtoController.gerarId(),
                            nome, tipo, preco, especial));
                        break;
                    case 2:
                        padrao = readlinesync.question("Digite a edicao do Punko Fop: ");
                        produtoController.cadastrar(new EdicaoPadrao(produtoController.gerarId(),
                            nome, tipo, preco, padrao));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                produtoController.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                    let produto = produtoController.buscarNoArray(id);

                    if (produto !== null){

                        nome = readlinesync.question("Digite o Nome do Produto: ");

                        tipo = produto.tipo;
        
                        preco = readlinesync.questionFloat("Digite o preco: ");
        
                        switch (tipo) {
                            case 1:
                                especial = readlinesync.question("Digite a edicao do Punko Fop: ");
                                produtoController.atualizar(new EdicaoEspecial(id,
                                    nome, tipo, preco, especial));
                                break;
                            case 2:
                                padrao = readlinesync.question("Digite a edicao do Punko Fop: ");
                                produtoController.atualizar(new EdicaoPadrao(id,
                                    nome, tipo, preco, padrao));
                                break;
                        }

                    }else
                        console.log("Produto não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar um Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Ingrid Dias de Souza - dias.ingridsouza@gmail.com");
    console.log("https://github.com/ingrid-dias");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();