// Enum 예시

// 1. 기본적인 enum
enum Direction {
    North = "NORTH",
    South = "SOUTH", 
    East = "EAST",
    West = "WEST"
}

// 2. 숫자 enum (값을 지정하지 않으면 자동으로 0부터 시작)
enum Status {
    Pending,    // 0
    Approved,   // 1
    Rejected,   // 2
    Cancelled   // 3
}

// 3. 특정 값으로 시작하는 enum
enum Priority {
    Low = 1,
    Medium,     // 2
    High,       // 3
    Critical    // 4
}

// 4. 문자열 enum
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

// 사용 예시
function movePlayer(direction: Direction): void {
    console.log(`플레이어가 ${direction}쪽으로 이동합니다.`);
}

function checkStatus(status: Status): string {
    switch (status) {
        case Status.Pending:
            return "대기 중";
        case Status.Approved:
            return "승인됨";
        case Status.Rejected:
            return "거부됨";
        case Status.Cancelled:
            return "취소됨";
        default:
            return "알 수 없음";
    }
}

function getUserRole(role: UserRole): string {
    switch (role) {
        case UserRole.Admin:
            return "관리자";
        case UserRole.User:
            return "일반 사용자";
        case UserRole.Guest:
            return "게스트";
        default:
            return "알 수 없음";
    }
}

// 실제 사용
console.log("=== Direction Enum ===");
movePlayer(Direction.North);
movePlayer(Direction.East);

console.log("\n=== Status Enum ===");
console.log(checkStatus(Status.Pending));
console.log(checkStatus(Status.Approved));

console.log("\n=== Priority Enum ===");
console.log(`Low priority: ${Priority.Low}`);
console.log(`Medium priority: ${Priority.Medium}`);
console.log(`High priority: ${Priority.High}`);

console.log("\n=== UserRole Enum ===");
console.log(getUserRole(UserRole.Admin));
console.log(getUserRole(UserRole.User));

// enum 값 확인
console.log("\n=== Enum 값들 ===");
console.log("Direction.North:", Direction.North);
console.log("Status.Pending:", Status.Pending);
console.log("Priority.Low:", Priority.Low);
console.log("UserRole.Admin:", UserRole.Admin); 