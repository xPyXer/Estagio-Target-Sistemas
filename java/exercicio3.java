
public class exercicio3 {
    public static void main(String[] args) {
        // Sequência a)
        int[] seq_a = {1, 3, 5, 7};
        int next_a = seq_a[3] + 2;
        System.out.printf("Resolução A)", next_a);
        //Cada número é igual ao anterior + 2, formando os números ímpares

        // Sequência b)
        int[] seq_b = {2, 4, 8, 16, 32, 64};
        int next_b = seq_b[5] * 2;
        System.out.printf("Resolução B)", next_b);
        //Cada número é igual ao anterior multiplicado por 2


        // Sequência c)
        int[] seq_c = {0, 1, 4, 9, 16, 25, 36};
        int next_c = (seq_c.length) * (seq_c.length);
        System.out.printf("Resolução C)", next_c);
        //Cada número é igual ao anterior acrescido de um número ímpar que segue a sequência 1, 3, 5, 7, 9.


        // Sequência d)
        int[] seq_d = {4, 16, 36, 64};
        int next_d = (seq_d.length + 1) * (seq_d.length + 1);
        System.out.printf("Resolução D)", next_d);
        //Cada número é igual ao quadrado dos números pares.


        // Sequência e)
        int[] seq_e = {1, 1, 2, 3, 5, 8};
        int next_e = seq_e[5] + seq_e[4];
        System.out.printf("Resolução E)", next_e);
        // Cada número é igual à soma do número atual com o número anterior. Assim, o próximo número é igual a 8 + 5 = 13. 


        // Sequência f)
        int[] seq_f = {2, 10, 12, 16, 17, 18, 19, 200};
        System.out.printf("Resolução f)", seq_f);
        /* Sequência formada através de todos os números que iniciam com a letra d. Assim, o próximo número em ordem crescente que inicia com a letra d é 200 */
    }
}