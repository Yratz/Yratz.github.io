function starsAnim()
{
    let starBox = document.querySelector(".stars");
    let stars = document.querySelectorAll(".star polygon");
    let verdicts = document.querySelectorAll(".verdict h1");

    for (let i=0;i<5;i++)
    {
        stars[i].addEventListener("click",function(e){
            let stgTwoB = document.getElementsByClassName("send-rating")[0];
            if (!(starBox.classList.contains("fixed")))
            {
                verdicts[i].style.display= "block";
                document.getElementById("otziv").style.display= "block";
                document.getElementsByClassName("send-rating")[0].style.display = "block";
                starBox.classList.add("fixed");
            }
            stgTwoB.addEventListener("click", function(e){
                starBox.style.display="none";
                verdicts[i].style.display= "none";
                document.getElementById("otziv").style.display= "none";
                document.getElementById("otziv").value="";
                document.getElementsByClassName("send-rating")[0].style.display = "none";
                document.getElementsByClassName("stage-2")[0].style.display="block";
                let returnToStart = document.querySelector(".stage-2 a");
                returnToStart.addEventListener("click", function(e){
                    starBox.style.display="block";
                    starBox.classList.remove("fixed");
                    document.getElementsByClassName("stage-2")[0].style.display="none";
                });
            });
        });
        stars[i].addEventListener('mouseover', function painting(e) {
            if (! starBox.classList.contains("fixed")) {


                for (let j=0;j<i+1;j++)
                {
                    stars[j].style.fill = "#eb6f4a";

                }

                for (let j=i+1;j<5;j++)
                {
                    stars[j].style.fill="black";
                }


            }


        });
    }
}


function starsLeave()
{
    let starBox = document.querySelector(".stars");
    let stars = document.querySelectorAll(".star polygon");
    if(starBox.classList.contains("fixed"))
    {
        return;
    }
    else
    {
        if(stars[1].style.fill=="black")
        {
            stars[0].style.fill="black";
        }
    }
}

function openModal()
{
    document.querySelector(".overlay").style.display="block";
    document.querySelector(".modal").style.display="block";
}


function closeModal()
{
    document.querySelector(".overlay").style.display="none";
    document.querySelector(".modal").style.display="none";
}