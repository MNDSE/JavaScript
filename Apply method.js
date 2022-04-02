

let classRoom = {
    study: function (course){
        console.log(this.name," is teaching");
    
    for( let i in course){
        console.log(course[i]);
    }
    }
}

let teacher = {
    name : "Marthins"
}

let course = ["Math", "jAVA", "HTML"];

classRoom.study.apply(teacher, [course]);