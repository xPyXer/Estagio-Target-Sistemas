import java.util.Scanner;

// Inverter String
public class exercicio5 {
    public static void inverterString(String str) {
        char[] caracteres = str.toCharArray();
        for (int i = caracteres.length - 1; i >= 0; i--) {
            System.out.print(caracteres[i]);
        }
    }

    // Exemplo de uso
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite uma string: ");
        String entrada = scanner.nextLine();
        System.out.print("String invertida: ");
        inverterString(entrada);
        scanner.close();
    }
}
