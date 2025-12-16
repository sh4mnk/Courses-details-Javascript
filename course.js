


//  we used in this progrmme methods are map,filteter,reduce,find,some,foreach these method it is useful to study all these methods .
// so this project helps to understand the javascript array methods
// Let's build your course catalog application!

// Sample Course Data [You can add more courses to this array

const sampleCourses = [
    {


        name: "javaScript",
        price: "$150",
        rating: 4.50,
        languages: ["English", "Malayalam"],
        instructor: {
            mentor: "shameem",
            contactno: "1234567890"

        }

    },
    {


        name: "NodeJS",
        price: "$100",
        rating: 5.59,
        languages: ["English", "Malayalam"],
        instructor: {
            mentor: "shinujtih",
            contactno: "1234567890"

        }

    },
    {


        name: "ReactJS",
        price: "$120",
        rating: 5.00,
        languages: ["English", "Malayalam"],
        instructor: {
            mentor: "Anu",
            contactno: "1234567890"

        }

    },
    {


        name: "AngularJS",
        price: "$150",
        rating: 6.40,
        languages: ["English", "Malayalam"],
        instructor: {
            mentor: "Shibin",
            contactno: "1234567890"

        }

    },
    {


        name: "Cyber Security",
        price: "$200",
        rating: 7.5,
        languages: ["English", "Malayalam"],
        instructor: {
            mentor: "Rishad",
            contactno: "1234567890"

        }

    }

];



const formatLetter = (name) => name.charAt(0).toUpperCase() + name.slice(1);

function displayCourses(sampleCourses) {

    const courseContainer = document.getElementById('course-container');
    sampleCourses.forEach((sampleCourse) => {

        const courseUi = `<div class="course-card" id="courses-names">
                <h1>${formatLetter(sampleCourse.name)}</h1>
                <p>Price : ${formatLetter(sampleCourse.price)}</p>
                <p>Rating : ${Math.round(sampleCourse.rating * 10) / 10}</p>
                <p>Available Languages : ${sampleCourse.languages}</p>
                <p>Instructor : ${formatLetter(sampleCourse.instructor.mentor)}</p>
                <p>Contact : ${sampleCourse.instructor.contactno}</p>   
            </div>`;

        courseContainer.innerHTML += courseUi;
    });
};



displayCourses(sampleCourses);

// find the top rated course from the sampleCourses array

function findTopratedCourse(sampleCourses){
    const top = sampleCourses.reduce((highest, course) => {
        return highest.rating > course.rating ? highest : course;
    });
    return top;
}



function topRatedCOurse(){

    const rated= "Cyber Security";
    
    const topRated = document.getElementById('top-rated-courses');
    topRated.innerHTML= rated;


}

document.getElementById('course-count').innerText = `Total Courses: ${sampleCourses.length}`;

topRatedCOurse();
findTopratedCourse(sampleCourses);

