### Control your tokens borders. 

Player side configuration of the tokens borders, color and scale. Target HUD color and size can be altered, target HUD can also be rendered inside the token border.

![BorderTarget](./images/Border_Control_Screeshot.PNG?raw=true) 

Can prevent borders from showing on player clients for non-owned tokens; no longer hide your mimics behind tiles! 

Increased accessability for those with visibility impairments

External border offset changeable. 

Color gradient reads actor HP and returns a color between the two provided colors. (Currently dnd5e only, I can provide more options if requested)

Temp HP gradient moves up from the "full hp" color towards a defined color, maxing out at 1/2 hpMax.

This also fixes the current disposition bug: https://gitlab.com/foundrynet/foundryvtt/-/issues/4352

Nameplates are now customizable, change the size, vertical offset and font. You can also make then circular, to fit with POG style tokens

Available fonts are: Arial, Arial Black, Comic Sans MS, Courier New, Georgia, Helvetica, Impact, Tahoma, Times New Roman and Verdana.


A border may be toggled off by using the Token HUD element here

![BorderHUD](./images/Border_Control_HUD.PNG?raw=true)

You can customize your target border icon, note make sure to disable this feature if you use Smart target for avoid collision on the libwrapper library.

![BorderTarget](./images/Border%20Control.png?raw=true)
