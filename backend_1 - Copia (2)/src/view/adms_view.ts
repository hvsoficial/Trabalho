import Adm from "../models/Adm"

export default {
	render(adms: Adm) {
		return {
			id: adms.id,
			name: adms.name,
            email: adms.email,
            senha: adms.senha
		}
	},

	renderMany(adms: Adm[]) {
		return adms.map(adm => this.render(adm))
	}
}