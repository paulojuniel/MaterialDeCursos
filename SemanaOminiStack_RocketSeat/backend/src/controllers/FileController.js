const Box = require('../models/Box');
const File = require('../models/File');

class FileController{
	
	async store(req,res){
		const box = await Box.findById(req.params.id);
		
		const file = awat File.create({
			title: req.file.originalname,
			path: req.file.key,
		});
		
		box.files.push(file);
		
		await box.save();
		
		req.io.sockets.in(box._id).emit("file", file);
		
		return res.json(file);
		//console.log(req.file);
		//criar um arquivo
		//retund res.send('ok está funcionando ( filecontroller)');
	}
}

module.exports = new FileController();