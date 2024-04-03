import { Produto } from "./Produto";

export class EdicaoPadrao extends Produto{
    
    private _padrao: string;

	constructor(id: number, nome: string, tipo: number, preco: number, padrao: string) {
        super(id, nome, tipo, preco)
		this._padrao = padrao;
	}


    /**
     * @return {string}
     */
	public get fragancia(): string {
		return this._padrao;
	}

    /**
     * @param {string} value
     */
	public set fragancia(value: string) {
		this._padrao = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log(`Edição: ${this._padrao}`);
    }
}