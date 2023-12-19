class Student {
	constructor(lastName, firstName, math, history, JS, avg) {
	  this.lastName = lastName;
	  this.firstName = firstName;
	  this.math = math;
	  this.history = history;
	  this.JS = JS;
	  this.avg = avg;
	}
 }
 
 class StudentList {
	constructor(students) {
	  this.students = students;
	}
 
	generateTable() {
	  let table = '<table border="1"><thead><tr><th>Last Name</th><th>First Name</th><th>Math</th><th>History</th><th>JS</th><th>Avg</th></tr></thead>';
	  for (let student of this.students) {
		 table += `<tbody><tr><td>${student.lastName}</td><td>${student.firstName}</td><td>${student.math}</td><td>${student.history}</td><td>${student.JS}</td><td>${student.avg}</td></tr></tbody>`;
	  }
	  table += '</table>';
	  table += `<br><span class="green-text">Загальний середній бал по групі: ${this.calculateTotalAvg()}</span><br>`;
	  return table;
	}
 
	calculateTotalAvg() {
	  let totalAvg = this.students.reduce((acc, student) => acc + Number(student.avg), 0);
	  return (totalAvg / this.students.length).toFixed(2);
	}
 }
 
 class StyledStudentTable extends StudentList {
	getStyles() {
	  return 'table { border-collapse: collapse; width: 50%; } th, td { border: 1px solid black; padding: 8px; text-align: left; }';
	}
 
	generateStyledTable() {
	  const parentTable = super.generateTable();
	  const styles = this.getStyles();
	  return `<style>${styles}</style>${parentTable}`;
	}
 
	calculateAverageForStudents() {
	  for (let student of this.students) {
		 student.avg = ((student.math + student.history + student.JS) / 3).toFixed(2);
	  }
	}
 }
 
 const studentsData = [
	new Student('Артур', 'Лиховида', 2, 3, 3),
	new Student('Вадим', 'Бандура', 3, 5, 4),
	new Student('Олексій', 'Олав', 5, 2, 4),
	new Student('Олексій', 'Олав', 5, 5, 5),
	new Student('Олексій', 'Олав', 5, 3, 3),
	new Student('Олексій', 'Олав', 5, 1, 1),
	new Student('Олексій', 'Олав', 5, 5, 5),
 ];
 
 const styledStudentTable = new StyledStudentTable(studentsData);
 styledStudentTable.calculateAverageForStudents();
 document.getElementById('styledTable').innerHTML = styledStudentTable.generateStyledTable();
 