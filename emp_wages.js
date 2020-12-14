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
let daily_wage_map = new Map()
let daily_wage_hrs_map=new Map()
let daily_hrs_wage_arr=new Array()//for uc 10 to create the object
while (total_empHrs <= MAX_HRS_IN_MONTH && total_working_days < NUM_OF_WORKING_DAYS) {
    let empCheck = Math.floor(Math.random() * 10) % 3
    let empHrs = getWorkingHours(empCheck)
    total_empHrs += empHrs
    total_working_days++
    daily_wage_arr.push(cal_daily_wages(empHrs))
    daily_wage_map.set(total_working_days, cal_daily_wages(empHrs))
    daily_wage_hrs_map.set(total_working_days,empHrs)
    //pushing the data in the array object
    daily_hrs_wage_arr.push({
        day_num:total_working_days,
        day_hour:empCheck,
        day_wage:cal_daily_wages(empHrs),
        toString(){
                return "\nDay "+this.day_num +" ==>Working hour is "+this.day_hour+" and wage earned "+this.day_wage
        },
        

    })
}
console.log("Uc 10 showing daily hours worked and wage earned: "+daily_hrs_wage_arr)
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
console.log(daily_wage_map)
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
    return day_count + "=" + daily_wage //why we concate this one
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
function part_time(daily_wage) {
    return daily_wage.includes("80")
}
console.log(map_day_with_wages_arr.some(part_time))
//find total no of working days
function total_working_days_func(no_of_days, value) {
    if (value > 0) { no_of_days++ }
    return no_of_days
}
console.log(daily_wage_arr.reduce(total_working_days_func, 0))

//uc9 arrow function
const find_total=(total_val,daily_val)=>{
    return total_val +=daily_val
}
let count=0
let total_hrs=Array.from(daily_wage_hrs_map.values()).reduce(find_total,0);
let total_salary=daily_wage_arr.filter(daily_wage =>daily_wage>0).reduce(find_total,0)
console.log("UC9 emp wage with array :"+"Total hrs: "+total_hrs+"Total wages "+total_salary)
let non_working_days=new Array()
let part_working_days=new Array()
let full_working_days=new Array()
daily_wage_hrs_map.forEach((value,key,map)=>{
    if(value==8)full_working_days.push(key)
    else if (value==4)part_working_days.push(key)
    else non_working_days.push(key)
})
console.log("Full working days "+full_working_days)
console.log("Part working days "+part_working_days)
console.log("non working days "+non_working_days)


