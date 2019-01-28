    //Get Date and Time Info
    $(document).ready(function () {
        function timeDate() {


            var today = new Date();
            console.log(today);


            document.getElementById('date').innerHTML = today.getDate();
            document.getElementById('time').innerHTML = today.getHours() + ':' + today.getMinutes();

            var timeOut = setTimeout(function () {
                timeDate();
            }, 2000);

        };

        timeDate();
    });