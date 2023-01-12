// 
let text = `Таким образом постоянный количественный рост и сфера нашей активности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Таким образом дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Товарищи! постоянный количественный рост и сфера нашей активности позволяет оценить значение новых предложений. С другой стороны новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.
Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании модели развития. Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание форм развития. Таким образом дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке соответствующий условий активизации. Задача организации, в особенности же сложившаяся структура организации в значительной степени обуславливает создание модели развития.
Задача организации, в особенности же начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же реализация намеченных плановых заданий способствует подготовки и реализации существенных финансовых и административных условий. `

// 
const inputElement = document.querySelector("#input")
const textExampleElement = document.querySelector("#textExample")

// 
let letterId = 1

// Создаём Функцию для каждой чтоб получить массив каждого элемента
let getLine = (text)=>{
    // Обший массив для строк 
    let lines = []
    // Массив для каждой строк
    let line = []
    //id для объекта
    let idCounter = 0
    // Цикл для обхода элементов
    for (const linner of text) {
        // Увеличиваем id/даем уникальное номер
        idCounter++
        // Добавляем пройденный Цикл в строку
        line.push({
            id: idCounter,
            label: linner,
            success: true
        })
        // Задаем условия для добавление в строк, если длина больше 72 элемента то не добавляем
        if(line.length >= 72 || linner === "\n"){
            lines.push(line)
            line = []
        }
    }
    // Если больше 0 тичественный рост и сфера нашей активо добавляем
    if(line.length > 0){
        lines.push(line)
        line = ''
    }
    // Возврашаем Обший массив строк 
    return lines
}

let lineToHTML = (line)=>{
    // <div class="line line-1">
    //     <span class="done"> На переднем плане, прямо перед</span> 
    //     <span class="hint">н</span>ами, расположен был дворик, где стоял
    // </div>
    //  Создаим элемент и добавляем класс ему
    let divElement = document.createElement("div")
    divElement.classList.add("line")
    //Создаём цикл для обхода каждого объекта ключа Object.key (letter.label) и и обрамляем в spanElemet 
    for (const letter of line) {
        let spanElemet = document.createElement("span")
        spanElemet.textContent = letter.label
        divElement.append(spanElemet)

        if(letterId > letter.id){
            // console.log(letter.id, letter.label)
            spanElemet.classList.add("done")
        }
    }
    return divElement
}

//

let getCurrentLineNumber = ()=>{
    for (let i = 0; i < getLines.length; i++) {
        for (const letter of getLines[i]) {
            if (letter.id == letterId) {
                
                return i
            }
        }
    }
}

// 
let updateHTML = () =>{
    const currentLineNumber = getCurrentLineNumber();
    textExampleElement.innerHTML = ''
    // for (const line of getLines) {
    //     const html = lineToHTML(line)
    //     textExampleElement.append(html)
    // }
    for (let i = 0; i < getLines.length; i++) {
        // const element = getLines[i];
        const html = lineToHTML(getLines[i])
        textExampleElement.append(html)

        if (i < currentLineNumber || i > currentLineNumber +2) {
            html.classList.add("hidden")
        }
    }
}

// 
const getLines = getLine(text)
lineToHTML(getLines[0])
updateHTML()