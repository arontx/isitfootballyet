
function football() {
    this.init = function(a) {

        var q = new Date();
        var m = q.getMonth();
        var d = q.getDate();
        var y = q.getFullYear();
        var today = new Date(y, m, d);
        var fball = document.getElementById("football");

        var games;

        $.ajax({
            type: 'GET',
            url: 'football.json',
            async: false,
            dataType: 'json',
            success: function(data) {
                games = data;
            },
            error: function(data) {
                json = data.responseJSON;
            }
        });

        for (var i = 0; i < games.length; i++) {
            var game = games[i];

            dt = new Date(game.date);

            var tzoffset = -1 * (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
            fbegin = (new Date(dt - tzoffset))

            if (today <= fbegin) {
                // alert(game.id);
                // fbegin=(new Date(dt - tzoffset))
                break;
            }
        }


        // alert(fbegin);

        // fbegin=new Date(2016,10,02,18,30);
        fend = new Date('2017-01-02');

        fball.innerHTML = 'NO';

        if (today >= fbegin && today <= fend) {
            fball.innerHTML = 'YES'
            document.getElementById('_z118').style.display = 'none';
            document.getElementById('countdown').style.display = 'none';
        } else {
            fball.innerHTML = 'NO';
            var l = "en"
            time_is_widget.init({
                _z118: {
                    id: "Central Standard Time_z118",
                    leading_zeros: "automatic",
                    template: '<a href="time.is/" id="time_is_link"></a>'
                        //+'<h1 style="text-align:left">headline</h1>'
                        +
                        '<table style="width:100%" border="0" cellpadding="0" cellspacing="0">' +
                        '<tr>' +
                        '<td style="text-align:center"><a href="http://ourdailybears.com">(days<br/>)(hours<br/>)(minutes<br/>)seconds</a></td>' +
                        '<td></td>' +
                        '</tr>' +
                        '</table>',
                    countdown_to: fbegin,
                    units: "long",
                    units_abbr: ["y", "d", "h", "m", "s"],
                    unit_names: ["year", "day", "hour", "minute", "second"],
                    units_pl: ["years", "days", "hours", "minutes", "seconds"],
                    on_0: "Time is up!",
                    headline: 'Countdown to Football!'
                }
            });

            // var tm_n=0,templates=['<h1 style="text-align:left">headline</h1><table style="width:100%" border="0" cellpadding="0" cellspacing="0"><tr><td></td><td style="text-align:left">(days<br/>)(hours<br/>)(minutes<br/>)seconds</td><td></td></tr></table>',
            // '<h1>headline</h1>(days )(hours )(minutes )seconds','<h1>headline</h1>(days:)hours:minutes:seconds'],lz=["automatic","automatic","on"],ul=["long","short","off"]
            // function change_tmpl(n){
            // // tm_n++;if(templates.length==tm_n)tm_n=0
            // time_is_widget.ca["_z118"]["template"]=templates[n]
            // time_is_widget.ca["_z118"]["leading_zeros"]=lz[n]
            // time_is_widget.ca["_z118"]["units"]=ul[n]
            // }
        }

    }
}


var football = new football