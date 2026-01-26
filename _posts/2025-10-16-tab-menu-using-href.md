---
layout: post
title: "Tab menu using href"
date: 2022-12-05
categories: [general]
tags: [Javascript/Jquery]
---


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tab menu</title>
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/script.js"defer></script>
</head>
<body>
    <div id="wrap">
        <ul class="tab-menu">
            <li><a href="#tabs-1" class="active">menu1</a></li>
            <li><a href="#tabs-2">menu2</a></li>
            <li><a href="#tabs-3">menu3</a></li>
        </ul>
        <div id="tabContent">
            <div id="tabs-1">
                <h2>Menu1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ea doloribus corrupti harum nobis maxime provident? Voluptatibus corrupti est, dicta voluptate repudiandae molestiae, quae ab fugiat commodi animi voluptas voluptatem!</p>
            </div>
            <div id="tabs-2">
                <h2>Menu2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ducimus? Ipsa sit sed eos atque. Provident ipsa ut, in quia voluptatem consequatur inventore odit a repellendus! Qui provident sapiente dolor.</p>
            </div>
            <div id="tabs-3">
                <h2>Menu3</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum repellat, cum nisi natus temporibus deserunt quos? Praesentium cum incidunt molestias veritatis quasi ipsum, harum, dolor, laborum corrupti quae saepe eligendi.</p>
            </div>
        </div>
    </div>
</body>
</html>
```


```plain text
ul{list-style: none;}
a{color: #333; text-decoration: none;}

#wrap{width: 960px; margin: 50px auto;}
.tab-menu{display: flex; text-align: center;}
.tab-menu li{width: 100px;}
.tab-menu li a{display: block; width: 100%; padding: 20px 0; background: rgb(61, 141, 92); color: white;}
.tab-menu li a.active{background: rgb(45, 100, 66); color: rgb(255, 238, 0);}
#tabContent{background: rgb(170, 240, 176);}
#tabContent>div{display: none;}
#tabContent>div:first-child{display: block;}
#tabContent>div h2{}
```


```plain text
const targetLink=document.querySelectorAll('.tab-menu a');
const tabContent=document.querySelectorAll('#tabContent div');

// for(i=0; i<targetLink.length; i++){
//     targetLink[i].addEventListener('click',function(e){
//         let orgTarget=e.target.getAttribute('href');
//         // console.log(orgTarget)
//         let tabTarget=orgTarget.replace('#','')
//         // console.log(tabTarget)
//         for(j=0; j<targetLink.length; j++){
//             targetLink[j].classList.remove('active');
//             e.target.classList.add('active')
//         }
//         for(k=0; k<tabContent.length; k++){
//             tabContent[k].style.display='none'
//         }
//         document.getElementById(tabTarget).style.display='block'
//     });
// }

for(i=0; i<targetLink.length; i++){
    targetLink[i].addEventListener('click', (e) => {
        // let orgTarget = e.target.getAttribute('href')
        // let tabTarget = orgTarget.replace('#','')
        let tabTarget = e.target.getAttribute('href').replace('#','')
        // console.log(e.target.getAttribute('href').replace('#',''))
        for(j=0; j<targetLink.length; j++){
            targetLink[j].classList.remove('active');
            e.target.classList.add('active');
        }
        for(k=0; k<tabContent.length; k++){
            tabContent[k].style.display='none'
        }
        document.getElementById(tabTarget).style.display='block'
    })
}
```

