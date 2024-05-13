

var score = 0;
var total = 50;
// correct options
var answers = ['b','a','d','b','d','b','d','b','c','a',
                'c','b','d','a','b','d','c','a','a','a',
                'd','d','d','c','c','c','b','b','b','a',
                'a','a','d','d','d','c','d','b','a','b',
                'c','c','a','d','b','c','a','d','c','b'];

function Result(){
    // var q1a = document.forms['quizForm']['q1'].value;
    // var q1b = document.getElementById('q1a').ariaValueMax;

    var form = document.forms['quizForm'];

    var q1 = form.elements['q1'].value;
    var q2 = form.elements['q2'].value;
    var q3 = form.elements['q3'].value;
    var q4 = form.elements['q4'].value;
    var q5 = form.elements['q5'].value;
    var q6 = form.elements['q6'].value;
    var q7 = form.elements['q7'].value;
    var q8 = form.elements['q8'].value;
    var q9 = form.elements['q9'].value;
    var q10 = form.elements['q10'].value;
    var q11 = form.elements['q11'].value;
    var q12 = form.elements['q12'].value;
    var q13 = form.elements['q13'].value;
    var q14 = form.elements['q14'].value;
    var q15 = form.elements['q15'].value;
    var q16 = form.elements['q16'].value;
    var q17 = form.elements['q17'].value;
    var q18 = form.elements['q18'].value;
    var q19 = form.elements['q19'].value;
    var q20 = form.elements['q20'].value;
    var q21 = form.elements['q21'].value;
    var q22 = form.elements['q22'].value;
    var q23 = form.elements['q23'].value;
    var q24 = form.elements['q24'].value;
    var q25 = form.elements['q25'].value;
    var q26 = form.elements['q26'].value;
    var q27 = form.elements['q27'].value;
    var q28 = form.elements['q28'].value;
    var q29 = form.elements['q29'].value;
    var q30 = form.elements['q30'].value;
    var q31 = form.elements['q31'].value;
    var q32 = form.elements['q32'].value;
    var q33 = form.elements['q33'].value;
    var q34 = form.elements['q34'].value;
    var q35 = form.elements['q35'].value;
    var q36 = form.elements['q36'].value;
    var q37 = form.elements['q37'].value;
    var q38 = form.elements['q38'].value;
    var q39 = form.elements['q39'].value;
    var q40 = form.elements['q40'].value;
    var q41 = form.elements['q41'].value;
    var q42 = form.elements['q42'].value;
    var q43 = form.elements['q43'].value;
    var q44 = form.elements['q44'].value;
    var q45 = form.elements['q45'].value;
    var q46 = form.elements['q46'].value;
    var q47 = form.elements['q47'].value;
    var q48 = form.elements['q48'].value;
    var q49 = form.elements['q49'].value;
    var q50 = form.elements['q50'].value;


    // if(q1 == null || q1 == ''){
    //     alert('please answer question 1');
    //     return false;
    // }

    for(i = 1; i <= total; i++){
        if(eval('q'+i)==null || eval('q'+i) ==''){
            alert('please answer question '+i);
            return false;
        }
    }

    // if(q1 == answers[0]){
    //     score++;
    // }
    for(i = 1; i <= total; i++){
        if(eval('q'+i)==answers[i-1]){
            score++;
        }
    }

    var result = document.getElementById('result');
    result.innerHTML = 'You scored '+score+' out of '+total;
    alert('you scored '+score+' out of '+total);
    // score = 0;
    return false;
}