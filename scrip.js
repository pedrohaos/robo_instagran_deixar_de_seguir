//_acan classe que todos os botoes tem
//_acas classe que o botão seguir tem
//_acat classe que o botão seguindo tem
//_a9-_ classe do botão deixar de seguir

let contador = 0;
document.querySelectorAll('._acat').forEach((item, index)=>{
    setTimeout(()=>{
        if(item.innerText == 'Solicitado' || 'Seguindo'){
            item.click();
            document.querySelectorAll('._a9-_').forEach((btn)=>{
                if(btn.innerText == 'Deixar de seguir'){
                    btn.click();
                }
            })
        }
    }, index * 1000)
})