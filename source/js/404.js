var Console404 = {
    createNew: function() {
        var console404 = {};
        var blinkTiming = 0;
        var paragraphsId = "console-text-";
        var currentParagraphsIndex = 0;
        var currentSentensIndex = 0;
        var currentChIndex = 0;
        var sentence = new Array(
            "",
            "code 404.",
            "Hi,",
            "You are lost in my site.",
            "Please return to home page :)."
        );

        blinkCursor = function() {
            var blinkNode = document.getElementById("blink-block");
    
            if (blinkNode == null)
                return;
    
            if (blinkTiming++ > 5) 
                blinkNode.innerHTML = "_";
            else 
                blinkNode.innerHTML = "";
            
            if(blinkTiming >= 10) 
                blinkTiming = 0;
        }

        deleteBlinkBlock = function() {
            var parentNode = document.getElementById(paragraphsId + currentParagraphsIndex);
            if (parentNode != null) {
                var blinkNode = document.getElementById("blink-block");
                if (blinkNode)
                    parentNode.removeChild(blinkNode);
            }
        }
        
        appendBlinkBlock = function(parentNode) {
            var blinkNode = document.createElement("span");
            blinkNode.id = "blink-block";
            parentNode.appendChild(blinkNode);
        }

        consoleCommunications = function() {
            if (currentSentensIndex >= sentence.length) {
                currentSentensIndex = sentence.length;
                return;
            }
        
            if (currentChIndex >= sentence[currentSentensIndex].length) {
                currentSentensIndex++;
                currentChIndex = 0;
                newParagraphs();
                return;
            }
            deleteBlinkBlock();
            var paragraphs = document.getElementById(paragraphsId + currentParagraphsIndex);
        
            var ch = sentence[currentSentensIndex].substring(currentChIndex, currentChIndex + 1);
            if (ch === ' ')
                ch = '\xa0';
        
            paragraphs.innerText = paragraphs.innerText + ch;//.toUpperCase();
            appendBlinkBlock(paragraphs);
        
            currentChIndex++;
        }

        runConsole = function() {
            setInterval(consoleCommunications, 100);
        }
    
        newParagraphs = function() {
            deleteBlinkBlock();
            var parentNode = document.getElementById(paragraphsId + currentParagraphsIndex);
            if (parentNode != null) 
                currentParagraphsIndex++;
            
            var consoleWindow = document.getElementById("console-window");
            var paragraphs = document.createElement("p");
            paragraphs.innerHTML = "# &nbsp";
            paragraphs.setAttribute("class", "console-text-class");
            paragraphs.id = paragraphsId + currentParagraphsIndex;
            appendBlinkBlock(paragraphs);
            consoleWindow.appendChild(paragraphs);
        }

        console404.show = function() {
            setInterval(blinkCursor, 150);
            setTimeout(runConsole, 2500);
            newParagraphs();
        }
        return console404;
    }
}

window.onload = function() {
    var console404 = Console404.createNew();
    console404.show();
};














