interface User {
  id: number;
  name: string;
  role: 'admin' | 'customer';
}


interface Beverage {
  name: string;
  price: number;
}


interface Order {
  orderId: number;
  customerId: number;
  customerName: string;
  beverageName: string;
  status: "placed" | "completed" | "picked-up";
}


let beverages: Beverage[] = [];
let orders: Order[] = [];


function isAdmin(user: User): boolean {
  return user.role === "admin";
}


function isCustomer(user: User): boolean {
  return user.role === "customer";
}


function addBeverage(user: User, name: string, price: number): void {
  if (!isAdmin(user)) {
    console.log("권한이 없습니다.");
    return;
  }

  const newBeverage: Beverage = { name, price };
  beverages.push(newBeverage);
}



function removeBeverage(user: User, beverageName: string): void {
  if (!isAdmin(user)) {
    console.log("권한이 없습니다.");
    return;
  }

  beverages = beverages.filter((beverage) => beverage.name !== beverageName);
}



function getBeverages(user: User): Beverage[] {
  if (!user) {
    return [];
  }
  return beverages;
}


function findBeverage(beverageName: string): Beverage | undefined {
  return beverages.find((beverage) => beverage.name === beverageName);
}



function placeOrder(user: User, beverageName: string): number {
  if (!isCustomer(user)) {
    console.log("권한이 없습니다.");
    return -1;
  }

  const beverage = findBeverage(beverageName);
  if (!beverage) {
    console.log("해당 음료를 찾을 수 없습니다.");
    return -1;
  }

  const newOrder: Order = {
    orderId: orders.length + 1,
    customerId: user.id,
    customerName: user.name,
    beverageName,
    status: "placed",
  };
  orders.push(newOrder);
  return newOrder.orderId;
}



function completeOrder(user: User, orderId: number): void {
  if (!isAdmin(user)) {
    console.log("권한이 없습니다.");
    return;
  }

  const order = orders.find((order) => order.orderId === orderId);
  if (order) {
    order.status = "completed"; // 단순히 주문의 상태만 바꾸고 끝!
    console.log(
      `[고객 메시지] ${order.customerName}님~ 주문하신 ${order.beverageName} 1잔 나왔습니다~`
    );
  }
}



function pickUpOrder(user: User, orderId: number): void {
  if (!isCustomer(user)) {
    console.log("권한이 없습니다.");
    return;
  }

  const order = orders.find(
    (order) => order.orderId === orderId && order.customerId === user.id
  );
  if (order && order.status === "completed") {
    order.status = "picked-up";
    console.log(
      `[어드민 메시지] 고객 ID[${order.customerId}]님이 주문 ID[${orderId}]을 수령했습니다.`
    );
  }
}



function main(): void {
  const admin: User = { id: 1, name: "관리자", role: "admin" };
  const customer: User = { id: 2, name: "고객", role: "customer" };

  addBeverage(admin, "아메리카노", 3000);
  addBeverage(admin, "라떼", 4000);
  addBeverage(admin, "카페모카", 5000);


  console.log(getBeverages(admin));

  const orderId = placeOrder(customer, "아메리카노");
  completeOrder(admin, orderId);
  pickUpOrder(customer, orderId);

  console.log(getBeverages(admin));
}

main();