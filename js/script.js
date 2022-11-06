let ham_burger = document.getElementsByClassName("ham-burger")[0];
ham_burger.addEventListener("click", ()=>{
    let ham_nav = document.getElementsByClassName("ham-burger-nav")[0];
    if (ham_nav.style.display == 'block'){
        ham_nav.style.display = "none";
    }
    else {
        ham_nav.style.display = "block";
    }
});

// .ham-search-area{
//     background-color: #fff;
//     display: flex;
//     border-radius: 10px;
//     width: 35rem;
//     border: 2px solid #000;
//     height: 2.5rem;
//     align-items: center;
//     justify-content: space-between;
//     margin: 0 auto 10px auto;
// }

// .ham-search-btn{
//     background-color: transparent;
//     border: none;
//     outline: none;
//     display: flex;
//     align-items: center;
//     margin-right: 10px;
//     cursor: pointer;
// }

// .ham-search-btn img{
//     width: 1.5em;
