function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
  }
  
  Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
  };
  
  Student.prototype.addMarks = function(...marks) {
	if (Array.isArray(this.marks)) {
	  this.marks.push(...marks);
	}
  };
  
  Student.prototype.getAverage = function() {
	if (!Array.isArray(this.marks) || this.marks.length === 0) {
	  return 0;
	}
	return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
  };
  
  Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
  };
  