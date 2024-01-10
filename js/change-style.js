const selectList = document.querySelectorAll('.selector');

const borderList = document.querySelectorAll('.border');

let selectorArray = Array.from(selectList);

let borderArray = Array.from(borderList);


for (let i = 0; i < selectList.length; i++) {

    const selector = selectList[i];

    const border = borderList[i];

    function changeStyle() {

        selector.style.boxShadow = 'inset 10px 10px 15px #cdc9c9, inset -10px -10px 15px #ffffff';
        selector.style.cursor = 'default';
        border.style.opacity = 1;
        selector.animate(
            [
                { transform: 'scale(0.95)'},
            ],
    
            {
                duration: 50,
                iterations: 1,
                fill: 'forwards',
                easing: 'ease-in-out'
            },
        )

        selectorArray.splice(i,1);

        selectorArray.forEach((element) => {
            element.style.boxShadow = '10px 10px 15px #cdc9c9, -10px -10px 15px #ffffff';
            element.style.cursor = 'pointer';
            element.animate(
                [
                    { transform: 'scale(1)'},
                ],
        
                {
                    duration: 50,
                    iterations: 1,
                    fill: 'forwards',
                    easing: 'ease-in-out'
                },
            )

        })

        borderArray.splice(i,1);

        borderArray.forEach((element) => {
            element.style.opacity = 0;
        })

        selectorArray = Array.from(selectList);
        borderArray = Array.from(borderList);

    }
    
    selector.addEventListener('click', changeStyle);
}
