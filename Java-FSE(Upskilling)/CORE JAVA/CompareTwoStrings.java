import java.util.Scanner;

public class CompareStrings {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first string: ");
        String str1 = sc.nextLine();
        System.out.print("Enter second string: ");
        String str2 = sc.nextLine();

        System.out.println("Case-sensitive comparison: " + str1.equals(str2));
        System.out.println("Case-insensitive comparison: " + str1.equalsIgnoreCase(str2));
    }
}
