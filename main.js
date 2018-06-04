const canvas = require('canvas-api-wrapper');

module.exports = (course, stepCallback) => {

    (async () => {
        var canvasCourse = canvas.getCourse(course.info.canvasOU);
        await canvasCourse.quizzes.get();

        var quizzes = course.content.filter(file => file.name.includes('quiz_d2l_'));

        canvasCourse.quizzes.forEach(quiz => {
            let quizFile = quizzes.find(quizFile => quizFile.dom('assessment').get(0).attribs.title === quiz.title);

            if (quizFile) {
                if (quiz.question_count !== quizFile.dom('item').get().length + quizFile.dom('itemref').get().length) {
                    course.log('Different Question Count', {
                        'Quiz': quiz.title,
                        'Canvas Question Count': quiz.question_count,
                        'D2L Question Count': quizFile.dom('item').get().length + quizFile.dom('itemref').get().length
                    });
                }
            }
        });
        stepCallback(null, course);
    })()
};