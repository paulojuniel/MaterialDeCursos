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
        }

    },1000)
}

fuction obterTelefone(idUsuario){
    setTimeout(() =>{
        return{
            telefone:'61555555',
            ddd: '61'
        }
    },2000)
}

function obterEndereco(idUsuario){

}

function resolverUsuario(erro, usuario){
    console.log('usuario', usuario);
}

obterUsuario(resolverUsuario);
//const telefone = obterTelefone(usuario.id);

