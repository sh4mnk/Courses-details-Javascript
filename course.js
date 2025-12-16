


//  we used in this progrmme methods are map,filter,reduce,find,some,foreach these method it is useful to study all these methods .
// so this project helps to understand the javascript array methods
// Let's build your course catalog application!


// Sample Course Data You can add more courses to this array

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
    courseContainer.innerHTML = "";
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

// find the top rated course from the sampleCourses array

function findTopratedCourse(sampleCourses) {
    const top = sampleCourses.reduce((highest, course) => {
        return highest.rating > course.rating ? highest : course;
    });
    return top;
}

function displaytopRatedCourse(arr) {
    
    const rated = findTopratedCourse(arr);
            const courseUi = `<div class="course-card" id="courses-names">
                <h1>${formatLetter(rated.name)}</h1>
                <p>Price : ${formatLetter(rated.price)}</p>
                <p>Rating : ${Math.round(rated.rating * 10) / 10}</p>
                <p>Available Languages : ${rated.languages}</p>
                <p>Instructor : ${formatLetter(rated.instructor.mentor)}</p>
                <p>Contact : ${rated.instructor.contactno}</p>   
            </div>`;
    
    const topRated = document.getElementById('top-rated-courses');
    topRated.innerHTML = courseUi;

}

function displayCourseCount(){
    const count = document.getElementById('course-count');
    count.innerText = `Total Courses: ${sampleCourses.length}`;
}

function getSearchvalue(sampleCourses,searchValue) {
    const result = sampleCourses.filter((course) => {
        return course.name.includes(searchValue.toLowerCase());
    });
    displayCourses(result);
}



// function to input course data from the search bar
function inputCourseData() {

    const searchInput = document.querySelector('#search-bar');
    searchInput.addEventListener("input", (event) => {
       getSearchvalue(sampleCourses, event.target.value); 
    });
};

function initPage() {
    displayCourseCount();
    displayCourses(sampleCourses);
    displaytopRatedCourse(sampleCourses);
    inputCourseData(sampleCourses);
}

initPage();


// final out put 