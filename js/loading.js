// 10000 = 10 seconds
// 1000 = 1 second
// 100 = 0.10 seconds

document.addEventListener("DOMContentLoaded", (event) => {
  // Don't touch. It makes the code wait x Seconds before continuing
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let progressBar = document.getElementById("loadingbar");
  let line = document.getElementById("line");
  let text1 = document.getElementById("t1");
  let text2 = document.getElementById("t2");
  let circle = document.getElementById("circle");
  let loading = document.getElementById("loading");
  let value = 0;

  // Making the bar at start move
  function increaseValue() {
    progressBar.value = value;
    value++;

    if (value <= 100) {
      setTimeout(increaseValue, 5);
    }

    if (value === 100) {
      try {
        sleep(500).then(() => {
          //Bar moving
          progressBar.style.height = "110%";
          progressBar.style.transition = "height 0.5s ease";
          line.classList.remove("hidden");

          sleep(400).then(() => {
            //Line between texts
            line.style.width = "250px";
            line.style.transition = "width 0.5s ease";

            sleep(600).then(() => {
              //Text animation (Server Name)
              text1.classList.remove("hidden");
              text1.style.transition = "margin-top 0.3s ease";
              text1.style.marginTop = "-10px";

              sleep(200).then(() => {
                //Text animation (Server Name)
                text1.style.opacity = "100";
                text1.style.marginTop = "-35px";

                sleep(400).then(() => {
                  text1.style.marginTop = "-26px";
                });
              });

              sleep(700).then(() => {
                //Text showing (Roleplay)
                text2.classList.remove("hidden");
                text2.style.transition = "margin-top 0.7s ease";
                text2.style.marginTop = "-20px";

                sleep(200).then(() => {
                  //Text animation (Roleplay)
                  text2.style.opacity = "100";
                  text2.style.marginTop = "35px";

                  sleep(400).then(() => {
                    text2.style.marginTop = "20px";
                  });

                  sleep(2000).then(() => {
                    //Hiding the server name and roleplat text
                    text1.style.opacity = "0";
                    text2.style.opacity = "0";
                    line.style.width = "0";
                    line.style.transition = "width 0.3s ease";

                    // Creating circle, showing image and details.
                    sleep(50).then(() => {
                      sleep(100).then(() => {
                        document.body.style.backgroundColor = "black";
                        document.body.transition = "0.5 ease";

                        sleep(1).then(() => {
                          document.body.style.webkitClipPath =
                            "circle(0% at 50% 50%)";
                          document.body.style.clipPath =
                            "circle(0% at 50% 50%)";

                          sleep(400).then(() => {
                            circle.classList.remove("hidden");
                          });
                        });

                        // Making the background image.
                        sleep(400).then(() => {
                          progressBar.style.display = "none";
                          loading.style.height = "1080px";
                          loading.style.width = "1920px";
                          loading.style.backgroundImage =
                            "url('./img/23da83-Pic3.webp')";
                          loading.style.backgroundSize = "cover";
                          loading.style.backgroundPosition = "center";
                        });

                        sleep(300).then(() => {
                          document.body.style.webkitAnimation =
                            "grow 0.8s linear forwards";
                          document.body.style.animation =
                            "grow 0.8s linear forwards";
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (error) {
        console.log(error); // Throwing away unnecessary/useless errors to prevent spam.
      }
    }
  }

  window.addEventListener("load", () => {
    setTimeout(increaseValue, 1000);
  });
});
