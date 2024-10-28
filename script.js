function filterStudents() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const students = document.querySelectorAll('.student');

    students.forEach(student => {
        const name = student.getAttribute('data-name').toLowerCase();
        student.style.display = name.includes(searchValue) ? 'block' : 'none';
    });
}
