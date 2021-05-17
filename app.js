let count = document.querySelectorAll('.count h3')



count.forEach((e) => {

    let dataTatgetLength = e.getAttribute('data-count')
    let index = 0;
    setInterval(() => {
        if (index < dataTatgetLength) {
            index++
            e.innerHTML = index + "%"
        }
    }, 50)




})