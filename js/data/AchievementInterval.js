/*   **************   *
*                     *
*     Achivements     *
*                     *
* ***************** */

const UpdateAchievements = () => {
   if (game.layers[0].startData.resource.gte(50)) {
     document.getElementById("achievement1").innerHTML = AchievementElement("You Played!", "unlocked")
   } else {
     document.getElementById("achievement1").innerHTML = AchievementElement("You Played!", "locked")
   }
}

setInterval(UpdateAchievements, 100)
