//Customer Database: Find a customer by their email address. using javascript find method

const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "555-555-5555",
  },
];

// Email address to search for
const emailToFind = 'jane@example.com';

// Find the customer by email address
const foundCustomer = customers.find(customer => customer.email === emailToFind);

if (foundCustomer) {
    console.log(`Customer found:, ${foundCustomer}`);
    // console.log('Customer found:', foundCustomer);
} else {
    console.log(`Customer not found for email: ${emailToFind}`);
}