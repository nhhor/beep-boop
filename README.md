# Application: **Beep Boop Loop**

##### By Noah Horwitz

###### _First published 2019-11-01_

## Description:
This project was made as part of a code review for Noah Horwitz, a student at _[Epicodus](http://www.epicodus.com)_, a vocational school for technology careers, based in Portland, OR. The project is designed to take a number inputed via a form and use JavaScript arrays and looping to return a range from 0 to the number with a few exceptions.

The fully deployed project is hosted on GH-Pages [HERE](https://nhhor.github.io/beep-boop).

## Setup/Installation instructions:
* Click the `Clone or download` button and copy the link.
* Open your terminal application (assuming GIT Scripts have been installed on your system) and type `git clone (link)`.
* Double click on newly created "portfolio" folder.
* Double click on "index.html" to open the file in the web browser of your choosing.

## Technologies Used
> `HTML`
> `CSS`
> `Bootstrap`
> `JavaScript`
> `jQuery`

## Known Bugs
None

## Specifications

|Spec|Input|Output|
|-|-|-|
|A form takes a number from a user and returns a range of numbers from 0 to the user inputted number|5|`0`, `1`, `2`, `3`, `4`, `5`|
|(Exception 1) Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"|1|`0`, `Beep!`|
|(Exception 2) Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"|2|`0`, `Beep!`, `Boop!`|
|(Exception 3) Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."|4|`0`, `Beep!`, `Boop!`, `I'm sorry, Dave. I'm afraid I can't do that.`, `4`|
|(Rule for exceptions) The exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third.|13|`...`, `I'm sorry, Dave. I'm afraid I can't do that.`|
|A user should be able to enter a new number and see new results over and over again.|4 ... 4|`0`, `Beep!`, `Boop!`, `I'm sorry, Dave. I'm afraid I can't do that.`, `4` (not repeated twice on the DOM)|


## Support and contact details
Contact [example@sample.com](mailto:example@sample.com)

## License
_This This repository is copyright (C) 2019 by Noah Horwitz and licensed under the GNU General Public License v3.0 [gpl-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)_.
