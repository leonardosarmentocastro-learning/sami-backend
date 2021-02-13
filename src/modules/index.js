// CONVENÇÃO: Re-exportar cada módulo.
module.exports = {
	health: { ...require('./health') },
};
