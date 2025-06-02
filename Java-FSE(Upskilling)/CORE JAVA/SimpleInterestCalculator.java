import java.util.Scanner;

public class SimpleInterest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter principal (P): ");
        double P = sc.nextDouble();
        System.out.print("Enter rate of interest (R): ");
        double R = sc.nextDouble();
        System.out.print("Enter time (T in years): ");
        double T = sc.nextDouble();

        double SI = (P * R * T) / 100;
        System.out.println("Simple Interest: " + SI);
    }
}
