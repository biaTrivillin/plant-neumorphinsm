const selectorList = document.querySelectorAll('.selector');

const imageBox = document.querySelector('.img__container');

for (let i = 0; i < selectorList.length; i++) {

    const selector = selectorList[i];

    let deg = i * 90;

    function rotate() {

        imageBox.animate(
            [
                { transform: `rotate(${deg}deg)`},
            ],
    
            {
                duration: 2000,
                iterations: 1,
                fill: 'forwards',
                easing: 'ease-in-out'
            },
        )
    }

    selector.addEventListener('click', rotate);

}