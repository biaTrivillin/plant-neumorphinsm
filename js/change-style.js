const selectorList = document.querySelectorAll('.selector');

const borderList = document.querySelectorAll('.border');

let selectorArray = Array.from(selectorList);

let borderArray = Array.from(borderList);


for (let i = 0; i < selectorList.length; i++) {

    const selector = selectorList[i];

    const border = borderList[i];

    function changeStyle() {

        selector.style.boxShadow = 'inset 10px 10px 15px #cdc9c9, inset -10px -10px 15px #ffffff';
        selector.classList.remove('hover')
        selector.style.cursor = 'default'
        border.style.opacity = 1

        selectorArray.splice(i,1)

        selectorArray.forEach((element) => {
            element.style.boxShadow = '10px 10px 15px #cdc9c9, -10px -10px 15px #ffffff';
            element.classList.add('hover')
            element.style.cursor = 'pointer'

            console.log(selectorArray)
        })

        borderArray.splice(i,1)

        borderArray.forEach((element) => {
            element.style.opacity = 0;
        })

        selectorArray = Array.from(selectorList)
        borderArray = Array.from(borderList)

    }
    
    selector.addEventListener('click', changeStyle)
}