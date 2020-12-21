export namespace VastaRX {
	const vastaRXValores: any = {};
	const vastaRXGetters: any = {};

	const hash = function () {
		var retorno = "";
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var charsLength = chars.length;
		for (var i = 0; i < 10; i++)
			retorno += chars.charAt(Math.floor(Math.random() * charsLength));
		return retorno;
	};

	export const listen = (chave: string, callback: any) => {
		if (!vastaRXGetters[chave]) vastaRXGetters[chave] = [];
		const id = `${chave}:${hash()}`;
		vastaRXGetters[chave].push({ id, callback });
		callback(vastaRXValores[chave]);
		return id;
	};

	export const publish = (chave: string, valor: any) => {
		vastaRXValores[chave] = valor;
		if (vastaRXGetters[chave]) {
			for (const getter of vastaRXGetters[chave]) {
				getter.callback(valor);
			}
		}
	};

	export const unlisten = (identificador: string) => {
		const [chave, id] = identificador.split(":");
		vastaRXGetters[chave] = vastaRXGetters[chave].filter((objeto: any) => {
			return objeto.id !== identificador;
		});
		return id;
	};

}