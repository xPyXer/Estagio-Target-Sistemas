public class exercicio4 {
    public static void main(String[] args) throws InterruptedException {
        int interruptor1 = 1;
        int interruptor2 = 0;
        int interruptor3 = 0;

        // Primeira iteração: ligar o primeiro interruptor
        Thread.sleep(2000); // Aguardar alguns minutos

        // Segunda iteração: desligar o primeiro interruptor e ligar o segundo
        interruptor1 = 0;
        interruptor2 = 1;
        Thread.sleep(2000); // Aguardar alguns minutos

        // Verificar o estado das lâmpadas
        if (interruptor1 == 1) {
            System.out.println("O interruptor 1 controla a lâmpada 1.");
        } else {
            System.out.println("O interruptor 3 controla a lâmpada 1.");
        }

        if (interruptor2 == 1) {
            System.out.println("O interruptor 2 controla a lâmpada 2.");
        } else {
            System.out.println("O interruptor 3 controla a lâmpada 2.");
        }

        if (interruptor3 == 1) {
            System.out.println("O interruptor 1 controla a lâmpada 3.");
        } else {
            System.out.println("O interruptor 2 controla a lâmpada 3.");
        }
    }
}
