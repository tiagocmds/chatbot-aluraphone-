//watson, eu quero usar sua api
//requerimento para essa api

var conversationV1 = require('watson-developer-cloud/assistant/v1');
var prompt = require('prompt-sync')();

//vou te passar oque voce precisa acessar

var conversation = new conversationV1({
    username: 'apikey',
    password: 'xIwyGob1aJk_QLWd9t59mc5mjA_o8vShHZ4GvDo-VDw8',
    url: 'https://gateway.watsonplatform.net/assistant/api',
    version: '2018-09-20'
});

//vou mandar uma mensagem
conversation.message({
    input: { text: '' },
    workspace_id: '38c283da-109a-4a08-a56f-41e2a8b67285'
},

    //oque e essa resposta, quero ver essa resposta
    function processarResposta(erro, response) {
        if (erro != null) {
            console.log(erro)
        }
        var encerarConversa = false;

        if (response.output.acao === 'encerar') {
            console.log(response.output.text[0]);
            encerarConversa = true;
        }
        else {
            console.log(response.output.text[0])
        }
        if (!encerarConversa) {
            var novaMensagemUsuario = prompt('>> ');
            conversation.message({
                input: { text: novaMensagemUsuario }, workspace_id: '38c283da-109a-4a08-a56f-41e2a8b67285',
                context: response.context
            }, processarResposta);
        }
    }
);


