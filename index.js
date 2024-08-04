document.addEventListener("DOMContentLoaded", function() {
    let output = document.getElementById('output');
    let buttons = document.getElementsByClassName('tool--btn');

   
    for (let btn of buttons) {
        btn.addEventListener('click', () => {
            let cmd = btn.dataset['command'];
            console.log(`Comando executado: ${cmd}`);
            handleCommand(cmd);
        });
    }

    function handleCommand(cmd) {
        switch (cmd) {
            case 'justifyLeft':
                document.execCommand('justifyLeft', false, null);
                break;
            case 'justifyCenter':
                document.execCommand('justifyCenter', false, null);
                break;
            case 'bold':
                console.log('Executando comando: bold'); 
                document.execCommand('bold', false, null);
                break;
            case 'italic':
                console.log('Executando comando: italic'); 
                document.execCommand('italic', false, null);
                break;
            case 'underline':
                console.log('Executando comando: underline');
                document.execCommand('underline', false, null);
                break;
            case 'insertOrderedList':
                document.execCommand('insertOrderedList', false, null);
                break;
            case 'insertUnorderedList':
                document.execCommand('insertUnorderedList', false, null);
                break;
            case 'createlink':
                let url = prompt("Insira o link aqui:", "http://");
                if (url) {
                    createLink(url);
                }
                break;
            default:
                console.log('Comando desconhecido: ' + cmd);
        }
    }

    function createLink(url) {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
        const range = selection.getRangeAt(0);

        const link = document.createElement('a');
        link.href = url;
        link.appendChild(range.extractContents());
        range.insertNode(link);
        range.collapse(false);
    }
});