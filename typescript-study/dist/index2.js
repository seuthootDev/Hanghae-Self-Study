"use strict";
let beverages = [];
let orders = [];
function isAdmin(user) {
    return user.role === "admin";
}
function isCustomer(user) {
    return user.role === "customer";
}
function addBeverage(user, name, price) {
    if (!isAdmin(user)) {
        console.log("권한이 없습니다.");
        return;
    }
    const newBeverage = { name, price };
    beverages.push(newBeverage);
}
function removeBeverage(user, beverageName) {
    if (!isAdmin(user)) {
        console.log("권한이 없습니다.");
        return;
    }
    beverages = beverages.filter((beverage) => beverage.name !== beverageName);
}
function getBeverages(user) {
    if (!user) {
        return [];
    }
    return beverages;
}
function findBeverage(beverageName) {
    return beverages.find((beverage) => beverage.name === beverageName);
}
function placeOrder(user, beverageName) {
    if (!isCustomer(user)) {
        console.log("권한이 없습니다.");
        return -1;
    }
    const beverage = findBeverage(beverageName);
    if (!beverage) {
        console.log("해당 음료를 찾을 수 없습니다.");
        return -1;
    }
    const newOrder = {
        orderId: orders.length + 1,
        customerId: user.id,
        customerName: user.name,
        beverageName,
        status: "placed",
    };
    orders.push(newOrder);
    return newOrder.orderId;
}
function completeOrder(user, orderId) {
    if (!isAdmin(user)) {
        console.log("권한이 없습니다.");
        return;
    }
    const order = orders.find((order) => order.orderId === orderId);
    if (order) {
        order.status = "completed"; // 단순히 주문의 상태만 바꾸고 끝!
        console.log(`[고객 메시지] ${order.customerName}님~ 주문하신 ${order.beverageName} 1잔 나왔습니다~`);
    }
}
function pickUpOrder(user, orderId) {
    if (!isCustomer(user)) {
        console.log("권한이 없습니다.");
        return;
    }
    const order = orders.find((order) => order.orderId === orderId && order.customerId === user.id);
    if (order && order.status === "completed") {
        order.status = "picked-up";
        console.log(`[어드민 메시지] 고객 ID[${order.customerId}]님이 주문 ID[${orderId}]을 수령했습니다.`);
    }
}
function main() {
    const admin = { id: 1, name: "관리자", role: "admin" };
    const customer = { id: 2, name: "고객", role: "customer" };
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
