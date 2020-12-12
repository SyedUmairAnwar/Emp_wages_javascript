const IS_PART_TIME=1
const IS_FULL_TIME=2
const PART_TIME_HOUR=4
const FULL_TIME_HOUR=8
const WAGE_PER_HOUR=20
const NUM_OF_WORKING_DAYS=20
const MAX_HRS_IN_MONTH=160
const MAX_OF_WORKING_DAYS=20
let total_empHrs=0
let total_working_days=0
let daily_wage_arr=new Array()
while(total_empHrs<=MAX_HRS_IN_MONTH && total_working_days<NUM_OF_WORKING_DAYS){
let empCheck=Math.floor(Math.random()*10)%3
let empHrs =getWorkingHours(empCheck)
total_empHrs +=empHrs
total_working_days++
daily_wage_arr.push(cal_daily_wages(empHrs))
}
function cal_daily_wages(emphrs){
    return emphrs*WAGE_PER_HOUR
}
function getWorkingHours(empCheck){
 switch (empCheck){
    case IS_PART_TIME:return PART_TIME_HOUR
        break
    case IS_FULL_TIME:return FULL_TIME_HOUR
        break
    default:return 0        
 }
} 
let emp_wage=cal_daily_wages(total_empHrs)
console.log("Total days is ",total_working_days,"Total hours ",total_empHrs,"total emp wage ",emp_wage)