const selectorList = document.querySelectorAll('.selector');

const informationList = document.querySelectorAll('.information__container');

const careLevelList = document.querySelectorAll('.care__level');

const careInformationList = document.querySelectorAll('.care__information');

let selectorArray = Array.from(selectorList);

let informationArray = Array.from(informationList);

let careArray = Array.from(careLevelList);

let careInformArray = Array.from(careInformationList);

for (let i = 0; i < selectorList.length; i++) {

    const selector = selectorList[i];

    const information = document.querySelector(`.information__${selector.classList[1]}`);

    const careLevel = document.querySelector(`.care__level__${selector.classList[1]}`);

    const careInformation = document.querySelector(`.care__information__${selector.classList[1]}`);

    function changeInformation() {

        information.style.display = 'flex';

        informationArray.splice(i,1);

        informationArray.forEach((element) => {
            element.style.display = 'none';
        })

        informationArray = Array.from(informationList);

    }

    function changeCare() {
        careLevel.animate(
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

        careArray.splice(i,1);

        careArray.forEach((element) => {

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

        })

        careArray = Array.from(careLevelList);

    }

    function informationAnimation() {


        careInformation.animate(
            [   
                { transform: 'translateX(-30px)' },
                { opacity: 1 },
            ],
        
            {   
                delay: 300,
                duration: 1000,
                iterations: 1,
                fill: 'forwards',
                easing: 'ease-in-out'
            },
        )

        

        careInformArray.splice(i,1);

        careInformArray.forEach((element) => {

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

        })

        careInformArray = Array.from(careInformationList);

    }

    function selectInformation() {
        changeInformation()
        changeCare()
        informationAnimation()
    }

    selector.addEventListener('click', selectInformation);

}

