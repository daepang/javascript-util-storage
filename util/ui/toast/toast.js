const toastMessage = (msg) => {
    //Promise 실행
    _tmpromise(msg)
        .then(function (em) {
            em.classList.remove("show");
        }, function (error) {
            console.error(error);
        });
}

const _tmpromise = (msg) => {
    var em = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(em)
    em.id = "tmsg";
    em.innerHTML = msg;
    em.classList.add("show");
    return new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            if (msg !== null && typeof msg === "string") {
                resolve(em);
            } else {
                reject(Error("rejected!"));
            }
        }, 3000);
    });
};