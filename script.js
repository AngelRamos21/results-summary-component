'user strict';

import states  from './data.json' assert{type:'json'};

const contentStates=document.getElementsByClassName('summary-content-states')[0];
for(const state of states){
    contentStates.insertAdjacentHTML('beforeend',
`
        <div class="state ${state.class}">
            <div class="state-info">
                <img src="${state.icon}" alt="">                
                <span>${state.category}</span> 
            </div>
            <div class="state-score">
                <span>${state.score}</span>
                / 100
            </div> 
        </div>
`
 
    )
    let stateHTML= document.getElementsByClassName('state')[0];
    console.log(stateHTML);
}
