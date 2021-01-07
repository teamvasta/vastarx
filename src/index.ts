export namespace VastaRX {
	const vastaRXValues: any = {};
	const vastaRXGetters: any = {};

	const hash = function () {
		var retorno = "";
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var charsLength = chars.length;
		for (var i = 0; i < 10; i++)
			retorno += chars.charAt(Math.floor(Math.random() * charsLength));
		return retorno;
	};

	export const getCurrentValue = (key: string) => {
		return vastaRXValues[key];
	};

	export const getState = (key: string, callback: any) => {
		if (!vastaRXGetters[key]) vastaRXGetters[key] = [];
		const id = `${key}:${hash()}`;
		vastaRXGetters[key].push({ id, callback });
		callback(vastaRXValues[key]);
		return id;
	};

	export const setState = (key: string, value: any) => {
		vastaRXValues[key] = value;
		if (vastaRXGetters[key]) {
			for (const getter of vastaRXGetters[key]) {
				getter.callback(value);
			}
		}
	};

	export const unListen = (identifier: string) => {
		const [chave, id] = identifier.split(":");
		vastaRXGetters[chave] = vastaRXGetters[chave].filter((objeto: any) => {
			return objeto.id.split(':')[1] !== id;
		});
		return id;
	};

}