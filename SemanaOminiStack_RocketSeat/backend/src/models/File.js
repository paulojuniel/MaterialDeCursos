const mongoose = require('mongoose');

const File = new mongoose.Schema(
{
	title:{
		type: String,
		require: true,
	},
	path:{
		type: String,
		require: true,
	}
}, 
{
	timestamps: true,
	toObject:{virtuals: true},
	toJSON:{ virtuals: true}
});

File.virtual('url').get(funcion(){
	return `http://localhost:3333/files/${encondeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);