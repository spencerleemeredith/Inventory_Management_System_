class Notification {
    success() {
        new Noty({
            type: "success",
            layout: "topRight",
            text: "success it worked!",
            timeout: 1000
        }).show();
    }

    alert() {
        new Noty({
            type: "alert",
            layout: "topRight",
            text: "Uhhh Try Again?",
            timeout: 1000
        }).show();
    }

    error() {
        new Noty({
            type: "alert",
            layout: "topRight",
            text: "That Is A No No =( ! ",
            timeout: 1000
        }).show();
    }

    warning() {
        new Noty({
            type: "warning",
            layout: "topRight",
            text: "You Are Going To In Trouble Mister/Mam ",
            timeout: 1000
        }).show();
    }
}

export default Notification = new Notification();
