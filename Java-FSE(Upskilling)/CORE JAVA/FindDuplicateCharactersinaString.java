import java.util.Scanner;

public class DuplicateCharacters {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine().toLowerCase();

        int[] freq = new int[256];

        for (char ch : str.toCharArray()) {
            freq[ch]++;
        }

        System.out.println("Duplicate characters:");
        for (int i = 0; i < 256; i++) {
            if (freq[i] > 1 && Character.isLetter(i)) {
                System.out.println((char) i + " - " + freq[i] + " times");
            }
        }
    }
}
