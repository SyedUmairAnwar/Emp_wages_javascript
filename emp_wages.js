const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const PART_TIME_HOUR = 4
const FULL_TIME_HOUR = 8
const WAGE_PER_HOUR = 20
const NUM_OF_WORKING_DAYS = 20
const MAX_HRS_IN_MONTH = 160
const MAX_OF_WORKING_DAYS = 20
let total_empHrs = 0
let total_working_days = 0
let daily_wage_arr = new Array()
while (total_empHrs <= MAX_HRS_IN_MONTH && total_working_days < NUM_OF_WORKING_DAYS) {
    let empCheck = Math.floor(Math.random() * 10) % 3
    let empHrs = getWorkingHours(empCheck)
    total_empHrs += empHrs
    total_working_days++
    daily_wage_arr.push(cal_daily_wages(empHrs))
}
function cal_daily_wages(emphrs) {
    return emphrs * WAGE_PER_HOUR
}
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME: return PART_TIME_HOUR
            break
        case IS_FULL_TIME: return FULL_TIME_HOUR
            break
        default: return 0
    }
}
let emp_wage = cal_daily_wages(total_empHrs)
console.log("Total days is ", total_working_days, "Total hours ", total_empHrs, "total emp wage ", emp_wage)
console.log(daily_wage_arr.toString())
//for each
/**var fruits = ["apple", "orange", "cherry"];
fruits.forEach((item ,index)=>{console.log(item,index)});**/
//print total wages using for each loop
let tot_emp_wage = 0
function sum(daily_wage) {
    tot_emp_wage += daily_wage
}
daily_wage_arr.forEach(sum)
console.log("Total days ", total_working_days, "Total emp wages ", tot_emp_wage)
//showing days along with daily wages
let day_count = 0
function map_day_with_wages(daily_wage) {
    day_count++
    return day_count + "=" + daily_wage
}
let map_day_with_wages_arr = daily_wage_arr.map(map_day_with_wages)
console.log(map_day_with_wages_arr)
//show when full time was earned
function full_time(daily_wage) {
    return daily_wage.includes("160")
}
let full_day_arr = map_day_with_wages_arr.filter(full_time)//here the array of daily wage did not work because daily wage return the vslve as int but in condition it is given as string
console.log(full_day_arr)
//find the first occurance of full time
console.log(map_day_with_wages_arr.find(full_time))
//check every element is truly holding full time wage
console.log(full_day_arr.every(full_time))
//check any part time wage
function part_time(daily_wage){
   return daily_wage.includes("80")
}
console.log(map_day_with_wages_arr.some(part_time))
//find total no of working days
function total_working_days_func(no_of_days,daily_wage){
    if(daily_wage>0){no_of_days++}
    return no_of_days
}
console.log(daily_wage_arr.reduce(total_working_days_func,0))