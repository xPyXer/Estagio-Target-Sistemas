function verificarInterruptor() {
    let interruptor1 = true;
    let interruptor2 = false;
    let interruptor3 = false;

    // Primeira iteração: ligar o primeiro interruptor
    setTimeout(() => {
        interruptor1 = false;
        interruptor2 = true;

        // Segunda iteração: desligar o primeiro interruptor e ligar o segundo
        setTimeout(() => {
            // Verificar o estado das lâmpadas
            if (interruptor1) {
                console.log("O interruptor 1 controla a lâmpada 1.");
            } else {
                console.log("O interruptor 2 controla a lâmpada 1.");
            }

            if (interruptor2) {
                console.log("O interruptor 2 controla a lâmpada 2.");
            } else {
                console.log("O interruptor 3 controla a lâmpada 2.");
            }

            if (interruptor3) {
                console.log("O interruptor 3 controla a lâmpada 3.");
            } else {
                console.log("O interruptor 1 controla a lâmpada 3.");
            }
        }, 2000); // Aguardar alguns minutos
    }, 2000); // Aguardar alguns minutos
}

verificarInterruptor();
