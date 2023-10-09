/**
 * @jest-environment jsdom
 */

const validateForm = require('./calculator');

jest.spyOn(window, 'alert').mockImplementation(() => { });


// describe("TC-01-001", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//     });
// });

// describe("TC-01-002", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("20", "10", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Year of Birthdate must be four digits!");
//     });
// });

// describe("TC-01-003", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("10", "5", "year", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Year of Birthdate must be four digits!");
//     });
// });

// describe("TC-01-004", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("26", "-5", "2010", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-005", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("19", "0", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-006", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("16", "-10", "hello", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-007", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("18", "20", "2020", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-008", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("19", "30", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-009", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("1", "40", "ben", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-010", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("2", "March", "1999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-011", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("3", "April", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-012", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("4", "June", "world", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-013", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("0", "2", "1990", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-014", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-1", "3", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-015", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-2", "4", ":", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-016", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-3", "0", "1980", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-017", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-4", "-3", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-018", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-5", "-20", "\"", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-019", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-6", "70", "1970", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-020", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-20", "80", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-021", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-21", "90", "}", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-022", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-22", "Jan", "1960", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-023", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-30", "Mei", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-024", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-40", "Oct", "{", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-025", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("32", "5", "1100", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-026", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("33", "6", "900", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-027", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("34", "7", "hello", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-028", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("35", "-1", "1500", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-029", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("36", "-2", "60", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-030", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("37", "-3", "ben", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-031", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("38", "15", "1700", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-032", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("100", "16", "200", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-033", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("70", "17", "name", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-034", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("90", "Dec", "1900", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-035", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("80", "Nov", "500", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-036", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("60", "January", "age", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-037", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("@", "5", "1950", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-038", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("#", "6", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-039", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("$", "7", "/", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-040", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("%", "0", "1940", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-041", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("^", "-10", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-042", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("&", "-11", "`", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-043", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("*", "88", "1930", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-044", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("(", "20", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-045", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate(")", "30", "~", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-046", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("+", "?", "1988", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-047", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("-", "<", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-01-048", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("*", ">", "!", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Birthdate!!");
//     });
// });

// describe("TC-02-001", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("10", "10", "1990", "30", "12", "2009", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Salary!!");
//     });
// });

// describe("TC-02-002", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "20", "10", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Year of Service Commencement Date must be four digits!");
//   });
// });

