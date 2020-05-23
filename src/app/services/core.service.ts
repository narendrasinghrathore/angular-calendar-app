import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export default class CoreService {
  constructor() {}

  /**
   * Return total number of days. For example if you pass year 1990 and month 0 i.e. January it will return
   * 31 i.e. days.
   * @param year Year in number.
   * @param month Month in number. We use 0 based index for months.
   */
  totalNumberOfMonths(year?: number, month?: number) {
    if (!year && !month) return 0;
    try {
      return new Date(year, month, 0).getDate();
    } catch (error) {
      return 0;
    }
  }
}
