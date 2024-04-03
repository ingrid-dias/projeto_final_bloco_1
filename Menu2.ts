import readlinesync = require("readline-sync");

import { colors } from './src/util/Colors';
import { ProdutoController } from "./src/controller/ProdutoController";
import { EdicaoEspecial } from "./src/model/EdicaoEspecial";
import { EdicaoPadrao } from "./src/model/EdicaoPadrao";

export function main() {

    let opcao, id, tipo, preco: number;
    let nome, especial, padrao: string;
    let tipoProduto = ['EdicaoEspecial', 'EdicaoPadrao'];


    while (true) {

        console.log(colors.bg.white, colors.fg.cyanstrong,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                    Punko Fop                        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todas as Produtos             ");
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
                "\nNão é o original, mas parece!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch(opcao) {
            case 1:
                console.log("\nCRIAR PRODUTO");
                keyPress();
                break;
            case 2:
                console.log("\nLISTAR TODOS OS PRODUTOS");
                keyPress();
                break;
            case 3:
                console.log("\nCONSULTAR PRODUTO POR ID");
                keyPress();
                break;
            case 4:
                console.log("\nATUALIZAR PRODUTO");
                keyPress();
                break;
            case 5:
                console.log("\nDELETAR PRODUTO");
                keyPress();
                break;
            default:
                console.log("\nOPÇÃO INVÁLIDA!");
                keyPress();
                break;
        }
    }
}

/* Função com os dados da pessoa desenvolvedora */
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