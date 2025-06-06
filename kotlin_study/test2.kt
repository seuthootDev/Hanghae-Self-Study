package com.example.myapplication

fun main(){
    var num1 = 30
    var num2 = 10

    // 덧셈 연산자(+)사용해서 num1과 num2를 더한후에 plusResult에 대입함
    var plusResult = num1 + num2
    println("num1 + num2 is ${plusResult}")

    // 뺄셈 연산자(-)사용해서 num1에서 num2를 뺀후에 minusResult에 대입함
    var minusResult = num1 - num2
    println("num1 - num2 is ${minusResult}")

    // 곱셈 연산자(*)사용해서 num1과 num2를 곱한후에 multipleResult에 대입함
    var multipleResult = num1 * num2
    println("num1 * num2 is ${multipleResult}")

    // 나눗셈 연산자(/)사용해서 num1에서 num2를 나눈후에 divideResult에 대입함
    var divideResult = num1 / num2
    println("num1 / num2 is ${divideResult}")

    // num2를 10에서 7로 변경
    num2 = 7

    // 나머지 연산자(%)사용해서 num1에서 num2를 나눈 나머지를 modResult에 대입함
    var modResult = num1 % num2
    println("num1 % num2 as integer is ${modResult}")



    // = 기준으로
    // 오른쪽: "참새"
    // 왼쪽의 이름: name
    // 즉, "참새"를 name변수에 대입한다라고 읽을 수 있음
    var name = "chamsae"
    println("My name is ${name}")

    // = 기준으로
    // 오른쪽: 10
    // 왼쪽의 이름: age
    // 즉, 10을 age변수에 대입한다라고 읽을 수 있음
    val age = 10
    println("My age is ${age}")




    num1 = 30
    num2 = 10

    // 산술연산자와 대입연산자를 따로 사용
    // num1의 값을 10 증가시켜서 40을 만들고 싶다면?
    num1 = num1 + 10
    println("Result of separate arithmetic and assignment: ${num1}")

    // 복합대입연산자를 사용
    // num2의 값을 10 증가시켜서 20을 만들고 싶다면?
    num2 += 10
    println("Result using compound assignment: ${num2}")

    // 뺄셈, 곱셈, 나눗셈, 나머지연산도 동일하게 사용가능해요
    // 뺄셈: a-=b
    // 곱셈: a*=b
    // 나눗셈: a/=b
    // 나머지: a%=b


    num1 = 30
    num2 = 10

    // num1의 값을 1 증가시키고 싶다면?

    // 1) 산술연산자, 대입연산자 따로 사용
    num1 = num1 + 1
    println("(num1_1): Increase by 1 using separate arithmetic and assignment: ${num1}")

    // 2) 복합대입연산자 사용
    num1 += 1
    println("(num1_2): Increase by 1 using compound assignment: ${num1}")

    // 3) 증감 연산자
    num1++
    println("(num1_3): Increase by 1 using increment operator: ${num1}")

    println("====================================================")

    // num2의 값을 1 감소시키고 싶다면?

    // 1) 산술연산자, 대입연산자 따로 사용
    num2 = num2 - 1
    println("(num2_1): Decrease by 1 using separate arithmetic and assignment: ${num2}")

    // 2) 복합대입연산자 사용
    num2 -= 1
    println("(num2_2): Decrease by 1 using compound assignment: ${num2}")

    // 3) 증감 연산자
    num2--
    println("(num2_3): Decrease by 1 using decrement operator: ${num2}")



    num1 = 10
    num2 = 20
    var num3 = 30

    // 후위연산자는 println연산을 실행후에 증감해요
    println(num1++)
    println(num1)

    // 전위연산자는 println연산 실행전에 증감해요
    println(++num2)
    println(num2)

    num3++
    println(num3)

    ++num3
    println(num3)

    var aaa = readLine()?.toInt()
    println(aaa)
}
