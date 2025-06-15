package src;
// import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        // Scanner scanner = new Scanner(System.in);

        // System.out.print("이름: ");
        // String sentence = scanner.nextLine();  // ✅ 데이터 전달
        // System.out.print("나이: ");
        // int age = scanner.nextInt();
        // System.out.println("이름: " + sentence + ",  나이: " + age);

        // scanner.close();

        // int a = 15;
        // int b = 4;

        // System.out.println("a + b = " + (a + b));
        // System.out.println("a - b = " + (a - b));

        // System.out.println("a * b = " + (a * b));

        // System.out.println("a / b = " + (a / b));

        // System.out.println("a % b = " + (a % b));
        int x = 10;
        int y = 20;
        int result = test(x, y);
        System.out.println(result);

        // Integer ii = 100;
        // String str = ii.toString();
        // System.out.println(str);
    }

    private static int test(int x, int y) {
        return x + y;
    }
}


