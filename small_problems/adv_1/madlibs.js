function madlibs(template) {
    const REPLACEMENT_TEXT = {
        adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
        noun: ["fox", "dog", "head", "leg", "tail"],
        verb: ["jumps", "lifts", "bites", "licks", "pats"],
        adverb: ["easily", "lazily", "noisily", "excitedly"]
    }

    function replaceText(match) {
        let key = match.replace(/[^a-z]/g, "");
        let index = Math.floor(Math.random() * REPLACEMENT_TEXT[key].length)
        return REPLACEMENT_TEXT[key][index];
    }

    return template.replace(/%{[a-z]+}/g, replaceText);
}

let template1 =
    "The %{adjective} brown %{noun} %{adverb} " +
    "%{verb} the %{adjective} yellow " +
    "%{noun}, who %{adverb} %{verb} his " +
    "%{noun} and looks around.";


console.log(madlibs(template1));