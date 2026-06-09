async function translateText() {

    const text =
        document.getElementById("inputText").value;

    const sourceLang =
        document.getElementById("sourceLang").value;

    const targetLang =
        document.getElementById("targetLang").value;

    if(text.trim() === ""){
        alert("Please enter text");
        return;
    }

    try {

        const response = await fetch(
            "https://translate.argosopentech.com/translate",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    q: text,
                    source: sourceLang,
                    target: targetLang,
                    format: "text"
                })
            }
        );

        const data = await response.json();

        document.getElementById(
            "translatedText"
        ).innerText =
            data.translatedText;

    } catch(error) {

        console.log(error);
        alert("Translation Failed!");
    }
}