// any vs unknown 예시

// any 사용 예시
let anyValue: any = "Hello";
anyValue = 42;
anyValue = true;
anyValue = [1, 2, 3];

// any는 타입 체크 없이 바로 사용 가능 (위험!)
console.log(anyValue.toUpperCase()); // 런타임 에러 가능성 있음
console.log(anyValue.nonExistentMethod()); // 컴파일 에러 없음, 런타임 에러

// unknown 사용 예시
let unknownValue: unknown = "Hello";
unknownValue = 42;
unknownValue = true;
unknownValue = [1, 2, 3];

// unknown은 타입 체크 없이 사용 불가 (안전!)
// console.log(unknownValue.toUpperCase()); // 컴파일 에러!
// console.log(unknownValue.nonExistentMethod()); // 컴파일 에러!

// unknown을 안전하게 사용하려면 타입 가드 필요
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // 이제 안전함
}

if (Array.isArray(unknownValue)) {
    console.log(unknownValue.length); // 배열 메서드 사용 가능
}

// 함수 예시
function processAny(value: any) {
    // 타입 체크 없이 바로 사용 (위험)
    return value.toUpperCase();
}

function processUnknown(value: unknown) {
    // 타입 체크 없이는 사용 불가
    // return value.toUpperCase(); // 컴파일 에러!
    
    // 타입 가드로 안전하게 사용
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return "Not a string";
}

// 실제 사용 예시
const userInput: unknown = "hello world";
const result = processUnknown(userInput);
console.log(result); // "HELLO WORLD"

const userInput2: unknown = 123;
const result2 = processUnknown(userInput2);
console.log(result2); // "Not a string" 