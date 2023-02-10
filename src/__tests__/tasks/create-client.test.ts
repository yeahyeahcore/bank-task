import { createClient } from "@/tasks/create-client";

describe("Test createClient function", () => {
  const testCases = [
    {
      name: "Test createClient function with normal data",
      input: ["Иван", 550],
      response: { name: "Иван", balance: 550 },
    },
    {
      name: "Test createClient function without balance",
      input: ["Иван"],
      response: { name: "Иван", balance: 0 },
    },
    {
      name: "Test createClient function with negative balance",
      input: ["Иван", -1000],
      response: { name: "Иван", balance: -1000 },
    },
    {
      name: "Test createClient function with zero balane",
      input: ["Иван", 0],
      response: { name: "Иван", balance: 0 },
    },
    {
      name: "Test createClient function with empty name",
      input: ["", 120],
      response: { name: "", balance: 120 },
    },
  ];

  test.each(testCases)("$name", ({ input, response }) => {
    const client = createClient(...input);

    expect(client).toBe(response);
  });
});
