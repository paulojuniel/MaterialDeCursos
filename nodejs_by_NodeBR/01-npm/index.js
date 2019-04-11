/* 
obter usuário
obter o número apartir de um id
obter endereco pelo id
*/

function obterUsuario(callback){
    setTimeout(function(){
        return callback(null, {
            id: 1,
            nome: 'Paulo',
            dataNascimento: new Date(),
        })

    },1000)
}

fuction obterTelefone(idUsuario, callback){
    setTimeout(() =>{
        return callback(null, {
            telefone:'61555555',
            ddd: '61'
        })
    },2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(() =>{
        return callback(null, {
            rua:'quadra dev',
            numero: '61'
        })
    },2000)
}

function resolverUsuario(error, usuario){
    console.log('usuario', usuario);
}



obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error('Erro em usuario', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error('Erro em telefone', error1)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(erro2,endereco){
            if(error2){
                console.error('Erro em endereco', error2)
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua}, ${endereco.numero},
                Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
});
//const telefone = obterTelefone(usuario.id);

