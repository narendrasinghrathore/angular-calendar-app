import { TestBed } from "@angular/core/testing";

import { CoreService } from "./core.service";

describe("CoreService", () => {
  let service: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return total number of days in given month", () => {
    const daysInMonth = 31,
      year = 2020,
      month = 0;
    const result = service.totalNumberOfMonths(year, month);
    expect(result).toBe(daysInMonth);
  });

  it("should return 0, if year or month is not passed", () => {
    const expectedResult = 0;
    const result = service.totalNumberOfMonths();
    expect(result).toBe(expectedResult);
  });

  it("should return 0, if year or month is passed as string or incorrect format for Date", () => {
    const expectedResult = 0,
      year = 0,
      month = 0;
    const result = service.totalNumberOfMonths(year, month);
    expect(result).toBe(expectedResult);
  });
});
