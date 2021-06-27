import {Quotes} from "./quotes.js";

export class Messages {
    static messages = {
        "2 Month": "<p>Dear Sarah,\n" +
            "    <br>Happy 2-month anniversary, although it feels like almost a year in terms of memories with you. From our first date at The Yard, our actual first date\n" +
            "    having sushi, I have enjoyed constant happiness and memorable moments with you. Our trip to the lake house is unforgettable, driving around on Jet Ski’s\n" +
            "    while breaking our backs and obviously staying up watching Survivor. When I wake up, I smile thinking of you and our future. When I go to sleep, I feel\n" +
            "    heart warmed by all our memories. All I want to do is keep making more memories with you. I cannot wait to visit you soon! I miss you a lot!\n" +
            "    <br>Love,\n" +
            "    <br>Joshua\n" +
            "    <br>\n" +
            "    <br>Below is a gallery of our memories with more to add every day\n" +
            "</p>",
        "3 Month": new Date() >= new Date("Jul 4, 2021 00:00:00") ? "<p>Dear Sarah,\n" +
            "    <br>Happy 3-month anniversary! I can't believe how fast this summer has gone by. I am so excited to see you in a few days!\n " +
            "    We are going to make so many fun memories in California from Disneyland to celebrating your Birthday.\n" +
            "    To countdown these final few days, I thought I would give you a quote of the day that will give you a smile before I can\n" +
            "    be there to make you smile myself." +
            " <br/>Love,\n" +
            " <br/>Joshua\n" +
            " <br/><br/>" +
            Quotes.getHTML() +
            " <br/>\n" +
            " <br/>Below is a gallery of our memories with more to add every day\n" +
            "</p>" : "<p>Coming soon... :P<br/><br/>Below is a gallery of our memories with more to add every day\n</p>"
    }

    static changeMessage() {
        const monthSelect = document.getElementsByClassName("select-selected");
        console.log(monthSelect[0])
        document.getElementById("message").innerHTML = Messages.messages[monthSelect[0].textContent];
    }


    static setup() {
        const monthSelect = document.getElementsByClassName("month-select");
        for (let i = 0; i < monthSelect.length; i++) {
            const selector = monthSelect[i].getElementsByTagName("select")[0];
            const item = document.createElement("DIV");
            item.setAttribute("class", "select-selected");
            item.innerHTML = selector.options[selector.selectedIndex].innerHTML;
            monthSelect[i].appendChild(item);
            const options = document.createElement("DIV");
            options.setAttribute("class", "select-items select-hide");
            for (let j = 1; j < selector.length; j++) {
                const optionItem = document.createElement("DIV");
                optionItem.innerHTML = selector.options[j].innerHTML;
                optionItem.addEventListener("click", function (e) {
                    const selected = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    const prev = this.parentNode.previousSibling;
                    for (let i = 0; i < selected.length; i++) {
                        if (selected.options[i].innerHTML === this.innerHTML) {
                            selected.selectedIndex = i;
                            prev.innerHTML = this.innerHTML;
                            const same = this.parentNode.getElementsByClassName("same-as-selected");
                            for (let k = 0; k < same.length; k++) {
                                same[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    prev.click();
                    Messages.changeMessage();
                });
                options.appendChild(optionItem);
            }
            monthSelect[i].appendChild(options);
            item.addEventListener("click", function (e) {
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }


        function closeAllSelect(elmnt) {
            const arr = [];
            const selectItem = document.getElementsByClassName("select-items");
            const selected = document.getElementsByClassName("select-selected");
            for (let i = 0; i < selected.length; i++) {
                if (elmnt === selected[i]) {
                    arr.push(i)
                } else {
                    selected[i].classList.remove("select-arrow-active");
                }
            }
            for (let i = 0; i < selectItem.length; i++) {
                if (arr.indexOf(i)) {
                    selectItem[i].classList.add("select-hide");
                }
            }
        }

        document.addEventListener("click", closeAllSelect);
    }

    static getHTML() {
        return "<div id='message-selector'>" +
            "<div class=\"month-select\" style=\"width:200px;\">\n" +
            "  <select onchange='changeMessage()'>\n" +
            "    <option value=\"0\">Select Month:</option>\n" +
            "    <option value=\"1\">2 Month</option>\n" +
            "    <option value=\"2\">3 Month</option>\n" +
            "  </select>\n" +
            "</div>" +
            "</div>" +
            "<div id=\"message\">\n" +
            "</div>\n";
    }
}