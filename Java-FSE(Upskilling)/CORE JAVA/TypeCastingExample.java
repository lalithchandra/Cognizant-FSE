public class TypeCastingExample {
    public static void main(String[] args) {
        double d = 9.78;
        int i = (int) d; 
        System.out.println("Double to int: " + i);

        int j = 50;
        double newDouble = j; 
        System.out.println("Int to double: " + newDouble);
    }
}
