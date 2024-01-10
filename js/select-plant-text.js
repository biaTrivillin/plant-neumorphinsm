const selectorList = document.querySelectorAll('.selector');

const textList = document.querySelectorAll('.text__information');

let selectorArray = Array.from(selectorList);

let textArray = Array.from(textList);

for (let i = 0; i < selectorList.length; i++) {

    const selector = selectorList[i];

    const text = document.querySelector(`.text__${selector.classList[1]}`);

    function changeText() {

        text.style.display = 'block';

        text.animate(
            [
                { opacity: 1 },
            ],
    
            {
                duration: 2000,
                iterations: 1,
                fill: 'forwards',
                easing: 'ease-in-out'
            },
        )

        textArray.splice(i,1);

        textArray.forEach((element) => {

            element.animate(
                [
                    { opacity: 0 },
                ],
        
                {
                    duration: 2000,
                    iterations: 1,
                    fill: 'forwards',
                    easing: 'ease-in-out'
                },
            )

            element.style.display = 'none';
        })

        textArray = Array.from(textList);
    }

    selector.addEventListener('click', changeText);

}