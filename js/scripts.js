// this group of variables/functions displays the corresponding column on mobile displays when selected in the "Select Team To Display" dropdown 
let columns = document.getElementsByClassName('column');
let selectDisplayTeam = document.getElementsByTagName('select');
selectDisplayTeam = selectDisplayTeam[2];
selectDisplayTeam.addEventListener('change', displayTeam);

function hideUnhide(number) {
    for (let i = 0; i < 11; i++) {
        columns[i].setAttribute('class', 'column hiddenColumn');
    };
    columns[number].setAttribute('class', 'column');
};

function displayTeam() {
    switch (selectDisplayTeam.value) {
        case 'team-1':
            hideUnhide(1);
            break;
        case 'team-2':
            hideUnhide(2);
            break;
        case 'team-3':
            hideUnhide(3);
            break;
        case 'team-4':
            hideUnhide(4);
            break;
        case 'team-5':
            hideUnhide(5);
            break;
        case 'team-6':
            hideUnhide(6);
            break;
        case 'team-7':
            hideUnhide(7);
            break;
        case 'team-8':
            hideUnhide(8);
            break;
        case 'team-9':
            hideUnhide(9);
            break;
        case 'team-10':
            hideUnhide(10);
            break;
    };
};
// this ends the function group for displaying a single column in mobile layouts