// describe("TC-02-003", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "10", "5", "year", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-004", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "26", "-5", "2010", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-005", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "19", "0", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-006", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "16", "-10", "hello", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(16,-1,hell)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-007", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "18", "20", "2020", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-008", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "19", "30", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-009", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "1", "40", "ben", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-010", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "2", "March", "1999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(2, Ma, 1999)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-011", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "3", "April", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(3, Ap, 999)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-012", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "4", "June", "world", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(4, Ju, World)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-013", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "0", "2", "1990", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-014", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-1", "3", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-015", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-2", "4", ":", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-016", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-3", "0", "1980", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-017", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-4", "-3", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-018", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-5", "-20", "“", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(-5, -2, “)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-019", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-6", "70", "1970", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-020", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-20", "80", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(-2, 80, 999)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-021", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-21", "90", "}", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(-21, 90, })
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-022", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-22", "Jan", "1960", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(-2, Ja, 1960)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-023", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-30", "Mei", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(-3, Me, 999)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-024", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-40", "Oct", "{", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(-4, Oc, {)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-025", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "32", "5", "1100", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-026", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "33", "6", "900", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-027", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "34", "7", "Hello", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(34, 7, Hell)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-028", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "35", "-1", "1500", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-029", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "36", "-2", "60", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-030", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "37", "-3", "ben", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-031", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "38", "15", "1700", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-032", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "100", "16", "200", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(10, 16, 200)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-033", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "70", "17", "name", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-034", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "90", "Dec", "1900", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(90, De, 1900)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-035", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "80", "Nov", "500", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(80, No, 500)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-036", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "60", "January", "age", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(60, Ja, age)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-037", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "@", "5", "1950", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-038", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "#", "6", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-039", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "$", "7", "/", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-040", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "%", "0", "1940", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-041", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "^", "-10", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(^, -1, 999)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-042", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "&", "-11", "`", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       //(&, -1, `)
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-043", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "*", "88", "1930", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-044", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "(", "20", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-045", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", ")", "30", "~", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-046", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "+", "?", "1988", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-047", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "-", "<", "999", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-02-048", () => {
//   it("should mock the window alert function", () => {
//       Object.defineProperty(global, "window", {
//           value: {
//               alert: jest.fn(),
//           },
//       });

//       validateForm.validate("10", "10", "1990", "*", ">", "!", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//       expect(window.alert).toBeCalledWith("Wrong Service Commencement Date!!");
//   });
// });

// describe("TC-03-001", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "1980", "30", "12", "2009", "-100", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Salary!!");
//     });
// });

// describe("TC-03-002", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "1980", "30", "12", "2009", "1000", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Allowance!!");
//     });
// });

// describe("TC-03-003", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "1980", "30", "12", "2009", "hello", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Salary!!");
//     });
// });

// describe("TC-08-001", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "1980", "30", "12", "2009", "1000", "-200", "-", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Allowance!!");
//     });
// });

// describe("TC-08-002", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "1980", "30", "12", "2009", "1000", "500", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Cash Award In Lieu of Leave!!");
//     });
// });

// describe("TC-08-003", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "1980", "30", "12", "2009", "1000", "happy", "-", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Allowance!!");
//     });
// });

// describe("TC-09-001", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "1980", "30", "12", "2009", "1000", "500", "300", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Cash Award In Lieu of Leave!!");
//     });
// });

// describe("TC-09-002", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "1980", "30", "12", "2009", "1000", "500", "125", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });

// describe("TC-09-003", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "1980", "30", "12", "2009", "1000", "500", "amazing", "-", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Cash Award In Lieu of Leave!!");
//     });
// });

// describe("TC-04-001", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "10", "12", "30", "-","-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Gender!!");
//     });
// });

// describe("TC-04-002", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "-1", "10", "20", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });

// describe("TC-04-003", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "year", "5", "10", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });

// describe("TC-04-004", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "10", "-5", "26", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });

// describe("TC-04-005", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "-1", "0", "19", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });

// describe("TC-04-006", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "hello", "-10", "16", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-007", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "20", "March", "2", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-008", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "-1", "April", "3", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-009", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "world", "june", "4", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-010", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "20", "2", "-1", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-011", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "-1", "3", "-1", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-012", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", ":", "4", "-2", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-013", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "30", "-70", "-6", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-014", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "-1", "-80", "-20", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-015", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "}", "-90", "-21", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-016", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "30", "Jan", "-22", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-017", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "-1", "Mei", "-30", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-018", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "{", "Oct", "-40", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-019", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "30", "5", "%", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-020", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "-1", "10", "^", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-021", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "'", "11", "&", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-022", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "1", "-88", "*", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-023", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "-1", "-20", "(", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-024", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "~", "-30", ")", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-025", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "50", "?", "+", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-026", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "-1", "<", "-", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });
// describe("TC-04-027", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "!", ">", "*", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Unpaid Leave!!");
//     });
// });

// describe("TC-05-001", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "2", "2", "2", "L", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Status of Male Officer!!");
//     });
// });

// describe("TC-05-002", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "2", "2", "2", "P", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Status of Male Officer!!");
//     });
// });

// describe("TC-05-003", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "2", "2", "2", "-", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Gender!!");
//     });
// });

// describe("TC-06-001", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "2", "2", "2", "L", "Y", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-06-002", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "2", "2", "2", "L", "N", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-06-003", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "9", "9", "2023", "2000", "2000", "15", "2", "2", "2", "L", "-", "-", "-", "-");
//         expect(window.alert).toBeCalledWith("Wrong Status of Male Officer!!");
//     });
// });

// describe("TC-07-001", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "30", "12", "2009");
//         expect(window.alert).toBeCalledWith();
//     });
// });

// describe("TC-07-002", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "20", "10", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-003", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "10", "5", "year");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-004", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "26", "-5", "2010");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-005", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "19", "0", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-006", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "16", "-10", "hello");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-007", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "18", "20", "2020");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-008", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "19", "30", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-009", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "1", "40", "ben");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-010", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "2", "March", "1999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-011", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "3", "April", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-012", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "4", "June", "world");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-013", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "0", "2", "1990");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-014", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-1", "3", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-015", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-2", "4", ":");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-016", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-3", "0", "1980");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-017", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-4", "-3", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-018", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-5", "-20", "“");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-019", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-6", "70", "1970");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-020", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-20", "80", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-021", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-21", "90", "}");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-022", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-22", "Jan", "1960");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-023", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-30", "Mei", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-024", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-40", "Oct", "{");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-025", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "32", "5", "1100");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-026", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "33", "6", "900");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-027", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "34", "7", "hello");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-028", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "35", "-1", "1500");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-029", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "36", "-2", "60");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-030", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "37", "-3", "ben");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-031", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "38", "15", "1700");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-032", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "100", "16", "200");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-033", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "70", "17", "name");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-034", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "90", "Dec", "1900");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-035", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "80", "Nov", "500");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-036", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "60", "January", "age");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-037", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "@", "5", "1950");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-038", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "#", "6", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-039", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "$", "7", "/");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-040", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "%", "0", "1940");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-041", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "^", "-10", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-042", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "&", "-11", "'");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-043", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "*", "88", "1930");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-044", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "(", "20", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-045", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", ")", "30", "~");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-046", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "+", "?", "1988");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-047", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "-", "<", "999");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });

// describe("TC-07-048", () => {
//     it("should mock the window alert function", () => {
//         Object.defineProperty(global, "window", {
//             value: {
//                 alert: jest.fn(),
//             },
//         });

//         validateForm.validate("30", "12", "2009", "30", "12", "2009", "1000", "1000", "150", "30", "12", "10", "L", "Y", "*", ">", "!");
//         expect(window.alert).toBeCalledWith("Wrong Optional Retirement Date!!");
//     });
// });
