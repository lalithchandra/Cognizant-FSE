import java.util.Scanner;

public class RemoveWhitespaces {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        String noSpaces = str.replaceAll("\\s", "");
        System.out.println("String without whitespaces: " + noSpaces);
    }
}
