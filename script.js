// @ts-check
let finalGrade = function (exam, projects){
if (exam> 90 || projects > 10) {
  return 100;
} else if (exam > 75 && projects >= 5) {
  return 90;
} else if (exam > 50 && 2 <= projects) {
  return 75;
} else {
  return 0;
}

}
// BEGIN (write your solution here)

// END

export default finalGrade;
