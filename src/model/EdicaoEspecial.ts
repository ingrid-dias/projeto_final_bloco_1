import { Produto } from "./Produto";

export class EdicaoEspecial extends Produto{
    
    private _especial: string;

	constructor(id: number, nome: string, tipo: number, preco: number, especial: string) {
        super(id, nome, tipo, preco)
		this._especial = especial;
	}


    /**
     * @return {string}
     */
	public get especial(): string {
		return this._especial;
	}

    /**
     * @param {string} value
     */
	public set especial(value: string) {
		this._especial = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Edição: ${this._especial}`);
    }
}