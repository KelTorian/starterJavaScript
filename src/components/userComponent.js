import {
  BaseLogger,
  ElasticLogger,
  MongoLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User Component Loaded");
let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Torian", "Kel", "İstanbul");
let user2 = new User(2, "Mahmut", "Kerim", "Adana");

//userService.add(user1);
//userService.add(user2);

//console.log(userService.getCustomerById(1));
//console.log(userService.listCustomers());

console.log("--------------------------------");
userService.load();

// let customerToAdd = new Customer(1, "Cemil", "Meriç", "Urfa", 80);
// customerToAdd.type = "customer";
//userService.add(customerToAdd);
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted());
