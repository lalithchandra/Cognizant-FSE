import java.util.Scanner;

public class LCM {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        System.out.print("Enter second number: ");
        int b = sc.nextInt();

        int gcd = a, b_copy = b;
        while (b_copy != 0) {
            int temp = b_copy;
            b_copy = gcd % b_copy;
            gcd = temp;
        }

        int lcm = (a * b) / gcd;
        System.out.println("LCM is: " + lcm);
    }
}
